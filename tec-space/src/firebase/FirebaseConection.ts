import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmCAwdB-y41qDdzMCYtaMwh8V0-o8l-h8",
  authDomain: "tech-space-d399d.firebaseapp.com",
  projectId: "tech-space-d399d",
  storageBucket: "tech-space-d399d.appspot.com",
  messagingSenderId: "197948416240",
  appId: "1:197948416240:web:9d5490e32003d0fe4a6235",
  measurementId: "G-81LM4K0V3M",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
