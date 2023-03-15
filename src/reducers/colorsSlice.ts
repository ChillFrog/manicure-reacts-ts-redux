import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { colorsArrayDefault } from "../utils/colorsArray";
import produce from "immer";

type ColorsState = {
  currentColor: string;
  colorsArray: ColorArrayState[];
};

type ColorArrayState = {
  id: number;
  value: string;
};

const initialState: ColorsState = {
  currentColor: "#f42929",
  colorsArray: colorsArrayDefault,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setCurrentColor: (state, action: PayloadAction<string>) => {
      state.currentColor = action.payload;
    },
    setColorsArray: (state, action: PayloadAction<string>) => {
      const newId = state.colorsArray.length;
      state.colorsArray = [
        ...state.colorsArray,
        { id: newId, value: action.payload },
      ];
    },
  },
});

export const { setCurrentColor, setColorsArray } = menuSlice.actions;
export default menuSlice.reducer;
