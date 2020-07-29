import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6ESRewPzcaT-2-MIFCxBaVMosInvcDaE",
    authDomain: "facebook-messenger-clone-691d0.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-691d0.firebaseio.com",
    projectId: "facebook-messenger-clone-691d0",
    storageBucket: "facebook-messenger-clone-691d0.appspot.com",
    messagingSenderId: "984891509346",
    appId: "1:984891509346:web:b06d57f3c92bccc2cf9f3b",
    measurementId: "G-3CTJPJ86GB"
})
const db = firebaseApp.firestore();
export default db;