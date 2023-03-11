import { useEffect, useState } from "react";
import nails_logo from "../assets/nails.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { auth } from "../lib/controller";
import { authApi } from "../services/authAPI";
import { getRedirectResult } from "firebase/auth";
import Spinner from "./Spinner";
import { setUser } from "../reducers/userSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: userData, isLoading } = authApi.useGetUserProfileQuery();

  const { user } = useAppSelector((state) => state.userReducer);
  function handleProfileClick() {
    if (user?.uid !== undefined || null) {
      navigate(`profile/:${user?.uid}`);
    }
  }
  useEffect(() => {
    if (userData) {
      dispatch(setUser(userData));
      console.log("Страница успешно загружена");
    } else {
      console.log("Войдите");
    }
  }, [userData]);

  return (
    <nav className=" flex flex-initial items-center justify-between bg-white p-3">
      <button
        type="button"
        onClick={() => navigate("/home")}
        className="focus:rounded-full focus:bg-indigo-100"
      >
        <Bars3Icon className="h-12 w-12 p-2" name="Меню" />
      </button>
      <img className="w-12" src={nails_logo} alt="logo"></img>
      {user && isLoading && <Spinner />}
      {user && !isLoading && (
        <button
          className=" rounded-full"
          type="button"
          onClick={handleProfileClick}
        >
          <img
            className="full w-12 rounded-full"
            src={userData?.photoURL}
          ></img>
        </button>
      )}
      {!user && (
        <Link to={"/login"} className="font-medium ">
          Войти
        </Link>
      )}
    </nav>
  );
}
