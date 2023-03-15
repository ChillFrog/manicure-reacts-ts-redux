import { useEffect } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { authApi } from "../../services/authAPI";
import Spinner from "../Spinner";
import nails_logo from "../../assets/nails.png";
import icon_google from "../../assets/google.svg";

const Login = () => {
  //Хук для навигации между страницами
  const navigate = useNavigate();

  //Хук для входа пользователя через Google, возвращает данные пользователя
  const [loginWithGoogle, { data: newUser, isLoading }] =
    authApi.useLoginWithGoogleMutation();

  //Функция для входа через Google
  const handleLoginWithGoogle = async () => {
    await loginWithGoogle();
  };

  //Если появляется пользователь, переносит на его профиль
  useEffect(() => {
    if (newUser) {
      return navigate(`/profile/:${newUser?.uid}`);
    }
  }, [newUser]);

  return (
    <div className=" flex h-full w-full flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-xl border-b border-l border-r border-gray-400  border-opacity-70 bg-gray-50 bg-opacity-70 p-5 backdrop-blur-xl ">
        <div>
          <img
            className="mx-auto h-24 w-auto"
            src={nails_logo}
            alt="Nail choice"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-800">
            Войди в аккаунт
          </h2>
          <p className="mt-2 text-center text-sm font-medium  text-gray-800">
            и получи полный доступ к функциям уже сейчас
          </p>
        </div>
        <Form className="mt-8 space-y-6" action="/">
          <input type="hidden" name="remember" defaultValue="false" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Почта
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="form-input relative block w-full rounded-t-md border-gray-300/50 py-1.5 pl-3 font-medium text-gray-900 placeholder:font-normal placeholder:text-gray-400 focus:z-10 focus:border-gray-300 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Почта"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Пароль
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                minLength={9}
                required
                className="form-input relative block w-full rounded-b-md border-gray-300/50 py-1.5 pl-3 font-medium text-gray-900 placeholder:font-normal placeholder:text-gray-400  focus:z-10 focus:border-gray-300 focus:ring-0 sm:text-sm sm:leading-6  "
                placeholder="Пароль"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="form-checkbox h-4 w-4 cursor-pointer rounded border border-gray-300 text-indigo-500 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block  text-sm text-gray-900 "
              >
                Запомнить пароль
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/"
                className=" text-indigo-600 transition-all  duration-500 hover:text-indigo-700 hover:underline"
              >
                Забыли пароль ?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="relative flex w-full justify-center rounded-full bg-gradient-to-r from-indigo-300 to-purple-400 py-2 px-3 text-sm font-semibold text-white transition-colors duration-150 hover:from-indigo-500 hover:to-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Войти
            </button>
            <button
              type="button"
              className=" relative mt-5 flex w-full justify-center rounded-full border border-gray-400 bg-white bg-opacity-50 py-2 px-3 text-sm font-semibold text-black transition-colors duration-150 hover:border-gray-500 hover:border-opacity-0 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-indigo-600 hover:to-indigo-900 hover:text-white "
            >
              Зарегестрироваться
            </button>
          </div>
          <div className="relative flex items-center ">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-2 flex-shrink text-gray-600">Или</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <button
            type="button"
            onClick={handleLoginWithGoogle}
            disabled={isLoading}
            className="relative flex w-full items-center justify-center rounded-full border border-gray-500 border-opacity-50 bg-white py-2 px-3 text-sm font-semibold text-black transition-colors duration-150 ease-in-out hover:bg-black hover:text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                Войти через Google
                <span>
                  <img
                    className="ml-2 w-6"
                    src={icon_google}
                    alt="Иконка гугл"
                  />
                </span>
              </>
            )}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
