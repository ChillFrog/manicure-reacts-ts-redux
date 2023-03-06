import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authSlice";
import menuReducer from "../reducers/menuSlice";
import { shapesApi } from "../services/shapesAPI";
// ...

const rootReducer = combineReducers({
  authReducer,
  menuReducer,
  [shapesApi.reducerPath]: shapesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(shapesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
