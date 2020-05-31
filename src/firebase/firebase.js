import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxFa6woQ_sZ5pGwrkUA7JVguwRVPmKifk",
  authDomain: "eshop-30826.firebaseapp.com",
  databaseURL: "https://eshop-30826.firebaseio.com",
  projectId: "eshop-30826",
  storageBucket: "eshop-30826.appspot.com",
  messagingSenderId: "630108937277",
  appId: "1:630108937277:web:060e8104133755df0dde54",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

export default firebase;
