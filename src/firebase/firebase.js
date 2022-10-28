import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBTvbfOIkjtA2m03OkgAMHykX8TCaX7jIw",
  authDomain: "tresillo-drum-house.firebaseapp.com",
  projectId: "tresillo-drum-house",
  storageBucket: "tresillo-drum-house.appspot.com",
  messagingSenderId: "426174966476",
  appId: "1:426174966476:web:d4e4d4873c730db7523069"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);