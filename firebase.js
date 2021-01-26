// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB2Nxx6GcR290JzjUDvWJnLqKoYH9tX3IY",
    authDomain: "facebook-messanger-clone-c0e95.firebaseapp.com",
    databaseURL: "https://facebook-messanger-clone-c0e95.firebaseio.com",
    projectId: "facebook-messanger-clone-c0e95",
    storageBucket: "facebook-messanger-clone-c0e95.appspot.com",
    messagingSenderId: "615328947462",
    appId: "1:615328947462:web:6715a9bf47f791c7bcd287",
    measurementId: "G-PGKNBZX92Z"
  });

  const db = firebaseApp.firestore();

  export default db;