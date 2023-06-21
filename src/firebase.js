import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/*________________________________________________________________________________*/

const firebaseConfig = {
  apiKey: "AIzaSyBCqQJjQrv097S-3W4C5pZBXQ7FscS3qbg",
  authDomain: "linkedin-clone-600a5.firebaseapp.com",
  projectId: "linkedin-clone-600a5",
  storageBucket: "linkedin-clone-600a5.appspot.com",
  messagingSenderId: "5167195738",
  appId: "1:5167195738:web:ba6005c0a130f1d9331a63"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

/*________________________________________________________________________________*/
