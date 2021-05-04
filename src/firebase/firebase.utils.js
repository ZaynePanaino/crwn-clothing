import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCPZ4bNCX8iAbc2frn3SllVWHCc6ToKK50",
    authDomain: "crwn-db-54870.firebaseapp.com",
    projectId: "crwn-db-54870",
    storageBucket: "crwn-db-54870.appspot.com",
    messagingSenderId: "182777163611",
    appId: "1:182777163611:web:bb46d6d6618d68f32ab47e"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    console.log(firestore.doc('users/112i3ohjdfaj'));
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
