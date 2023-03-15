import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../lib/controller";
import { authApi } from "../../services/authAPI";
import Spinner from "../Spinner";

function Profile() {
  //Хуки из react-router-dom
  //1: даёт возможность навигации между страницами
  //2: даёт возможность получить данные из строки URL
  const navigate = useNavigate();
  const location = useLocation();

  //Данные профиля авторизованного пользователя (нужно для сравнения uid с uid искомого пользователя)
  //Если одинаковые данные, то показать дополнительную информацию
  let { data: user, isLoading } = authApi.useGetUserProfileQuery();

  //Хук, для выхода из аккаунта
  const [Logout] = authApi.useLogoutMutation();

  //Парметры поиска пользователя
  const [searchParams, setSearchParams] = useState<string>("");

  //Берёт путь из строки URL и при изменении параметров обновляет их
  useEffect(() => {
    let userPath = location.pathname.slice(10);
    setSearchParams(userPath);
  }, [searchParams]);

  //Данные пользователя которого мы ищем, если параметры поиска - пустая строка, не создаём запрос
  const { data: userProfile, isLoading: ProfileLoading } =
    authApi.useGetUserProfileByIdQuery(searchParams, {
      skip: searchParams === "",
    });

  //Функция которая выполняет logout мутацию, избавляя нас от тагов, обновляя данные пользователя
  function handleLogout() {
    Logout(auth);
    //Перенаправляет нас на страницу login
    return navigate("/login");
  }

  return (
    <div className="m-3 flex flex-col items-center justify-center">
      {/*Показывает спиннер при загрузке с сервера */}
      {ProfileLoading && <Spinner />}
      <>
        {/*Показывает ошибку если пользователя не существует в базе данных, если же он есть показывает информацию*/}
        {!userProfile && !ProfileLoading && !isLoading ? (
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
        {/* Показывает кнопку выйти и что это ваш профиль если ваш uid совпадает с запросом и пользователь авторизован*/}
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
