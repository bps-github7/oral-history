import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAaKCA493xDoXv3-JfB07SZo-28PIjKTPE",
    authDomain: "oral-history-ea47c.firebaseapp.com",
    projectId: "oral-history-ea47c",
    storageBucket: "oral-history-ea47c.appspot.com",
    messagingSenderId: "875539500040",
    appId: "1:875539500040:web:e9eb028c343d160cd355bd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export const storage = firebase.storage();
export const db = firebase.firestore();

export default firebase; 