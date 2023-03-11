import Navbar from "./components/Navbar";
import ShapesBar from "./components/Main/ShapesBar";
import { Outlet } from "react-router-dom";
import Search from "./components/Main/Search";
import Menu from "./components/Main/Menu";
import {
  setMenuClose,
  setMenuColor,
  setMenuShapes,
  setMenuEffects,
} from "./reducers/menuSlice";
import nail_form from "./assets/dropdown_icons/nail_form.png";
import nail_color from "./assets/dropdown_icons/nail_color.png";
import nail_effect from "./assets/dropdown_icons/nail_effect.png";
import MenuItem from "./components/Main/MenuItem";
import { useAppDispatch } from "./hooks/hooks";
import DropdownMenu from "./components/Main/DropdownMenu";
import DropdownItem from "./components/Main/DropdownItem";
import ColorsBar from "./components/Main/ColorsBar";

function App() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex h-screen flex-col ">
      <Search />
      <Menu>
        <MenuItem
          onClick={() => dispatch(setMenuShapes())}
          alt="форма"
          src={nail_form}
          text="Форма"
        />
        <MenuItem
          onClick={() => dispatch(setMenuColor())}
          alt="цвет"
          src={nail_color}
          text="Цвет"
        />
        <MenuItem
          onClick={() => dispatch(setMenuEffects())}
          alt="узоры"
          src={nail_effect}
          text="Узоры"
        />
      </Menu>
      <DropdownMenu>
        <DropdownItem text="Форма">
          <ShapesBar />
        </DropdownItem>
        <DropdownItem text="Цвет">
          <ColorsBar />
        </DropdownItem>
      </DropdownMenu>
    </div>
  );
}

export default App;
