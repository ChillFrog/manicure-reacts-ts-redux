import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { collection, doc, updateDoc, getDocs } from "firebase/firestore";
import { auth, firestore } from "../lib/controller";
import { Shapes } from "../types/shapesType";

type ShapesResponse = Shapes[];

export const baseApi = createApi({
  baseQuery: fakeBaseQuery(),
  tagTypes: ["shapes", "UserProfile"],
  endpoints: (builder) => ({
    fetchShapes: builder.query<ShapesResponse, void>({
      async queryFn() {
        try {
          const ref = collection(firestore, "shapes");
          const querySnapshot = await getDocs(ref);
          let ShapesResponse: ShapesResponse = [];
          querySnapshot?.forEach((doc) => {
            ShapesResponse.push({ id: doc.id, ...doc.data() } as Shapes);
          });
          return { data: ShapesResponse };
        } catch (error: any) {
          console.error(error.message);
          return { error: error.message };
        }
      },
      providesTags: ["shapes"],
    }),
  }),
});
