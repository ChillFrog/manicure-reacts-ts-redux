import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MenuState = {
  open: "Форма" | "Цвет" | "Узоры" | "";
};

const initialState: MenuState = {
  open: "",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuShapes: (state, action: PayloadAction<"Форма">) => {
      state.open = action.payload;
    },
    setMenuColor: (state, action: PayloadAction<"Цвет">) => {
      state.open = action.payload;
    },
    setMenuEffects: (state, action: PayloadAction<"Узоры">) => {
      state.open = action.payload;
    },
    setMenuClose: (state, action: PayloadAction<"">) => {
      state.open = action.payload;
    },
  },
});

export const { setMenuShapes, setMenuColor, setMenuEffects, setMenuClose } =
  menuSlice.actions;
export default menuSlice.reducer;
