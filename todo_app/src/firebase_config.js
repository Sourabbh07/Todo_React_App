import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDCIJ82cLaHlD2TPQd06XvbX_j09MbCFso",
    authDomain: "todoapp-a715e.firebaseapp.com",
    databaseURL: "https://todoapp-a715e.firebaseio.com",
    projectId: "todoapp-a715e",
    storageBucket: "todoapp-a715e.appspot.com",
    messagingSenderId: "348994034531",
    appId: "1:348994034531:web:e3eca90a45709a4c4c9156"
  };
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore()

  export { db };
