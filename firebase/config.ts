import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDx6tNw4dsHMHmWu4eInomNBROifT5hcc",
    authDomain: "user-a159d.firebaseapp.com",
    projectId: "user-a159d",
    storageBucket: "user-a159d.appspot.com",
    messagingSenderId: "860646892000",
    appId: "1:860646892000:web:4f26fb1a4396693f65cb85",
    measurementId: "G-M3EZZ0VCDJ"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
