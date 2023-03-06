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

function App() {
  return (
    <div className="flex flex-col">
      <Search />
      <Menu>
        <MenuItem onClick={setMenuShapes} src={nail_color} />
      </Menu>
    </div>
  );
}

export default App;
