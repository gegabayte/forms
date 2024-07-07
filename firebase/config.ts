import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
