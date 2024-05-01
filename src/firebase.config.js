// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuNtLJveL3iRb59ssrETv8w8rmDcYdY-A",
  authDomain: "dragonnewsauth-61518.firebaseapp.com",
  projectId: "dragonnewsauth-61518",
  storageBucket: "dragonnewsauth-61518.appspot.com",
  messagingSenderId: "1088870712069",
  appId: "1:1088870712069:web:9fe83639ecbbd44fb56d6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;