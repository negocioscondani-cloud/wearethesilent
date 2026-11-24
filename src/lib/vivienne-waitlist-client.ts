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
  lastEmailSentDay?: number;
}

export async function registerInMesayaFirebaseClient(params: {
  name: string;
  email: string;
  favoriteEp: string;
  source: string;
  consentAccepted?: boolean;
}): Promise<{ createdAtIso: string; lastEmailSentDay: number }> {
  const cleanName = params.name.trim();
  const cleanEmail = params.email.trim().toLowerCase();
  const favoriteEp = params.favoriteEp || 'Todos los episodios';
  const docId = cleanEmail.replace(/[^a-z0-9@._-]/g, '_');
  const nowIso = new Date().toISOString();
  const docUrl = `https://firestore.googleapis.com/v1/projects/${MESAYA_PROJECT_ID}/databases/(default)/documents/vivienne_waitlist/${encodeURIComponent(docId)}?key=${MESAYA_API_KEY}`;

  let existingFields: Record<string, any> = {};
  let existingCreatedAtIso = '';
  let existingLastEmailSentDay = 0;

  // 1. Consultar si el correo ya existía en Firestore para NO reiniciar su Día ni borrar lastEmailSentDay
  try {
    const getRes = await fetch(docUrl, { cache: 'no-store' });
    if (getRes.ok) {
      const existingDoc = await getRes.json();
      if (existingDoc?.fields) {
        existingFields = existingDoc.fields;
        existingCreatedAtIso =
          existingFields.createdAtIso?.stringValue || existingDoc.createTime || '';
        existingLastEmailSentDay = Number(
          existingFields.lastEmailSentDay?.integerValue || 0
        );
      }
    }
  } catch {
    // ignore
  }

  const finalCreatedAtIso = existingCreatedAtIso || nowIso;

  // 2. Guardar en Firestore conservando createdAtIso y lastEmailSentDay si ya existían
  try {
    const mergedFields: Record<string, any> = {
      ...existingFields,
      name: { stringValue: cleanName },
      email: { stringValue: cleanEmail },
      favoriteEp: { stringValue: favoriteEp },
      source: { stringValue: params.source },
      consentAccepted: { booleanValue: params.consentAccepted !== false },
      createdAtIso: { stringValue: finalCreatedAtIso },
    };

    await fetch(docUrl, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields: mergedFields }),
    });
  } catch {
    // ignore network error
  }

  return {
    createdAtIso: finalCreatedAtIso,
    lastEmailSentDay: existingLastEmailSentDay,
  };
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
        const lastEmailSentDay = Number(fields.lastEmailSentDay?.integerValue || 0);

        leadsMap.set(email, {
          id,
          name,
          email,
          favoriteEp,
          source,
          consentAccepted,
          createdAtIso,
          lastEmailSentDay,
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
