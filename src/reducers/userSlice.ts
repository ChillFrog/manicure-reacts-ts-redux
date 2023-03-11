import { User } from "firebase/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userFromLoaclStorage = JSON.parse(localStorage.getItem("user") || "null");

interface AuthState {
  user: IUser | undefined | null;
  isLoading: boolean;
  isError: string | null;
}

const initialState: AuthState = {
  user: userFromLoaclStorage,
  isLoading: false,
  isError: null,
};

type IUser = {
  uid: string | undefined;
  displayName: string | null | undefined;
  email: string | undefined | null;
  photoURL: string | null | undefined;
};

const userSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.isError = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser | undefined | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser, setError, setLoading } = userSlice.actions;
export default userSlice.reducer;
