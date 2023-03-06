import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User as FirebaseUser } from "firebase/auth";

interface AuthState {
  user: FirebaseUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setUser: (state, action: PayloadAction<FirebaseUser | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setLoading, setError, setUser } = authSlice.actions;
export default authSlice.reducer;
