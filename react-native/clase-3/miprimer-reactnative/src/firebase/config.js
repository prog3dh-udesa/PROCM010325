import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAI9QGpFWUiNmba63r4BXFzW4l0bnhrHBo",
    authDomain: "mi-primer-firebase-3b7f3.firebaseapp.com",
    projectId: "mi-primer-firebase-3b7f3",
    storageBucket: "mi-primer-firebase-3b7f3.firebasestorage.app",
    messagingSenderId: "1098442081250",
    appId: "1:1098442081250:web:27e9832f9f835ca4242fbb"
  };

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()