import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAgXYn4J0IKBAaNQOA9Xvi0LMFzEK5tRTQ",
  authDomain: "tresillo-drum-house-a9b96.firebaseapp.com",
  projectId: "tresillo-drum-house-a9b96",
  storageBucket: "tresillo-drum-house-a9b96.appspot.com",
  messagingSenderId: "929784280415",
  appId: "1:929784280415:web:55c422c2c53d69d70ff2ea"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);