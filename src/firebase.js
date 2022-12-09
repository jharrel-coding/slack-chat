import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyC87t1uZQwDPSMHggaSyoYEV3Mnyp_GNHA",
    authDomain: "react-slack-clone-80647.firebaseapp.com",
    databaseURL: "https://react-slack-clone-80647.firebaseio.com",
    projectId: "react-slack-clone-80647",
    storageBucket: "react-slack-clone-80647.appspot.com",
    messagingSenderId: "1049915642327",
    appId: "1:1049915642327:web:a1b00d7916f637b2b63b92",
    measurementId: "G-9J645RELDK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;