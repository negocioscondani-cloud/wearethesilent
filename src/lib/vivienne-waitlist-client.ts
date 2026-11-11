const MESAYA_API_KEY = 'AIzaSyA7yo4QDODdnfneSDrfVXwHQv5ESCJdm7c';
const MESAYA_PROJECT_ID = 'mesaya-e9644';

export async function registerInMesayaFirebaseClient(params: {
  name: string;
  email: string;
  favoriteEp: string;
  source: string;
  consentAccepted?: boolean;
}) {
  const cleanName = params.name.trim();
  const cleanEmail = params.email.trim().toLowerCase();
  const favoriteEp = params.favoriteEp || 'Todos los episodios';
  const docId = cleanEmail.replace(/[^a-z0-9@._-]/g, '_');
  const createdAtIso = new Date().toISOString();

  // Guardar únicamente en Firestore Database (sin crear usuario en Authentication)
  try {
    await fetch(
      `https://firestore.googleapis.com/v1/projects/${MESAYA_PROJECT_ID}/databases/(default)/documents/vivienne_waitlist/${encodeURIComponent(docId)}?key=${MESAYA_API_KEY}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: {
            name: { stringValue: cleanName },
            email: { stringValue: cleanEmail },
            favoriteEp: { stringValue: favoriteEp },
            source: { stringValue: params.source },
            consentAccepted: { booleanValue: params.consentAccepted !== false },
            createdAtIso: { stringValue: createdAtIso },
          },
        }),
      }
    );
  } catch {
    // ignore network error
  }
}
