import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCilKTo4RBXqDpaHDBKpl2KRbzYYa5nskE",
  authDomain: "carvin0-store-reviews.firebaseapp.com",
  projectId: "carvin0-store-reviews",
  storageBucket: "carvin0-store-reviews.appspot.com",
  messagingSenderId: "392798301573",
  appId: "1:392798301573:web:694cdd21ae953d29aaa8ec",
  measurementId: "G-W80KT8Q0YC"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
