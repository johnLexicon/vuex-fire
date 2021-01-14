import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAMOPzvCdK5_ez8z8Y8DboDFEKj76VvjYA",
    authDomain: "vue-fire-256db.firebaseapp.com",
    projectId: "vue-fire-256db",
    storageBucket: "vue-fire-256db.appspot.com",
    messagingSenderId: "315001640125",
    appId: "1:315001640125:web:22309f3756b9777e3b53d4"
  };
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()