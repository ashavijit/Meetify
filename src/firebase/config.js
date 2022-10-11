import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // your firebase config
  apiKey: "AIzaSyAHmFGYkYU8lR5QoVzlAgkkeWzbounf9UQ",
  authDomain: "meetify1-bd3bd.firebaseapp.com",
  projectId: "meetify1-bd3bd",
  storageBucket: "meetify1-bd3bd.appspot.com",
  messagingSenderId: "21939810359",
  appId: "1:21939810359:web:0fc35b136c8c73b3e68fb2",
  measurementId: "G-L6BY6L11HF",
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
