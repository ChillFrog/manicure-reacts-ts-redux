import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { setColorsArray } from "../../reducers/colorsSlice";

function AddColor() {
  const dispatch = useDispatch();
  const { currentColor, colorsArray } = useAppSelector(
    (state) => state.colorsReducer
  );
  const handleAddColor = () => {
    dispatch(setColorsArray(currentColor));
  };

  return (
    <button onClick={handleAddColor} className="h-10 w-10 rounded-xl bg-white">
      +
    </button>
  );
}

export default AddColor;
