import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAVXWP8pQBv7CAfywGF8oGtm9yuJl5cQGs",
    authDomain: "linkedin-clone-5dbe6.firebaseapp.com",
    projectId: "linkedin-clone-5dbe6",
    storageBucket: "linkedin-clone-5dbe6.appspot.com",
    messagingSenderId: "824761710269",
    appId: "1:824761710269:web:a02266b4ab047880fea9d4",
    measurementId: "G-QQBRH3GTP1"
  };

const firebaseApp = firebase.intializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};