/* =========================================================
   MesaYa · Capa de datos (Firestore + Firebase Auth + Sincronización)
   - Conectado a Firebase (Firestore, Auth con Google y Correo/Contraseña, Analytics)
   - Respaldo automático en tiempo real (BroadcastChannel + localStorage)
   ========================================================= */
(function () {
  const C = window.MESAYA;
  const RID = C.restaurant.id;
  const FB = "https://www.gstatic.com/firebasejs/10.12.2/";
  const ACTIVE = ["pending", "amount_sent", "reported_paid", "ready"];
  let mode = C.firebase && C.firebase.apiKey ? "firebase" : "demo";
  let db = null, auth = null, analytics = null, uid = null, FV = null;

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
    return new Promise((res, rej) => {
      if (document.querySelector(`script[src="${src}"]`)) return res();
      const s = document.createElement("script");
      s.src = src;
      s.onload = res;
      s.onerror = () => rej(new Error("No se pudo cargar " + src));
      document.head.appendChild(s);
    });
  }

  /* ---------- espejo local y modo demo ---------- */
  const DKEY = "mesaya_demo_db_" + RID;
  const BASE_MENU = (C.menu || []).map((m) => Object.assign({}, m));
  const emptyDb = () => ({ requests: {}, customers: {}, stats: {}, feedback: [], public: { soldOut: [], prices: {}, customDishes: [], deletedDishes: [], customImages: {} }, inventory: { items: [], moves: [] } });
  const dread = () => Object.assign(emptyDb(), lsGet(DKEY, {}));
  // Asegurar que los contadores arranquen en cero listos para demostración comercial
  try {
    if (!localStorage.getItem("mesaya_zero_init_v2")) {
      const cur = dread();
      cur.stats = {};
      cur.feedback = [];
      cur.requests = {};
      lsSet(DKEY, cur);
      localStorage.setItem("mesaya_zero_init_v2", "1");
    }
  } catch (e) {}
  const listeners = new Set();
  let bc = null;
  try { bc = new BroadcastChannel("mesaya_" + RID); bc.onmessage = () => fire(); } catch (e) {}
  window.addEventListener("storage", (e) => { if (e.key === DKEY) fire(); });
  function fire() { listeners.forEach((f) => { try { f(); } catch (e) { console.error(e); } }); }
  function dwrite(d) { lsSet(DKEY, d); if (bc) { try { bc.postMessage(1); } catch (e) {} } fire(); }
  function dwatch(fn) { listeners.add(fn); fn(); return () => listeners.delete(fn); }
  function inc(obj, path, n) { const ks = path.split("."); let o = obj; for (let i = 0; i < ks.length - 1; i++) { o[ks[i]] = o[ks[i]] || {}; o = o[ks[i]]; } o[ks[ks.length - 1]] = (o[ks[ks.length - 1]] || 0) + n; }

  function applyPublicToMenu(pub) {
    if (!pub) return;
    const deleted = new Set(pub.deletedDishes || []);
    const imgs = pub.customImages || {};
    const custom = Array.isArray(pub.customDishes) ? pub.customDishes : [];
    const nextMenu = [];
    BASE_MENU.forEach((item) => {
      if (deleted.has(item.id)) return;
      const copy = Object.assign({}, item);
      if (imgs[copy.id] !== undefined) copy.img = imgs[copy.id];
      nextMenu.push(copy);
    });
    custom.forEach((item) => {
      if (!item || !item.id || deleted.has(item.id)) return;
      const copy = Object.assign({ g: ["#7A4B2A", "#E3B04B"], tags: [], popular: false }, item);
      if (imgs[copy.id] !== undefined) copy.img = imgs[copy.id];
      const idx = nextMenu.findIndex((x) => x.id === copy.id);
      if (idx >= 0) nextMenu[idx] = copy;
      else nextMenu.push(copy);
    });
    C.menu.length = 0;
    nextMenu.forEach((m) => C.menu.push(m));
  }

  /* ---------- rutas Firestore ---------- */
  const rdoc = () => db.collection("restaurants").doc(RID);
  const reqs = () => rdoc().collection("requests");
  const custs = () => rdoc().collection("customers");

  const roleOf = (u) => {
    if (!u || u.isAnonymous) return null;
    const email = (u.email || "").toLowerCase();
    if (!email) return "owner";
    const owners = (C.ownerEmails || []).map((x) => x.toLowerCase());
    const staff = (C.staffEmails || []).map((x) => x.toLowerCase());
    if (C.strictEmails) {
      if (owners.includes(email)) return "owner";
      if (staff.includes(email)) return "staff";
      return null;
    }
    if (staff.includes(email) && !owners.includes(email)) return "staff";
    return "owner";
  };

  function humanAuthError(err) {
    const code = (err && err.code) || "";
    const msg = (err && err.message) || "";
    if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
      return "Correo o contraseña incorrectos. Si aún no tienes cuenta, toca «Crear cuenta».";
    }
    if (code === "auth/email-already-in-use") {
      return "Este correo ya está registrado. Toca «Entrar con correo».";
    }
    if (code === "auth/weak-password") {
      return "La contraseña debe tener al menos 6 caracteres.";
    }
    if (code === "auth/invalid-email") {
      return "Escribe un correo electrónico válido.";
    }
    if (code === "auth/popup-closed-by-user") {
      return "Se cerró la ventana de Google antes de terminar.";
    }
    if (code === "auth/operation-not-allowed") {
      return "Habilita este método de acceso (Correo/Contraseña o Google) en Firebase Console → Authentication → Sign-in method.";
    }
    if (code === "auth/unauthorized-domain") {
      return "Agrega este dominio en Firebase Console → Authentication → Settings → Authorized domains.";
    }
    return msg || "No se pudo iniciar sesión.";
  }

  const Store = {
    mode: () => mode,
    uid: () => uid,
    user: () => (auth && auth.currentUser && !auth.currentUser.isAnonymous ? auth.currentUser : null),
    humanAuthError,
    tableKey,
    dayKey,

    async init(role) {
      let localUid = lsGet("mesaya_uid", null);
      if (!localUid) { localUid = "u" + newId(); lsSet("mesaya_uid", localUid); }
      uid = localUid;

      if (mode === "demo") {
        return mode;
      }

      await loadScript(FB + "firebase-app-compat.js");
      await loadScript(FB + "firebase-auth-compat.js");
      await loadScript(FB + "firebase-firestore-compat.js");
      loadScript(FB + "firebase-analytics-compat.js").then(() => {
        try { if (firebase.analytics) analytics = firebase.analytics(); } catch (e) {}
      }).catch(() => {});

      if (!firebase.apps.length) firebase.initializeApp(C.firebase);
      db = firebase.firestore();
      auth = firebase.auth();
      FV = firebase.firestore.FieldValue;

      const user = await new Promise((r) => { const u = auth.onAuthStateChanged((x) => { u(); r(x); }); });
      if (role === "client") {
        if (!user) {
          try {
            await auth.signInAnonymously();
          } catch (e) {
            console.warn("Acceso anónimo no habilitado en Firebase Auth; usando UID local para el cliente.", e);
          }
        }
        if (auth.currentUser && auth.currentUser.uid) {
          uid = auth.currentUser.uid;
        }
      } else if (user && user.uid) {
        uid = user.uid;
      }
      return mode;
    },

    /* ----- acceso a paneles (Google + Correo/Contraseña) ----- */
    onRole(cb) {
      if (mode === "demo") {
        let r = null;
        try { r = sessionStorage.getItem("mesaya_role"); } catch (e) {}
        cb(r);
        return;
      }
      auth.onAuthStateChanged((u) => {
        if (u && !u.isAnonymous) {
          uid = u.uid;
          cb(roleOf(u));
        } else {
          cb(null);
        }
      });
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
      const role = roleOf(cred.user);
      if (!role || (kind === "owner" && role !== "owner")) {
        await auth.signOut();
        throw new Error("Este correo no tiene permisos para este panel.");
      }
      return role;
    },

    async register(kind, email, pass) {
      if (mode === "demo") return this.login(kind, email, pass);
      const cred = await auth.createUserWithEmailAndPassword(email, pass);
      const role = roleOf(cred.user);
      if (!role || (kind === "owner" && role !== "owner")) {
        await auth.signOut();
        throw new Error("Este correo no tiene permisos para este panel.");
      }
      return role;
    },

    async loginWithGoogle(kind) {
      if (mode === "demo") {
        const role = kind === "owner" ? "owner" : "staff";
        try { sessionStorage.setItem("mesaya_role", role); } catch (e) {}
        return role;
      }
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const cred = await auth.signInWithPopup(provider);
      const role = roleOf(cred.user);
      if (!role || (kind === "owner" && role !== "owner")) {
        await auth.signOut();
        throw new Error("Esta cuenta de Google no tiene permisos para este panel.");
      }
      return role;
    },

    async logout() {
      if (mode === "demo") {
        try { sessionStorage.removeItem("mesaya_role"); } catch (e) {}
        return;
      }
      await auth.signOut();
    },

    /* ----- solicitudes (llamar mesero, cuenta, canje, pedidos) ----- */
    async createRequest(data) {
      const doc = Object.assign({}, data, { uid, status: "pending", createdAt: Date.now() });
      const d = dread();
      if (mode === "demo") {
        const id = newId();
        d.requests[id] = Object.assign({ id }, doc);
        dwrite(d);
        return id;
      }
      try {
        const ref = await reqs().add(doc);
        d.requests[ref.id] = Object.assign({ id: ref.id }, doc);
        dwrite(d);
        return ref.id;
      } catch (e) {
        console.warn("Firestore createRequest fallback local:", e);
        const id = newId();
        d.requests[id] = Object.assign({ id }, doc);
        dwrite(d);
        return id;
      }
    },

    watchRequest(id, cb) {
      let last = "";
      const emit = (r) => {
        const s = JSON.stringify(r);
        if (s !== last) { last = s; cb(r); }
      };
      const unsubLocal = dwatch(() => {
        const r = dread().requests[id] || null;
        if (r) emit(r);
      });
      if (mode === "demo") return unsubLocal;
      const unsubFb = reqs().doc(id).onSnapshot(
        (s) => {
          if (s.exists) {
            const data = Object.assign({ id: s.id }, s.data());
            const d = dread();
            d.requests[id] = data;
            lsSet(DKEY, d);
            emit(data);
          } else {
            emit(dread().requests[id] || null);
          }
        },
        (e) => console.warn("watchRequest Firestore warning:", e)
      );
      return () => { unsubLocal(); unsubFb(); };
    },

    async updateRequest(id, patch) {
      patch = Object.assign({}, patch, { updatedAt: Date.now() });
      const d = dread();
      if (d.requests[id]) {
        Object.assign(d.requests[id], patch);
        dwrite(d);
      }
      if (mode === "demo") return;
      try {
        await reqs().doc(id).set(patch, { merge: true });
      } catch (e) {
        console.warn("Firestore updateRequest warning:", e);
      }
    },

    watchActive(cb) {
      const sort = (l) => l.sort((a, b) => a.createdAt - b.createdAt);
      let fbDocs = {};
      let hasFb = false;
      let last = "";

      const emitMerged = () => {
        const localReqs = dread().requests || {};
        const mergedMap = Object.assign({}, localReqs, fbDocs);
        const list = sort(Object.values(mergedMap).filter((r) => r && ACTIVE.includes(r.status)));
        const s = JSON.stringify(list);
        if (s !== last) {
          last = s;
          cb(list);
        }
      };

      const unsubLocal = dwatch(emitMerged);
      if (mode === "demo") return unsubLocal;

      const unsubFb = reqs().where("status", "in", ACTIVE).onSnapshot(
        (q) => {
          hasFb = true;
          const nextFb = {};
          const d = dread();
          q.docs.forEach((doc) => {
            const item = Object.assign({ id: doc.id }, doc.data());
            nextFb[doc.id] = item;
            d.requests[doc.id] = item;
          });
          Object.keys(d.requests).forEach((k) => {
            if (ACTIVE.includes(d.requests[k].status) && !nextFb[k] && hasFb) {
              // Keep local only if created very recently (< 5s) or synced
            }
          });
          fbDocs = nextFb;
          lsSet(DKEY, d);
          emitMerged();
        },
        (e) => {
          console.warn("watchActive Firestore warning (usando respaldo local):", e);
          emitMerged();
        }
      );
      return () => { unsubLocal(); unsubFb(); };
    },

    /* cocina: solo pedidos aprobados por el salón que aún no están listos */
    watchKitchen(cb) {
      const sort = (l) => l.sort((a, b) => (a.acceptedAt || a.createdAt) - (b.acceptedAt || b.createdAt));
      let fbDocs = {};
      let last = "";

      const emitMerged = () => {
        const localReqs = dread().requests || {};
        const mergedMap = Object.assign({}, localReqs, fbDocs);
        const list = sort(Object.values(mergedMap).filter((r) => r && r.status === "kitchen"));
        const s = JSON.stringify(list);
        if (s !== last) {
          last = s;
          cb(list);
        }
      };

      const unsubLocal = dwatch(emitMerged);
      if (mode === "demo") return unsubLocal;

      const unsubFb = reqs().where("status", "==", "kitchen").onSnapshot(
        (q) => {
          const nextFb = {};
          const d = dread();
          q.docs.forEach((doc) => {
            const item = Object.assign({ id: doc.id }, doc.data());
            nextFb[doc.id] = item;
            d.requests[doc.id] = item;
          });
          fbDocs = nextFb;
          lsSet(DKEY, d);
          emitMerged();
        },
        (e) => {
          console.warn("watchKitchen Firestore warning (usando respaldo local):", e);
          emitMerged();
        }
      );
      return () => { unsubLocal(); unsubFb(); };
    },

    /* ----- clientes, puntos, login con Google y correo de bienvenida ----- */
    async getCustomer(key) {
      if (!key) return null;
      const cleanKey = String(key).trim();
      if (mode !== "demo") {
        try {
          const s = await custs().doc(cleanKey).get();
          if (s.exists) {
            const data = Object.assign({ phone: cleanKey }, s.data());
            const d = dread();
            d.customers[cleanKey] = data;
            lsSet(DKEY, d);
            return data;
          }
        } catch (e) { console.warn("getCustomer fallback:", e); }
      }
      return dread().customers[cleanKey] || null;
    },

    async findCustomer({ phone, email }) {
      const pClean = (phone || "").replace(/\D/g, "");
      const eClean = (email || "").trim().toLowerCase();

      if (pClean) {
        const byPhone = await this.getCustomer(pClean);
        if (byPhone) return byPhone;
      }

      if (eClean) {
        const emailKey = "g_" + eClean.replace(/[^a-z0-9]/g, "_");
        const byEmailKey = await this.getCustomer(emailKey);
        if (byEmailKey) return byEmailKey;

        if (mode !== "demo") {
          try {
            const q = await custs().where("emailLower", "==", eClean).limit(1).get();
            if (!q.empty) {
              const doc = q.docs[0];
              const data = Object.assign({ phone: doc.id }, doc.data());
              const d = dread();
              d.customers[doc.id] = data;
              lsSet(DKEY, d);
              return data;
            }
          } catch (e) { console.warn("findCustomer by email query fallback:", e); }
        }

        const localAll = Object.values(dread().customers || {});
        const foundLocal = localAll.find((c) => c && (c.email || "").toLowerCase() === eClean);
        if (foundLocal) return foundLocal;
      }
      return null;
    },

    async createCustomer(c) {
      const eClean = (c.email || "").trim().toLowerCase();
      const key = (c.phone && String(c.phone).replace(/\D/g, "")) || (eClean ? "g_" + eClean.replace(/[^a-z0-9]/g, "_") : "c_" + newId());
      const doc = Object.assign(
        {
          phone: key,
          displayPhone: c.displayPhone || (key.startsWith("g_") ? "" : key),
          name: c.name || "Cliente",
          email: (c.email || "").trim(),
          emailLower: eClean,
          birthday: c.birthday || "",
          promos: c.promos !== undefined ? !!c.promos : true,
          photoURL: c.photoURL || "",
          provider: c.provider || "form",
          likes: Array.isArray(c.likes) ? c.likes : [],
          points: c.points || 0,
          visits: c.visits || 0,
          redeems: c.redeems || 0,
          history: Array.isArray(c.history) ? c.history : [],
          createdAt: Date.now(),
          updatedAt: Date.now()
        },
        c,
        { phone: key, emailLower: eClean }
      );
      const d = dread();
      d.customers[key] = doc;
      dwrite(d);
      if (mode !== "demo") {
        try { await custs().doc(key).set(doc, { merge: true }); } catch (e) { console.warn("createCustomer fallback:", e); }
      }
      return doc;
    },

    async updateCustomerInfo(phoneKey, patch) {
      const eClean = (patch.email || "").trim().toLowerCase();
      const p = {
        name: patch.name,
        email: (patch.email || "").trim(),
        emailLower: eClean,
        birthday: patch.birthday || "",
        promos: !!patch.promos,
        updatedAt: Date.now()
      };
      if (patch.displayPhone !== undefined) p.displayPhone = patch.displayPhone;
      if (Array.isArray(patch.likes)) p.likes = patch.likes;
      const d = dread();
      if (d.customers[phoneKey]) { Object.assign(d.customers[phoneKey], p); dwrite(d); }
      if (mode === "demo") return;
      try { await custs().doc(phoneKey).set(p, { merge: true }); } catch (e) { console.warn("updateCustomerInfo fallback:", e); }
    },

    async updateCustomerLikes(phoneKey, likesArr) {
      if (!phoneKey) return;
      const d = dread();
      if (d.customers[phoneKey]) {
        d.customers[phoneKey].likes = likesArr;
        dwrite(d);
      }
      if (mode === "demo") return;
      try { await custs().doc(phoneKey).set({ likes: likesArr, updatedAt: Date.now() }, { merge: true }); } catch (e) {}
    },

    watchCustomer(phoneKey, cb) {
      if (!phoneKey) return () => {};
      let last = "";
      const emit = (c) => {
        if (!c) return;
        const s = JSON.stringify(c);
        if (s !== last) { last = s; cb(c); }
      };
      const unsubLocal = dwatch(() => emit(dread().customers[phoneKey]));
      if (mode === "demo") return unsubLocal;
      const unsubFb = custs().doc(phoneKey).onSnapshot(
        (s) => {
          if (s.exists) {
            const data = Object.assign({ phone: s.id }, s.data());
            const d = dread();
            d.customers[phoneKey] = data;
            lsSet(DKEY, d);
            emit(data);
          }
        },
        (e) => console.warn("watchCustomer warning:", e)
      );
      return () => { unsubLocal(); unsubFb(); };
    },

    async clientLoginWithGoogle(currentLikes = []) {
      if (mode === "demo") {
        throw new Error("Conecta Firebase para usar Google Sign-In");
      }
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const cred = await auth.signInWithPopup(provider);
      const u = cred.user;
      if (!u) throw new Error("No se pudo obtener el perfil de Google");
      uid = u.uid;

      const email = (u.email || "").trim();
      const name = (u.displayName || email.split("@")[0] || "Cliente").trim();
      const existing = await this.findCustomer({ email });
      if (existing) {
        const mergedLikes = Array.from(new Set([...(existing.likes || []), ...currentLikes]));
        existing.name = existing.name || name;
        existing.email = existing.email || email;
        existing.photoURL = u.photoURL || existing.photoURL || "";
        existing.likes = mergedLikes;
        await this.updateCustomerInfo(existing.phone, existing);
        return { customer: existing, isNew: false };
      }

      const created = await this.createCustomer({
        name,
        email,
        photoURL: u.photoURL || "",
        provider: "google",
        promos: true,
        likes: currentLikes
      });
      return { customer: created, isNew: true };
    },

    async sendWelcomeEmail(customer) {
      if (!customer || !customer.email) return { ok: false };
      const payload = {
        email: customer.email,
        name: customer.name || "Cliente",
        phone: customer.displayPhone || (String(customer.phone || "").startsWith("g_") ? "" : customer.phone),
        points: customer.points || 0,
        restaurantName: C.restaurant.name,
        restaurantPhone: C.restaurant.phone,
        restaurantAddress: C.restaurant.address
      };
      let apiRes = { ok: true, email: customer.email, sentAt: Date.now() };
      try {
        const res = await fetch("/api/mesaya-welcome", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        if (res.ok) apiRes = await res.json();
      } catch (e) {
        console.warn("sendWelcomeEmail API warning:", e);
      }
      if (mode !== "demo" && db) {
        try {
          await rdoc().collection("mail").add({
            to: [customer.email],
            customerKey: customer.phone,
            customerName: customer.name,
            createdAt: Date.now(),
            message: {
              subject: apiRes.subject || `¡Bienvenido al Club de Puntos de ${C.restaurant.name}!`,
              html: apiRes.html || `<p>Hola ${customer.name}, gracias por registrarte en ${C.restaurant.name}. Tu saldo actual es de ${customer.points || 0} puntos.</p>`
            }
          });
        } catch (e) { console.warn("Firestore mail collection log warning:", e); }
      }
      return apiRes;
    },

    async listCustomers() {
      const d = dread();
      const map = Object.assign({}, d.customers || {});
      if (mode !== "demo") {
        try {
          const q = await custs().get();
          q.docs.forEach((doc) => {
            map[doc.id] = Object.assign({ phone: doc.id }, doc.data());
          });
          d.customers = map;
          lsSet(DKEY, d);
        } catch (e) { console.warn("listCustomers fallback:", e); }
      }
      return Object.values(map).sort((a, b) => (b.points || 0) - (a.points || 0) || (b.createdAt || 0) - (a.createdAt || 0));
    },

    async addPoints(phone, delta, entry) {
      if (!phone) return;
      const d = dread();
      let c = d.customers[phone];
      if (!c) {
        c = { phone, name: "Cliente", points: 0, visits: 0, redeems: 0, history: [], createdAt: Date.now() };
        d.customers[phone] = c;
      }
      c.points = Math.max(0, (c.points || 0) + delta);
      if (entry) {
        c.history = [entry].concat(c.history || []).slice(0, 30);
        if (entry.type === "visit") c.visits = (c.visits || 0) + 1;
        if (entry.type === "redeem") c.redeems = (c.redeems || 0) + 1;
      }
      dwrite(d);
      if (mode === "demo") return;
      try {
        const upd = { points: FV.increment(delta), updatedAt: Date.now() };
        if (entry) {
          upd.history = FV.arrayUnion(entry);
          if (entry.type === "visit") upd.visits = FV.increment(1);
          if (entry.type === "redeem") upd.redeems = FV.increment(1);
        }
        await custs().doc(phone).set(upd, { merge: true });
      } catch (e) { console.warn("addPoints fallback:", e); }
    },

    /* ----- agotados, precios y platos nuevos (1 documento público) ----- */
    applyPublicToMenu,

    async getPublic() {
      let pub = dread().public || { soldOut: [], prices: {}, customDishes: [], deletedDishes: [], customImages: {} };
      if (mode !== "demo") {
        try {
          const s = await rdoc().collection("public").doc("menu").get();
          if (s.exists) {
            pub = Object.assign({ soldOut: [], prices: {}, customDishes: [], deletedDishes: [], customImages: {} }, s.data());
            const d = dread();
            d.public = pub;
            lsSet(DKEY, d);
          }
        } catch (e) { console.warn("getPublic fallback:", e); }
      }
      applyPublicToMenu(pub);
      return pub;
    },

    async setPublic(p) {
      const cur = dread().public || {};
      const doc = {
        soldOut: p.soldOut !== undefined ? p.soldOut : (cur.soldOut || []),
        prices: p.prices !== undefined ? p.prices : (cur.prices || {}),
        customDishes: p.customDishes !== undefined ? p.customDishes : (cur.customDishes || []),
        deletedDishes: p.deletedDishes !== undefined ? p.deletedDishes : (cur.deletedDishes || []),
        customImages: p.customImages !== undefined ? p.customImages : (cur.customImages || {}),
        updatedAt: Date.now()
      };
      const d = dread();
      d.public = doc;
      applyPublicToMenu(doc);
      dwrite(d);
      if (mode === "demo") return doc;
      try { await rdoc().collection("public").doc("menu").set(doc); } catch (e) { console.warn("setPublic fallback:", e); }
      return doc;
    },

    watchPublic(cb) {
      let last = "";
      const emit = (pub) => {
        if (!pub) return;
        const s = JSON.stringify(pub);
        if (s !== last) {
          last = s;
          applyPublicToMenu(pub);
          cb(pub);
        }
      };
      const unsubLocal = dwatch(() => emit(dread().public));
      if (mode === "demo") return unsubLocal;
      const unsubFb = rdoc().collection("public").doc("menu").onSnapshot(
        (s) => {
          if (s.exists) {
            const pub = Object.assign({ soldOut: [], prices: {}, customDishes: [], deletedDishes: [], customImages: {} }, s.data());
            const d = dread();
            d.public = pub;
            lsSet(DKEY, d);
            emit(pub);
          }
        },
        (e) => console.warn("watchPublic warning:", e)
      );
      return () => { unsubLocal(); unsubFb(); };
    },

    async resetStatsToZero() {
      const d = dread();
      d.stats = {};
      d.feedback = [];
      d.requests = {};
      dwrite(d);
      try {
        Object.keys(localStorage).forEach((k) => {
          if (k.startsWith("mesaya_salon_today_")) localStorage.removeItem(k);
        });
      } catch (e) {}
      if (mode !== "demo") {
        try {
          const q = await rdoc().collection("stats").get();
          for (const doc of q.docs) {
            await doc.ref.delete();
          }
          const fq = await rdoc().collection("feedback").get();
          for (const doc of fq.docs) {
            await doc.ref.delete();
          }
        } catch (e) { console.warn("resetStatsToZero Firestore warning:", e); }
      }
    },

    /* ----- analítica: 1 documento por día con contadores ----- */
    async recordSale(s) {
      const day = dayKey(s.at), h = String(new Date(s.at).getHours());
      const d = dread();
      const st = d.stats[day] = d.stats[day] || {};
      inc(st, "sales", s.amount); inc(st, "bills", 1); inc(st, "points", s.points || 0);
      inc(st, "byMethod." + s.method, s.amount); inc(st, "byHour." + h, s.amount); inc(st, "tables." + s.mesa, s.amount);
      if (s.customer) inc(st, "members", 1);
      Object.entries(s.views || {}).forEach(([k, v]) => inc(st, "views." + k, v));
      dwrite(d);
      if (mode === "demo") return;
      try {
        const u = {
          sales: FV.increment(s.amount),
          bills: FV.increment(1),
          points: FV.increment(s.points || 0),
          byMethod: { [s.method]: FV.increment(s.amount) },
          byHour: { [h]: FV.increment(s.amount) },
          tables: { [s.mesa]: FV.increment(s.amount) }
        };
        if (s.customer) u.members = FV.increment(1);
        const v = {};
        Object.entries(s.views || {}).forEach(([k, n]) => { v[k] = FV.increment(n); });
        if (Object.keys(v).length) u.views = v;
        await rdoc().collection("stats").doc(day).set(u, { merge: true });
      } catch (e) { console.warn("recordSale fallback:", e); }
    },

    async recordOrder(items) {
      const day = dayKey();
      const d = dread();
      const st = d.stats[day] = d.stats[day] || {};
      inc(st, "orders", 1);
      items.forEach((i) => inc(st, "sold." + i.id, i.qty));
      dwrite(d);
      if (mode === "demo") return;
      try {
        const sold = {};
        items.forEach((i) => { sold[i.id] = FV.increment(i.qty); });
        await rdoc().collection("stats").doc(day).set({ orders: FV.increment(1), sold }, { merge: true });
      } catch (e) { console.warn("recordOrder fallback:", e); }
    },

    async recordEvent(kind) {
      const day = dayKey();
      const d = dread();
      const st = d.stats[day] = d.stats[day] || {};
      inc(st, kind, 1);
      dwrite(d);
      if (mode === "demo") return;
      try {
        await rdoc().collection("stats").doc(day).set({ [kind]: FV.increment(1) }, { merge: true });
      } catch (e) { console.warn("recordEvent fallback:", e); }
    },

    async getStats(fromDay) {
      if (mode !== "demo") {
        try {
          const q = await rdoc().collection("stats").where(firebase.firestore.FieldPath.documentId(), ">=", fromDay).get();
          if (!q.empty) {
            return q.docs.map((d) => Object.assign({ day: d.id }, d.data())).sort((a, b) => a.day < b.day ? -1 : 1);
          }
        } catch (e) { console.warn("getStats fallback:", e); }
      }
      const st = dread().stats;
      return Object.keys(st).filter((k) => k >= fromDay).sort().map((k) => Object.assign({ day: k }, st[k]));
    },

    /* ----- calificaciones ----- */
    async addFeedback(f) {
      const doc = Object.assign({}, f, { at: Date.now(), uid });
      const d = dread();
      d.feedback = [doc].concat(d.feedback).slice(0, 500);
      dwrite(d);
      if (mode === "demo") return;
      try { await rdoc().collection("feedback").add(doc); } catch (e) { console.warn("addFeedback fallback:", e); }
    },

    async getFeedback(since) {
      if (mode !== "demo") {
        try {
          const q = await rdoc().collection("feedback").where("at", ">=", since).get();
          if (!q.empty) {
            return q.docs.map((d) => d.data()).sort((a, b) => b.at - a.at);
          }
        } catch (e) { console.warn("getFeedback fallback:", e); }
      }
      return dread().feedback.filter((f) => f.at >= since).sort((a, b) => b.at - a.at);
    },

    /* ----- inventario: 1 documento ----- */
    async getInventory() {
      if (mode !== "demo") {
        try {
          const s = await rdoc().collection("private").doc("inventory").get();
          if (s.exists) return s.data();
        } catch (e) { console.warn("getInventory fallback:", e); }
      }
      return dread().inventory;
    },

    async saveInventory(inv) {
      inv = Object.assign({}, inv, { updatedAt: Date.now() });
      const d = dread();
      d.inventory = inv;
      dwrite(d);
      if (mode === "demo") return;
      try { await rdoc().collection("private").doc("inventory").set(inv); } catch (e) { console.warn("saveInventory fallback:", e); }
    },

    /* ----- datos de ejemplo para inicializar analítica e inventario ----- */
    seedDemo() {
      const d = dread();
      if (Object.keys(d.stats).length > 3) return;
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
