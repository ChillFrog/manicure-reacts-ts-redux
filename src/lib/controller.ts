import { collection, getFirestore } from "firebase/firestore";
import { app } from "./firebaseConfig";

export const firestore = getFirestore(app);

//Shapes collection
export const shapesCollection = collection(firestore, "shapes");
