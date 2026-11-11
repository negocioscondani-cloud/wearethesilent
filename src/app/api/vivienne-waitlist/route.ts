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

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: 'Nombre y correo son obligatorios.' },
        { status: 400 }
      );
    }

    const password = buildDeterministicPassword(email);
    const displayName = `${name} | ${favoriteEp}`;
    let idToken = '';
    let localId = '';

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
      // Si el correo ya existía en la lista de espera, iniciamos sesión y actualizamos su nombre/episodio
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
      }
    }

    // Actualizar displayName con el Nombre y el Episodio elegido
    if (idToken) {
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
    }

    // 2. Intentar guardar también en Firestore Database (si las reglas están abiertas)
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
