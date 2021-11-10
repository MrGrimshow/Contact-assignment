import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDmuzjtySyv_AEUzaTqcieqP-Io17nVM64",
    authDomain: "reacts-contacts.firebaseapp.com",
    projectId: "reacts-contacts",
    storageBucket: "reacts-contacts.appspot.com",
    messagingSenderId: "974717005629",
    appId: "1:974717005629:web:cbe14dd9f8811ebdb81f54"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;