import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Root() {
  return (
    <div className="min-h-screen min-w-fit bg-gradient-to-tr from-indigo-200 via-purple-200 to-indigo-200">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
}

export default Root;
