import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyCAQEmYE0QpegcX5Y64TqG-8RcsfN8f0hY',
  authDomain: "seed-pursuit.firebaseapp.com",
  projectId: "seed-pursuit",
  storageBucket: "seed-pursuit.appspot.com",
  messagingSenderId: "161994984072",
  appId: "1:161994984072:web:4e9cce4bcb049a1b46ed3d",
  measurementId: "G-H12SP2TW0X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};