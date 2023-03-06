import { useState } from "react";
import nails_logo from "../assets/nails.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <nav className=" flex flex-initial items-center justify-between bg-white p-3">
      <button
        className="focus:rounded-full focus:bg-indigo-100"
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        <Bars3Icon className="h-12 w-12 p-2" />
      </button>
      <img className="w-12" src={nails_logo} alt="logo"></img>
      <Link to={"/login"} className="font-medium ">
        Войти
      </Link>
    </nav>
  );
}
