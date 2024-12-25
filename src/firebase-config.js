import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIk0DkHY8LnOA9a4gQGPlExXW-geAjt6g",
  authDomain: "chat-app-c38ed.firebaseapp.com",
  projectId: "chat-app-c38ed",
  storageBucket: "chat-app-c38ed.firebasestorage.app",
  messagingSenderId: "531727827731",
  appId: "1:531727827731:web:0fe7340a0015693ad350e6",
  measurementId: "G-RFQBTV3JC8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
