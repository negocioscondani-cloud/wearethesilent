import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let firestore: Firestore | undefined;

function initializeFirebaseClient() {
  // Conectado directamente al proyecto Firebase activo mesaya-e9644
  const firebaseConfig = {
    apiKey: 'AIzaSyA7yo4QDODdnfneSDrfVXwHQv5ESCJdm7c',
    authDomain: 'mesaya-e9644.firebaseapp.com',
    projectId: 'mesaya-e9644',
    storageBucket: 'mesaya-e9644.firebasestorage.app',
    messagingSenderId: '344830279673',
    appId: '1:344830279673:web:de66a4c71ce3ecabbc4728',
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
