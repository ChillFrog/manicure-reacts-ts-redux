import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateCurrentUser,
  User,
} from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../lib/controller";
import { baseApi } from "./baseAPI";

type IUser = {
  uid: string | undefined;
  displayName: string | undefined | null;
  email: string | undefined | null;
  photoURL: string | null | undefined;
};

type IUserProfile = {
  data: IUser;
};

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginWithGoogle: builder.mutation<IUser, void>({
      async queryFn() {
        try {
          await getRedirectResult(auth);
          const provider = new GoogleAuthProvider();
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          if (!user) {
            throw new Error("User is null");
          }
          const uid = user.uid;
          const displayName = user.displayName;
          const email = user.email;
          const photoURL = user.photoURL;
          const userRef = doc(firestore, "users", uid);
          const snapshot = await getDoc(userRef);
          if (!snapshot.exists()) {
            await setDoc(userRef, {
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            });
          }
          const newUser = { email, displayName, uid, photoURL };
          return { data: newUser };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
      invalidatesTags: ["Auth"],
    }),
    getUserProfile: builder.query<IUser, void>({
      async queryFn() {
        try {
          await getRedirectResult(auth);
          const user = auth.currentUser;
          if (!user) {
            throw new Error("Пользователь не авторизирован");
          }
          const uid = user?.uid;
          const userRef = doc(firestore, "users", uid);
          let snapshot = await getDoc(userRef);
          if (!snapshot.exists()) throw new Error("user profile not found");
          let userProfile = snapshot.data() as IUser;
          return { data: userProfile };
        } catch (error) {
          console.log("Ошибка в пользвателе");
          throw error;
        }
      },
      providesTags: ["UserProfile"],
    }),
    getUserProfileById: builder.query<IUser, string>({
      queryFn: async (uid) => {
        try {
          const userRef = uid ? doc(firestore, "users", uid) : null;
          if (!userRef) {
            throw new Error(`Invalid uid: ${uid}`);
          }
          const snapshot = await getDoc(userRef);
          if (!snapshot.exists()) {
            throw new Error(`User with uid ${uid} not found`);
          }
          const result = snapshot.data() as IUser;
          return { data: result };
        } catch (error) {
          console.error("Ошибка в получении профиля");
          throw error;
        }
      },
    }),
    logout: builder.mutation({
      async queryFn() {
        await getRedirectResult(auth);
        await signOut(auth);
        return { data: undefined };
      },
      invalidatesTags: ["Auth", "UserProfile"],
    }),
  }),
});
