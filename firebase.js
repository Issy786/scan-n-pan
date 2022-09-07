import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0zRVEcN_5caanpejBTZ3QE-Nt7af0WlI",
  authDomain: "scannpan-dev-cf820.firebaseapp.com",
  projectId: "scannpan-dev-cf820",
  storageBucket: "scannpan-dev-cf820.appspot.com",
  messagingSenderId: "777169839692",
  appId: "1:777169839692:web:a7e0b6f36f3d52981a76e9",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
