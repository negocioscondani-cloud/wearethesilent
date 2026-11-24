const MESAYA_API_KEY = 'AIzaSyA7yo4QDODdnfneSDrfVXwHQv5ESCJdm7c';
const MESAYA_PROJECT_ID = 'mesaya-e9644';

export interface VivienneWaitlistLead {
  id: string;
  name: string;
  email: string;
  favoriteEp: string;
  source: string;
  consentAccepted: boolean;
  createdAtIso: string;
}

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

export async function fetchVivienneWaitlistLeads(): Promise<VivienneWaitlistLead[]> {
  const leadsMap = new Map<string, VivienneWaitlistLead>();
  let pageToken = '';

  try {
    do {
      const tokenParam = pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : '';
      const res = await fetch(
        `https://firestore.googleapis.com/v1/projects/${MESAYA_PROJECT_ID}/databases/(default)/documents/vivienne_waitlist?pageSize=300${tokenParam}&key=${MESAYA_API_KEY}`,
        { cache: 'no-store' }
      );
      if (!res.ok) break;
      const data = await res.json();
      const docs = Array.isArray(data.documents) ? data.documents : [];

      for (const docItem of docs) {
        const fields = docItem.fields || {};
        const email = String(fields.email?.stringValue || '').trim().toLowerCase();
        if (!email) continue;
        const docNameParts = String(docItem.name || '').split('/');
        const id = docNameParts[docNameParts.length - 1] || email;
        const name = String(fields.name?.stringValue || 'Sin nombre').trim();
        const favoriteEp = String(fields.favoriteEp?.stringValue || 'Todos los episodios').trim();
        const source = String(fields.source?.stringValue || 'wearethesilent.com/audios').trim();
        const consentAccepted =
          fields.consentAccepted?.booleanValue !== undefined
            ? Boolean(fields.consentAccepted.booleanValue)
            : true;
        const createdAtIso = String(
          fields.createdAtIso?.stringValue ||
            fields.updatedAt?.timestampValue ||
            docItem.createTime ||
            ''
        );

        leadsMap.set(email, {
          id,
          name,
          email,
          favoriteEp,
          source,
          consentAccepted,
          createdAtIso,
        });
      }

      pageToken = data.nextPageToken || '';
    } while (pageToken);
  } catch {
    // ignore network errors
  }

  const list = Array.from(leadsMap.values());
  list.sort((a, b) => (b.createdAtIso || '').localeCompare(a.createdAtIso || ''));
  return list;
}
