import { NextResponse } from 'next/server';

const FIREBASE_API_KEY =
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyA7yo4QDODdnfneSDrfVXwHQv5ESCJdm7c';
const FIREBASE_PROJECT_ID =
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'mesaya-e9644';

function buildDeterministicPassword(email: string): string {
  return `VwWaitlist2026!_${email.toLowerCase().trim().slice(0, 24)}`;
}

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

    const password = buildDeterministicPassword(email);
    const displayName = `${name} | ${email} | ${favoriteEp}`;
    let idToken = '';
    let localId = '';
    let emailAlreadyVerifiedInGoogle = false;

    // 1. Registrar o actualizar en Firebase Authentication (mesaya-e9644 -> Authentication -> Users)
    const signUpRes = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          displayName,
          returnSecureToken: true,
        }),
      }
    );

    const signUpData = await signUpRes.json();

    if (signUpRes.ok && signUpData.idToken) {
      idToken = signUpData.idToken;
      localId = signUpData.localId || '';
    } else if (signUpData?.error?.message === 'EMAIL_EXISTS') {
      // Intentar iniciar sesión con nuestra clave determinística de lista de espera
      const signInRes = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );
      const signInData = await signInRes.json();
      if (signInRes.ok && signInData.idToken) {
        idToken = signInData.idToken;
        localId = signInData.localId || '';
      } else {
        // El correo ya existía en Firebase por Google Sign-In u otra contraseña (ej. cuenta de admin en MesaYa).
        // Creamos un registro espejo en Authentication -> Users para que el lead igual quede guardado ahí:
        emailAlreadyVerifiedInGoogle = true;
        const aliasEmail = `lead.${Date.now()}@viviennewolski.com`;
        const aliasRes = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: aliasEmail,
              password,
              displayName,
              returnSecureToken: true,
            }),
          }
        );
        const aliasData = await aliasRes.json();
        if (aliasRes.ok && aliasData.idToken) {
          idToken = aliasData.idToken;
          localId = aliasData.localId || '';
        }
      }
    }

    let confirmationEmailSent = false;

    if (idToken) {
      // Actualizar displayName con Nombre | Correo | Episodio
      await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${FIREBASE_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            idToken,
            displayName,
            returnSecureToken: false,
          }),
        }
      ).catch(() => {});

      // Enviar correo de verificación de Firebase si es el correo directo del usuario y no se envió ya en el navegador
      if (!emailAlreadyVerifiedInGoogle && !body.skipFirebaseVerifyEmail) {
        try {
          const verifyRes = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${FIREBASE_API_KEY}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-Firebase-Locale': 'es',
              },
              body: JSON.stringify({
                requestType: 'VERIFY_EMAIL',
                idToken,
              }),
            }
          );
          if (verifyRes.ok) {
            confirmationEmailSent = true;
          }
        } catch {
          // ignore
        }
      }
    }

    // Carta HTML de bienvenida de Vivienne Wolski
    const subject = `Bienvenida a la lista privada de Vivienne, ${name}`;
    const html = `
      <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; background: #F7F1E6; color: #2B1D14; padding: 36px 28px; border: 1px solid #D8CBB8; border-radius: 12px;">
        <p style="font-family: monospace; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #6B1F2A; margin: 0 0 12px;">
          Vivienne Wolski · Lista de Espera Privada
        </p>
        <h1 style="font-size: 26px; font-weight: normal; margin: 0 0 16px; color: #2B1D14;">
          Hola, ${name}, cariño.
        </h1>
        <p style="font-size: 15px; line-height: 1.7; color: #2B1D14; margin: 0 0 16px;">
          Tu lugar en la lista de espera para <strong>Audios de Vivienne: Dominio del Dinero y Libertad Financiera</strong> ya quedó confirmado.
        </p>
        <div style="background: #FAF5EC; border-left: 3px solid #6B1F2A; padding: 14px 18px; margin: 20px 0;">
          <p style="font-style: italic; font-size: 14px; color: #6B1F2A; margin: 0;">
            “El dinero no es para presumir. El dinero es una forma de comprar tiempo: tiempo para dormir tranquila, tiempo para tu familia y tiempo para decir que no.”
          </p>
        </div>
        <p style="font-size: 14px; line-height: 1.6; color: #5C4A3E; margin: 0 0 20px;">
          Capítulo prioritario anotado: <strong>${favoriteEp}</strong>. Te avisaré personalmente a este correo en cuanto liberemos el primer episodio semanal.
        </p>
        <a href="https://wearethesilent.com/diario" style="display: inline-block; background: #6B1F2A; color: #F7F1E6; text-decoration: none; padding: 12px 22px; border-radius: 8px; font-family: monospace; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;">
          Leer El Blog de Vivi →
        </a>
        <p style="font-size: 11px; color: #8A7665; margin-top: 28px; border-top: 1px solid #D8CBB8; padding-top: 14px;">
          © Vivienne Wolski · Maison Wolski · Silencio, Orden y Criterio
        </p>
      </div>
    `;

    // 2. Si hay un Webhook de Google Apps Script (envía desde tu propio Gmail gratis y a cualquier correo)
    if (webhookUrl && webhookUrl.startsWith('https://')) {
      try {
        const gsRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            favoriteEp,
            subject,
            html,
          }),
        });
        if (gsRes.ok) {
          confirmationEmailSent = true;
        }
      } catch {
        // ignore
      }
    }

    // 3. Si además existe RESEND_API_KEY configurada, enviar con Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const rRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || 'Vivienne Wolski <onboarding@resend.dev>',
            to: [email],
            subject,
            html,
          }),
        });
        if (rRes.ok) {
          confirmationEmailSent = true;
        }
      } catch {
        // ignore
      }
    }

    // 4. Intentar guardar también en Firestore Database (si las reglas están abiertas)
    const docId = email.replace(/[^a-z0-9@._-]/g, '_');
    const createdAtIso = new Date().toISOString();
    const firestoreFields = {
      fields: {
        name: { stringValue: name },
        email: { stringValue: email },
        favoriteEp: { stringValue: favoriteEp },
        source: { stringValue: source },
        createdAtIso: { stringValue: createdAtIso },
      },
    };

    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (idToken) {
      headers['Authorization'] = `Bearer ${idToken}`;
    }

    let savedInFirestore = false;
    try {
      const fsRes = await fetch(
        `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/vivienne_waitlist/${encodeURIComponent(docId)}`,
        {
          method: 'PATCH',
          headers,
          body: JSON.stringify(firestoreFields),
        }
      );
      if (fsRes.ok) savedInFirestore = true;
    } catch {
      // ignore if Firestore rules are still locked
    }

    return NextResponse.json({
      ok: true,
      uid: localId || docId,
      savedInAuth: true,
      savedInFirestore,
      confirmationEmailSent,
      emailAlreadyVerifiedInGoogle,
      lead: {
        id: docId,
        name,
        email,
        favoriteEp,
        createdAtIso,
      },
    });
  } catch (err) {
    console.error('Error en /api/vivienne-waitlist:', err);
    return NextResponse.json(
      { ok: false, error: 'Error procesando solicitud' },
      { status: 500 }
    );
  }
}
