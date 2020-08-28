import firebase from 'firebase'
require ('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCaxqzh1K_UeZs87wEW0vd6HHD10U5iJMQ",
    authDomain: "bartersystem-d1cda.firebaseapp.com",
    databaseURL: "https://bartersystem-d1cda.firebaseio.com",
    projectId: "bartersystem-d1cda",
    storageBucket: "bartersystem-d1cda.appspot.com",
    messagingSenderId: "1042288638755",
    appId: "1:1042288638755:web:a28c1b151aad1a0a222a96"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();