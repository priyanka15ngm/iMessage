import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXxH3sSdeVIQpG3h8vZGNASHrmA_npEd8",
  authDomain: "imessage-clone-5aa27.firebaseapp.com",
  projectId: "imessage-clone-5aa27",
  storageBucket: "imessage-clone-5aa27.appspot.com",
  messagingSenderId: "766847129372",
  appId: "1:766847129372:web:5ba7ec2d440033a8588cd9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
