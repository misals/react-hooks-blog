import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCAxkDehZwBzhh1_BoNaUCOeSKZfTQgrTQ",
  authDomain: "react-hooks-blog-5e0d2.firebaseapp.com",
  projectId: "react-hooks-blog-5e0d2",
  storageBucket: "react-hooks-blog-5e0d2.appspot.com",
  messagingSenderId: "206537014010",
  appId: "1:206537014010:web:ff9ace719a4928cc382743"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();