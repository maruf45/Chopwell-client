import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDzk_FoNKjy1PvDJ85vVfQgXlzmDHS-Kgk",
  authDomain: "chopwell-78c43.firebaseapp.com",
  projectId: "chopwell-78c43",
  storageBucket: "chopwell-78c43.appspot.com",
  messagingSenderId: "265354527725",
  appId: "1:265354527725:web:390798eec3728e30679de4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;