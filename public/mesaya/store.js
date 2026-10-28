/* =========================================================
   MesaYa · Capa de datos
   - Modo DEMO: localStorage + BroadcastChannel (cliente y panel
     en pestañas del mismo navegador). Sin servidor.
   - Modo FIREBASE: Firestore, diseñado para leer lo mínimo:
       · Menú e info del restaurante: viven en config.js (0 lecturas)
       · Agotados/precios: 1 documento, 1 lectura por visita
       · Cliente: escucha SOLO su propia solicitud mientras está activa
       · Salón: 1 escucha de las solicitudes activas
       · Analítica: 1 documento por día (30 lecturas = 1 mes)
       · Inventario: 1 documento
   ========================================================= */
(function () {
  const C = window.MESAYA;
  const RID = C.restaurant.id;
  const FB = "https://www.gstatic.com/firebasejs/10.12.2/";
  const ACTIVE = ["pending", "amount_sent", "reported_paid"];
  let mode = C.firebase && C.firebase.apiKey ? "firebase" : "demo";
  let db = null, auth = null, uid = null, FV = null;

  /* ---------- utilidades ---------- */
  const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const dayKey = (t) => { const d = new Date(t || Date.now()); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  function tableKey(m) {
    let h = 2166136261; const s = RID + "|" + m + "|" + (C.tableSalt || "");
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(36).slice(0, 6);
  }
  function loadScript(src) {
    return new Promise((res, rej) => { const s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = () => rej(new Error("No se pudo cargar " + src)); document.head.appendChild(s); });
  }

  /* ---------- modo demo ---------- */
  const DKEY = "mesaya_demo_db_" + RID;
  const emptyDb = () => ({ requests: {}, customers: {}, stats: {}, feedback: [], public: { soldOut: [], prices: {} }, inventory: null });
  const dread = () => Object.assign(emptyDb(), lsGet(DKEY, {}));
  const listeners = new Set();
  let bc = null;
  try { bc = new BroadcastChannel("mesaya_" + RID); bc.onmessage = () => fire(); } catch (e) {}
  window.addEventListener("storage", (e) => { if (e.key === DKEY) fire(); });
  function fire() { listeners.forEach((f) => { try { f(); } catch (e) { console.error(e); } }); }
  function dwrite(d) { lsSet(DKEY, d); if (bc) { try { bc.postMessage(1); } catch (e) {} } fire(); }
  function dwatch(fn) { listeners.add(fn); fn(); return () => listeners.delete(fn); }
  function inc(obj, path, n) { const ks = path.split("."); let o = obj; for (let i = 0; i < ks.length - 1; i++) { o[ks[i]] = o[ks[i]] || {}; o = o[ks[i]]; } o[ks[ks.length - 1]] = (o[ks[ks.length - 1]] || 0) + n; }

  /* ---------- rutas Firestore ---------- */
  const rdoc = () => db.collection("restaurants").doc(RID);
  const reqs = () => rdoc().collection("requests");
  const custs = () => rdoc().collection("customers");

  const roleOf = (email) => {
    if (!email) return null; const e = email.toLowerCase();
    if ((C.ownerEmails || []).map((x) => x.toLowerCase()).includes(e)) return "owner";
    if ((C.staffEmails || []).map((x) => x.toLowerCase()).includes(e)) return "staff";
    return null;
  };

  const Store = {
    mode: () => mode,
    uid: () => uid,
    tableKey, dayKey,

    async init(role) {
      if (mode === "demo") {
        uid = lsGet("mesaya_uid", null);
        if (!uid) { uid = "u" + newId(); lsSet("mesaya_uid", uid); }
        return mode;
      }
      await loadScript(FB + "firebase-app-compat.js");
      await loadScript(FB + "firebase-auth-compat.js");
      await loadScript(FB + "firebase-firestore-compat.js");
      if (!firebase.apps.length) firebase.initializeApp(C.firebase);
      db = firebase.firestore(); auth = firebase.auth(); FV = firebase.firestore.FieldValue;
      const user = await new Promise((r) => { const u = auth.onAuthStateChanged((x) => { u(); r(x); }); });
      if (role === "client") {
        if (!user) await auth.signInAnonymously();
        uid = auth.currentUser.uid;
      }
      return mode;
    },

    /* ----- acceso a paneles ----- */
    onRole(cb) {
      if (mode === "demo") { let r = null; try { r = sessionStorage.getItem("mesaya_role"); } catch (e) {} cb(r); return; }
      auth.onAuthStateChanged((u) => cb(u && !u.isAnonymous ? roleOf(u.email) : null));
    },
    async login(kind, email, pass) {
      if (mode === "demo") {
        const ok = kind === "owner" ? pass === String(C.demoOwnerPin) : (pass === String(C.demoStaffPin) || pass === String(C.demoOwnerPin));
        if (!ok) throw new Error("PIN incorrecto");
        const role = pass === String(C.demoOwnerPin) ? "owner" : "staff";
        try { sessionStorage.setItem("mesaya_role", role); } catch (e) {}
        return role;
      }
      const cred = await auth.signInWithEmailAndPassword(email, pass);
      const role = roleOf(cred.user.email);
      if (!role || (kind === "owner" && role !== "owner")) { await auth.signOut(); throw new Error("Este correo no tiene acceso a este panel"); }
      return role;
    },
    async logout() { if (mode === "demo") { try { sessionStorage.removeItem("mesaya_role"); } catch (e) {} return; } await auth.signOut(); },

    /* ----- solicitudes (llamar mesero, cuenta, canje) ----- */
    async createRequest(data) {
      const doc = Object.assign({}, data, { uid, status: "pending", createdAt: Date.now() });
      if (mode === "demo") { const d = dread(); const id = newId(); d.requests[id] = Object.assign({ id }, doc); dwrite(d); return id; }
      const ref = await reqs().add(doc); return ref.id;
    },
    watchRequest(id, cb) {
      if (mode === "demo") { let last = ""; return dwatch(() => { const r = dread().requests[id] || null; const s = JSON.stringify(r); if (s !== last) { last = s; cb(r); } }); }
      return reqs().doc(id).onSnapshot((s) => cb(s.exists ? Object.assign({ id: s.id }, s.data()) : null), (e) => console.error(e));
    },
    async updateRequest(id, patch) {
      patch = Object.assign({}, patch, { updatedAt: Date.now() });
      if (mode === "demo") { const d = dread(); if (d.requests[id]) { Object.assign(d.requests[id], patch); dwrite(d); } return; }
      await reqs().doc(id).update(patch);
    },
    watchActive(cb) {
      const sort = (l) => l.sort((a, b) => a.createdAt - b.createdAt);
      if (mode === "demo") { let last = ""; return dwatch(() => { const l = sort(Object.values(dread().requests).filter((r) => ACTIVE.includes(r.status))); const s = JSON.stringify(l); if (s !== last) { last = s; cb(l); } }); }
      return reqs().where("status", "in", ACTIVE).onSnapshot((q) => cb(sort(q.docs.map((d) => Object.assign({ id: d.id }, d.data())))), (e) => { console.error(e); cb(null, e); });
    },

    /* ----- clientes y puntos ----- */
    async getCustomer(phone) {
      if (mode === "demo") return dread().customers[phone] || null;
      const s = await custs().doc(phone).get(); return s.exists ? s.data() : null;
    },
    async createCustomer(c) {
      const doc = Object.assign({}, c, { points: 0, visits: 0, redeems: 0, history: [], createdAt: Date.now() });
      if (mode === "demo") { const d = dread(); d.customers[c.phone] = doc; dwrite(d); return doc; }
      await custs().doc(c.phone).set(doc); return doc;
    },
    async updateCustomerInfo(phone, patch) {
      const p = { name: patch.name, email: patch.email || "", birthday: patch.birthday || "", promos: !!patch.promos };
      if (mode === "demo") { const d = dread(); if (d.customers[phone]) { Object.assign(d.customers[phone], p); dwrite(d); } return; }
      await custs().doc(phone).update(p);
    },
    /* lo usa el salón al confirmar un pago o aplicar un canje */
    async addPoints(phone, delta, entry) {
      if (mode === "demo") {
        const d = dread(); const c = d.customers[phone]; if (!c) return;
        c.points = Math.max(0, (c.points || 0) + delta);
        if (entry) { c.history = [entry].concat(c.history || []).slice(0, 30); if (entry.type === "visit") c.visits = (c.visits || 0) + 1; if (entry.type === "redeem") c.redeems = (c.redeems || 0) + 1; }
        dwrite(d); return;
      }
      const upd = { points: FV.increment(delta) };
      if (entry) { upd.history = FV.arrayUnion(entry); if (entry.type === "visit") upd.visits = FV.increment(1); if (entry.type === "redeem") upd.redeems = FV.increment(1); }
      await custs().doc(phone).set(upd, { merge: true });
    },

    /* ----- agotados y precios (1 documento público) ----- */
    async getPublic() {
      if (mode === "demo") return dread().public;
      const s = await rdoc().collection("public").doc("menu").get(); return s.exists ? s.data() : { soldOut: [], prices: {} };
    },
    async setPublic(p) {
      const doc = { soldOut: p.soldOut || [], prices: p.prices || {}, updatedAt: Date.now() };
      if (mode === "demo") { const d = dread(); d.public = doc; dwrite(d); return; }
      await rdoc().collection("public").doc("menu").set(doc);
    },

    /* ----- analítica: 1 documento por día con contadores ----- */
    async recordSale(s) {
      const day = dayKey(s.at), h = String(new Date(s.at).getHours());
      if (mode === "demo") {
        const d = dread(); const st = d.stats[day] = d.stats[day] || {};
        inc(st, "sales", s.amount); inc(st, "bills", 1); inc(st, "points", s.points || 0);
        inc(st, "byMethod." + s.method, s.amount); inc(st, "byHour." + h, s.amount); inc(st, "tables." + s.mesa, s.amount);
        if (s.customer) inc(st, "members", 1);
        Object.entries(s.views || {}).forEach(([k, v]) => inc(st, "views." + k, v));
        dwrite(d); return;
      }
      const u = { sales: FV.increment(s.amount), bills: FV.increment(1), points: FV.increment(s.points || 0),
        byMethod: { [s.method]: FV.increment(s.amount) }, byHour: { [h]: FV.increment(s.amount) }, tables: { [s.mesa]: FV.increment(s.amount) } };
      if (s.customer) u.members = FV.increment(1);
      const v = {}; Object.entries(s.views || {}).forEach(([k, n]) => { v[k] = FV.increment(n); }); if (Object.keys(v).length) u.views = v;
      await rdoc().collection("stats").doc(day).set(u, { merge: true });
    },
    async recordOrder(items) {
      const day = dayKey();
      if (mode === "demo") { const d = dread(); const st = d.stats[day] = d.stats[day] || {}; inc(st, "orders", 1); items.forEach((i) => inc(st, "sold." + i.id, i.qty)); dwrite(d); return; }
      const sold = {}; items.forEach((i) => { sold[i.id] = FV.increment(i.qty); });
      await rdoc().collection("stats").doc(day).set({ orders: FV.increment(1), sold }, { merge: true });
    },
    async recordEvent(kind) { // "calls" | "redeems"
      const day = dayKey();
      if (mode === "demo") { const d = dread(); const st = d.stats[day] = d.stats[day] || {}; inc(st, kind, 1); dwrite(d); return; }
      await rdoc().collection("stats").doc(day).set({ [kind]: FV.increment(1) }, { merge: true });
    },
    async getStats(fromDay) {
      if (mode === "demo") { const st = dread().stats; return Object.keys(st).filter((k) => k >= fromDay).sort().map((k) => Object.assign({ day: k }, st[k])); }
      const q = await rdoc().collection("stats").where(firebase.firestore.FieldPath.documentId(), ">=", fromDay).get();
      return q.docs.map((d) => Object.assign({ day: d.id }, d.data())).sort((a, b) => a.day < b.day ? -1 : 1);
    },

    /* ----- calificaciones ----- */
    async addFeedback(f) {
      const doc = Object.assign({}, f, { at: Date.now(), uid });
      if (mode === "demo") { const d = dread(); d.feedback = [doc].concat(d.feedback).slice(0, 500); dwrite(d); return; }
      await rdoc().collection("feedback").add(doc);
    },
    async getFeedback(since) {
      if (mode === "demo") return dread().feedback.filter((f) => f.at >= since).sort((a, b) => b.at - a.at);
      const q = await rdoc().collection("feedback").where("at", ">=", since).get();
      return q.docs.map((d) => d.data()).sort((a, b) => b.at - a.at);
    },

    /* ----- inventario: 1 documento ----- */
    async getInventory() {
      if (mode === "demo") return dread().inventory;
      const s = await rdoc().collection("private").doc("inventory").get(); return s.exists ? s.data() : null;
    },
    async saveInventory(inv) {
      inv = Object.assign({}, inv, { updatedAt: Date.now() });
      if (mode === "demo") { const d = dread(); d.inventory = inv; dwrite(d); return; }
      await rdoc().collection("private").doc("inventory").set(inv);
    },

    /* ----- solo demo: datos de ejemplo para la analítica ----- */
    seedDemo() {
      if (mode !== "demo") return;
      const d = dread(); if (Object.keys(d.stats).length > 3) return;
      const ids = []; C.menu.forEach((m) => { for (let k = 0; k < (m.popular ? 5 : 2); k++) ids.push(m.id); }); let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
      for (let i = 29; i >= 1; i--) {
        const t = Date.now() - i * 86400000; const day = dayKey(t); const dow = new Date(t).getDay();
        const st = d.stats[day] = {}; const n = Math.round((dow === 0 || dow === 6 ? 34 : 22) + rnd() * 12);
        for (let b = 0; b < n; b++) {
          const amt = Math.round((5000 + rnd() * 14000) / 100) * 100; const hr = [7, 8, 9, 12, 12, 13, 13, 14, 18, 19, 19, 20][Math.floor(rnd() * 12)];
          const m = ["sinpe", "sinpe", "sinpe", "tarjeta", "tarjeta", "efectivo"][Math.floor(rnd() * 6)];
          inc(st, "sales", amt); inc(st, "bills", 1); inc(st, "byMethod." + m, amt); inc(st, "byHour." + hr, amt); inc(st, "tables." + (1 + Math.floor(rnd() * C.restaurant.tables)), amt);
          inc(st, "points", Math.floor(amt / C.rules.colonesPerPoint)); if (rnd() < 0.4) inc(st, "members", 1);
          for (let v = 0; v < 4; v++) { const id = ids[Math.floor(rnd() * ids.length)]; inc(st, "views." + id, 1); }
          if (rnd() < 0.7) { inc(st, "orders", 1); for (let v = 0; v < 3; v++) { const id = ids[Math.floor(Math.pow(rnd(), 1.3) * ids.length)]; inc(st, "sold." + id, 1); } }
        }
        inc(st, "calls", Math.round(n * 0.6)); inc(st, "redeems", Math.round(rnd() * 3));
      }
      const good = ["Muy rico el casado, volveremos", "El chifrijo buenísimo", "Excelente atención"], bad = ["Tardaron un poco con la cuenta", "El café estaba frío", "Mucho ruido en la terraza"];
      for (let i = 0; i < 24; i++) { const r = rnd() < 0.78 ? (rnd() < 0.6 ? 5 : 4) : (rnd() < 0.5 ? 3 : 2); d.feedback.push({ rating: r, text: r < 4 ? bad[Math.floor(rnd() * bad.length)] : rnd() < 0.3 ? good[Math.floor(rnd() * good.length)] : "", mesa: 1 + Math.floor(rnd() * 12), at: Date.now() - Math.floor(rnd() * 29) * 86400000 }); }
      if (!d.inventory) d.inventory = {
        items: [
          { id: "i1", name: "Arroz", unit: "kg", stock: 18, min: 10, cost: 1100 },
          { id: "i2", name: "Frijoles negros", unit: "kg", stock: 6, min: 8, cost: 1600 },
          { id: "i3", name: "Pechuga de pollo", unit: "kg", stock: 9, min: 6, cost: 3900 },
          { id: "i4", name: "Camarón", unit: "kg", stock: 2.5, min: 3, cost: 9800 },
          { id: "i5", name: "Huevos", unit: "cartón", stock: 7, min: 4, cost: 3200 },
          { id: "i6", name: "Café Tarrazú", unit: "kg", stock: 3, min: 2, cost: 7500 },
          { id: "i7", name: "Natilla", unit: "unid", stock: 10, min: 6, cost: 900 },
          { id: "i8", name: "Cas (pulpa)", unit: "kg", stock: 1, min: 3, cost: 2400 }
        ],
        moves: [
          { at: Date.now() - 86400000, itemId: "i1", name: "Arroz", qty: 20, type: "in", note: "Compra Walmart" },
          { at: Date.now() - 3600000 * 5, itemId: "i4", name: "Camarón", qty: -1.5, type: "out", note: "Consumo del día" }
        ]
      };
      dwrite(d);
    }
  };

  window.Store = Store;
})();
