import React from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCurrentColor } from "../../reducers/colorsSlice";
import AddColor from "./AddColor";
import ColorSquare from "./ColorSquare";

function ColorsBar() {
  const dispatch = useAppDispatch();

  const { colorsArray, currentColor } = useAppSelector(
    (state) => state.colorsReducer
  );

  const handlePalleteColorChange = (color: string) => {
    dispatch(setCurrentColor(color));
  };

  return (
    <div className="mx-3 mb-3 flex flex-row">
      <div>
        <HexColorPicker
          color={currentColor}
          onChange={handlePalleteColorChange}
          className="mt-3"
        ></HexColorPicker>
        <div className="flex">
          <HexColorInput
            color={currentColor}
            onChange={handlePalleteColorChange}
            className="w-40 bg-white"
          ></HexColorInput>
          <AddColor />
        </div>
      </div>
      <div className="h-56 overflow-auto">
        {colorsArray.map((color) => (
          <ColorSquare key={color.id} bgValue={color.value}></ColorSquare>
        ))}
      </div>
    </div>
  );
}

export default ColorsBar;
