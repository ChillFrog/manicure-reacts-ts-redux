import nails_logo from "../assets/nails.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks";
import { authApi } from "../services/authAPI";
import Spinner from "./Spinner";

export default function Navbar() {
  const navigate = useNavigate();
  const { data: userData, isLoading } = authApi.useGetUserProfileQuery();

  function handleProfileClick() {
    if (userData?.uid !== undefined || null) {
      navigate(`profile/:${userData?.uid}`);
    }
  }

  return (
    <nav className="sticky top-0 z-50 mb-3 w-full justify-center bg-opacity-5 px-4 backdrop-blur-md">
      <div className=" flex w-full items-center justify-between border-b border-gray-700 border-opacity-20 ">
        <div className="flex items-center">
          <h1 className=" font-pacifico text-xl text-gray-900 md:block">
            Маникюр
          </h1>
        </div>
        <div className="flex items-center">
          {userData && isLoading && <Spinner />}
          {userData && !isLoading && (
            <button
              className="font-medium"
              type="button"
              onClick={handleProfileClick}
            >
              {userData.displayName}
            </button>
          )}
          {userData === null && !isLoading && (
            <div>
              <Link
                to={"/register"}
                className="py-2 font-medium tracking-tight  text-gray-900 "
              >
                Создать
              </Link>
              <Link
                to={"/login"}
                className="mx-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-700 px-5 py-1.5 font-medium  text-gray-50"
              >
                Войти
              </Link>
            </div>
          )}
          <button
            type="button"
            onClick={() => navigate("/home")}
            className="focus:rounded-full focus:bg-indigo-100"
          >
            <Bars3Icon className=" h-12 w-12 p-2 opacity-95" name="Меню" />
          </button>
        </div>
      </div>
    </nav>
  );
}
