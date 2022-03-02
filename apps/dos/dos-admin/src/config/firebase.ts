// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVvT190YHjnYh5LRobXI4cQf8F3_vuGOc",
  authDomain: "dropoutstore-8979d.firebaseapp.com",
  databaseURL: "https://dropoutstore-8979d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dropoutstore-8979d",
  storageBucket: "dropoutstore-8979d.appspot.com",
  messagingSenderId: "300563119027",
  appId: "1:300563119027:web:fefd76170953e8b14669c6",
  measurementId: "G-RXD44LFG2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { firestore, auth, app, analytics }