import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAG_ETiBV_yq94BBsPvlHSSFm2o4vsY_gs",
  authDomain: "crwn-db-d1cc0.firebaseapp.com",
  projectId: "crwn-db-d1cc0",
  storageBucket: "crwn-db-d1cc0.appspot.com",
  messagingSenderId: "325598198398",
  appId: "1:325598198398:web:3d32129bad23460c87b62f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;