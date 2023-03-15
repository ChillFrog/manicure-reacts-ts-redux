import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuReducer from "../reducers/menuSlice";
import colorsReducer from "../reducers/colorsSlice";
import { baseApi } from "../services/baseAPI";
import { authApi } from "../services/authAPI";
// ...

const rootReducer = combineReducers({
  menuReducer,
  colorsReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
