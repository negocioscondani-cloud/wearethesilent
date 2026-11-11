import { NextResponse } from 'next/server';

const FIREBASE_API_KEY = 'AIzaSyA7yo4QDODdnfneSDrfVXwHQv5ESCJdm7c';
const FIREBASE_PROJECT_ID = 'mesaya-e9644';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const favoriteEp = String(body.favoriteEp || 'Todos los episodios').trim();
    const source = String(body.source || 'wearethesilent.com/audios').trim();
    const webhookUrl = String(
      body.webhookUrl || process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL || ''
    ).trim();

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: 'Nombre y correo son obligatorios.' },
        { status: 400 }
      );
    }

    const docId = email.replace(/[^a-z0-9@._-]/g, '_');
    const createdAtIso = new Date().toISOString();
    let firestoreSaved = false;

    // 1. Guardar únicamente en Firestore Database (colección vivienne_waitlist) sin tocar Authentication
    try {
      const fsRes = await fetch(
        `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/vivienne_waitlist/${encodeURIComponent(docId)}?key=${FIREBASE_API_KEY}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: {
              name: { stringValue: name },
              email: { stringValue: email },
              favoriteEp: { stringValue: favoriteEp },
              source: { stringValue: source },
              createdAtIso: { stringValue: createdAtIso },
            },
          }),
        }
      );
      if (fsRes.ok) {
        firestoreSaved = true;
      }
    } catch {
      // ignore if Firestore rules are closed
    }

    let confirmationEmailSent = false;

    // 2. Si hay un Webhook de Google Apps Script configurado, envía el correo editorial personalizado desde Gmail
    if (webhookUrl && webhookUrl.startsWith('https://script.google.com/')) {
      try {
        const whRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            favoriteEp,
            source,
            createdAtIso,
          }),
        });
        if (whRes.ok) {
          confirmationEmailSent = true;
        }
      } catch {
        // ignore
      }
    }

    // 3. También respaldar en FormSubmit si se configuró FORMSUBMIT_NOTIFY_EMAIL
    const notifyEmail = process.env.FORMSUBMIT_NOTIFY_EMAIL || '';
    if (notifyEmail) {
      fetch(`https://formsubmit.co/ajax/${encodeURIComponent(notifyEmail)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Nueva suscriptora en Lista de Espera de Vivienne: ${name}`,
          Nombre: name,
          Correo: email,
          Episodio_Favorito: favoriteEp,
          Origen: source,
          _autoresponse: `Hola ${name}, cariño. Soy Vivienne. Tu lugar en la lista de espera para mis Audios Semanales (Dominio del Dinero y Libertad Financiera) ha quedado reservado. Nos escuchamos muy pronto.`,
        }),
      }).catch(() => {});
    }

    return NextResponse.json({
      ok: true,
      savedInFirebase: firestoreSaved,
      confirmationEmailSent,
      entry: {
        id: docId,
        name,
        email,
        favoriteEp,
        createdAtIso,
      },
    });
  } catch (err) {
    console.error('[vivienne-waitlist] error:', err);
    return NextResponse.json(
      { ok: false, error: 'No se pudo procesar la solicitud.' },
      { status: 500 }
    );
  }
}
