import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let firestore: Firestore | undefined;

function initializeFirebaseClient() {
  // Config is read only when this function is called, with fallback to mesaya-e9644 project.
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyA7yo4QDODdnfneSDrfVXwHQv5ESCJdm7c',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'mesaya-e9644.firebaseapp.com',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'mesaya-e9644',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'mesaya-e9644.firebasestorage.app',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '344830279673',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:344830279673:web:de66a4c71ce3ecabbc4728',
  };

  // Check for window to ensure client-side, and !app to initialize only once.
  if (typeof window !== 'undefined' && !app) { 
    if (firebaseConfig.apiKey && firebaseConfig.projectId) {
      try {
        app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
        auth = getAuth(app);
        firestore = getFirestore(app);
      } catch (error) {
        console.error('Firebase client initialization error:', error);
      }
    } else {
        // This log was causing issues in build environments.
        // The provider will handle the uninitialized state gracefully.
    }
  }
  return { app, auth, firestore };
}

// Export a function that components can call.
// This defers initialization until it's actually needed on the client.
export const getFirebase = () => {
    return initializeFirebaseClient();
}
