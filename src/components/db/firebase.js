import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBbuGQ00zD5qs-ft-SqbFcxsYXe6Jds148",
    authDomain: "dwwm-33a04.firebaseapp.com",
    projectId: "dwwm-33a04",
    storageBucket: "dwwm-33a04.appspot.com",
    messagingSenderId: "1003973995444",
    appId: "1:1003973995444:web:d6b27438a5014a95f220e1",
    measurementId: "G-0WEDZZWCVV"
};


firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;