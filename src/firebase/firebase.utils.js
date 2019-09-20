import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB7Yi8l5l-Bhm4IKepMahebbVdOrmnQXus",
  authDomain: "sterling-c2e04.firebaseapp.com",
  databaseURL: "https://sterling-c2e04.firebaseio.com",
  projectId: "sterling-c2e04",
  storageBucket: "",
  messagingSenderId: "431593572345",
  appId: "1:431593572345:web:e23dab219b46cc72135f28"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;