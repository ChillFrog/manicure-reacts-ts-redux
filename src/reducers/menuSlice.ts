import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MenuState = {
  open: "Форма" | "Цвет" | "Узоры" | "";
};

const initialState = {
  open: "",
} as MenuState;

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuShapes: (state) => {
      state.open = "Форма";
    },
    setMenuColor: (state) => {
      state.open = "Цвет";
    },
    setMenuEffects: (state) => {
      state.open = "Узоры";
    },
    setMenuClose: (state) => {
      state.open = "";
    },
  },
});

export const { setMenuShapes, setMenuColor, setMenuEffects, setMenuClose } =
  menuSlice.actions;
export default menuSlice.reducer;
