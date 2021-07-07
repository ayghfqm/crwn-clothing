import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBLSTS_ACJQ6Dhpv1DkUj_iliCFkjg6VqQ",
    authDomain: "crwn-db-e27ac.firebaseapp.com",
    projectId: "crwn-db-e27ac",
    storageBucket: "crwn-db-e27ac.appspot.com",
    messagingSenderId: "1011424700320",
    appId: "1:1011424700320:web:46bc0d84f389b5b3f4e6c5",
    measurementId: "G-BCL86GF9W5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


