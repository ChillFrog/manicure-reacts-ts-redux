import React from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { setCurrentColor } from "../../reducers/colorsSlice";

const ColorSquare = ({ bgValue }: { bgValue: string }) => {
  const dispatch = useAppDispatch();

  const handleChangeColorOnClick = () => {
    dispatch(setCurrentColor(bgValue));
  };

  return (
    <button
      type="button"
      className={`ml-3 mt-3 h-14 w-14 rounded-xl `}
      style={{ backgroundColor: `${bgValue}` }}
      onClick={handleChangeColorOnClick}
    ></button>
  );
};

export default ColorSquare;
