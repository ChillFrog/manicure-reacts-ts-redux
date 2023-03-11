import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { collection, getFirestore } from "firebase/firestore";
import { app } from "./firebaseConfig";

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

//Shapes collection
export const shapesCollection = collection(firestore, "shapes");

export const usersCollection = collection(firestore, "users");
