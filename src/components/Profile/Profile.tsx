import { getRedirectResult, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate, useLoaderData, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { auth } from "../../lib/controller";
import { setUser } from "../../reducers/userSlice";
import { authApi } from "../../services/authAPI";
import Spinner from "../Spinner";

function Profile() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  let { data: user, isLoading } = authApi.useGetUserProfileQuery();

  const [logout] = authApi.useLogoutMutation();

  const [searchParams, setSearchParams] = useState<string>("");

  useEffect(() => {
    let userPath = location.pathname.slice(10);
    setSearchParams(userPath);
  }, []);

  const {
    data: userProfile,
    isLoading: ProfileLoading,
    isFetching,
    isSuccess,
    isError,
  } = authApi.useGetUserProfileByIdQuery(searchParams);

  function handleLogout() {
    logout("");
    dispatch(setUser(undefined));
    localStorage.removeItem("user");
    return navigate("/login");
  }

  return (
    <div className="m-3 flex flex-col items-center justify-center">
      {/*Показывает спиннер при загрузке с сервера */}
      {isLoading && <Spinner />}
      <>
        {/*Показывает ошибку если пользователя не существует в базе данных, если же он есть показывает информацию */}
        {userProfile === undefined && !ProfileLoading && !isLoading ? (
          <div className="mt-80 flex flex-col items-center justify-center">
            <h1 className="text-6xl">Вы ошиблись</h1>
            <h2 className="text-2xl">пользователя не существует</h2>
          </div>
        ) : (
          <>
            {" "}
            <img
              className="w-24 rounded-full"
              src={userProfile?.photoURL}
              alt={userProfile?.displayName}
            />
            <span className="font-medium">{userProfile?.displayName}</span>
          </>
        )}
        {/* Показывает кнопку выйти и что это ваш профиль если ваш uid совпадает с запросом*/}
        {user?.uid === userProfile?.uid &&
          user &&
          !isLoading &&
          !ProfileLoading && (
            <>
              <button
                type="submit"
                onClick={handleLogout}
                className="group relative flex w-32 justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Выйти
              </button>
              <h1 className="mb-3 text-2xl font-medium">Ваш профиль</h1>
            </>
          )}
      </>
    </div>
  );
}

export default Profile;
