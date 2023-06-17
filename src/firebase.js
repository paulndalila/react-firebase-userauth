import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApQToNsO-fK_Jthb4-acZ3g-LkMqmY7y0",
  authDomain: "react-auth-4d350.firebaseapp.com",
  projectId: "react-auth-4d350",
  storageBucket: "react-auth-4d350.appspot.com",
  messagingSenderId: "130639957555",
  appId: "1:130639957555:web:4f8766f7643b73426e9d46"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
