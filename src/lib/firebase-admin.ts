import * as admin from 'firebase-admin';

let app: admin.app.App | null = null;

function initializeFirebaseAdmin() {
  if (app) {
    return app;
  }
  
  if (admin.apps.length > 0) {
    app = admin.app();
    return app;
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKey) {
    // console.warn removed to avoid build failures in strict environments.
    return null;
  }

  try {
    app = admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey: privateKey.replace(/\\n/g, '\n'),
      }),
    });
  } catch (error) {
    console.error('Firebase admin initialization error', error);
  }
  return app;
}


export function getFirestore() {
  const adminApp = initializeFirebaseAdmin();
  if (!adminApp) return null;
  return adminApp.firestore();
}

export function getAuth() {
  const adminApp = initializeFirebaseAdmin();
  if (!adminApp) return null;
  return adminApp.auth();
}

// Backwards compatibility is removed to ensure lazy initialization.
// Code importing `firestore` or `auth` directly from this module
// must be updated to use `getFirestore()` or `getAuth()` instead.
