import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  arrayUnion,
  collection,
  doc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { firestore } from "../lib/controller";
import { Shapes } from "../types/shapesType";

type ShapesResponse = Shapes[];

export const shapesApi = createApi({
  baseQuery: fakeBaseQuery(),
  tagTypes: ["shapes"],
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
