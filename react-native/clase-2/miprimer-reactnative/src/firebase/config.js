import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA1PWnbppyVvquahpLcayL-mlxfb3alf24",
    authDomain: "test-215f4.firebaseapp.com",
    projectId: "test-215f4",
    storageBucket: "test-215f4.firebasestorage.app",
    messagingSenderId: "295952523041",
    appId: "1:295952523041:web:eb9bd050bd6786f4b82860"
  };

app.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();