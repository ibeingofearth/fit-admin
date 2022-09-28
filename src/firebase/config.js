import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAC0Te3w4IW01MpEHcuQVDmy3HO1Gb6Ytw",
    authDomain: "fit-kit-fire.firebaseapp.com",
    projectId: "fit-kit-fire",
    storageBucket: "fit-kit-fire.appspot.com",
    messagingSenderId: "886314945281",
    appId: "1:886314945281:web:1fdd293be21c09b4966900"
  };

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export const storage = getStorage(app);
export { db }