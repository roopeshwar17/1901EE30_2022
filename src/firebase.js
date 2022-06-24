import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD4I6w_FCGx2aJwmeY9-03RS1djWpZh4Gw",
    authDomain: "clone-3ff74.firebaseapp.com",
    projectId: "clone-3ff74",
    storageBucket: "clone-3ff74.appspot.com",
    messagingSenderId: "861380287525",
    appId: "1:861380287525:web:606e28dee23cedd57a73cc",
    measurementId: "G-CZ4JW58E8F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth= firebase.auth();

  export { db, auth };
