const MESAYA_API_KEY = 'AIzaSyA7yo4QDODdnfneSDrfVXwHQv5ESCJdm7c';
const MESAYA_PROJECT_ID = 'mesaya-e9644';

export async function registerInMesayaFirebaseClient(params: {
  name: string;
  email: string;
  favoriteEp: string;
  source: string;
}) {
  const cleanName = params.name.trim();
  const cleanEmail = params.email.trim().toLowerCase();
  const favoriteEp = params.favoriteEp || 'Todos los episodios';
  const password = `VwWaitlist2026!_${cleanEmail.slice(0, 24)}`;
  const displayName = `${cleanName} | ${cleanEmail} | ${favoriteEp}`;

  let idToken = '';
  let emailAlreadyUsedWithOtherAuth = false;

  try {
    // 1. Intentar crear el usuario directamente en mesaya-e9644 (Authentication -> Users)
    const signUpRes = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${MESAYA_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: cleanEmail,
          password,
          displayName,
          returnSecureToken: true,
        }),
      }
    );
    const signUpData = await signUpRes.json();

    if (signUpRes.ok && signUpData.idToken) {
      idToken = signUpData.idToken;
    } else if (signUpData?.error?.message === 'EMAIL_EXISTS') {
      // Intentar iniciar sesión con la contraseña de lista de espera
      const signInRes = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${MESAYA_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: cleanEmail,
            password,
            returnSecureToken: true,
          }),
        }
      );
      const signInData = await signInRes.json();
      if (signInRes.ok && signInData.idToken) {
        idToken = signInData.idToken;
      } else {
        // Si ese correo ya existía en mesaya-e9644 con Google Login u otra contraseña,
        // creamos también una fila espejo en Authentication -> Users para que siempre aparezca el registro:
        emailAlreadyUsedWithOtherAuth = true;
        const mirrorEmail = `lista.${Date.now()}@viviennewolski.com`;
        const mirrorRes = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${MESAYA_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: mirrorEmail,
              password,
              displayName,
              returnSecureToken: true,
            }),
          }
        );
        const mirrorData = await mirrorRes.json();
        if (mirrorRes.ok && mirrorData.idToken) {
          idToken = mirrorData.idToken;
        }
      }
    }

    if (idToken) {
      // Asegurar que el displayName quede guardado con Nombre | Correo | Episodio
      await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${MESAYA_API_KEY}`,
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

      // Disparar el correo de confirmación oficial desde la IP del navegador del cliente
      if (!emailAlreadyUsedWithOtherAuth) {
        await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${MESAYA_API_KEY}`,
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
        ).catch(() => {});
      }
    }

    // Intentar también guardar en Firestore Database de mesaya-e9644 (si las reglas lo permiten)
    const docId = cleanEmail.replace(/[^a-z0-9@._-]/g, '_');
    const createdAtIso = new Date().toISOString();
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (idToken) headers['Authorization'] = `Bearer ${idToken}`;

    await fetch(
      `https://firestore.googleapis.com/v1/projects/${MESAYA_PROJECT_ID}/databases/(default)/documents/vivienne_waitlist/${encodeURIComponent(docId)}`,
      {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
          fields: {
            name: { stringValue: cleanName },
            email: { stringValue: cleanEmail },
            favoriteEp: { stringValue: favoriteEp },
            source: { stringValue: params.source },
            createdAtIso: { stringValue: createdAtIso },
          },
        }),
      }
    ).catch(() => {});
  } catch (err) {
    console.warn('Error en registerInMesayaFirebaseClient:', err);
  }
}
