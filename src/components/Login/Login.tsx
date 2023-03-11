import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { auth } from "../../lib/controller";
import { setUser } from "../../reducers/userSlice";
import { Form, Link, useNavigate } from "react-router-dom";
import { authApi } from "../../services/authAPI";
import Spinner from "../Spinner";
import nails_logo from "../../assets/nails.png";
import icon_google from "../../assets/google.svg";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loginWithGoogle, { data: newUser, isLoading }] =
    authApi.useLoginWithGoogleMutation();
  const handleLoginWithGoogle = async () => {
    await loginWithGoogle();
  };
  useEffect(() => {
    if (newUser) {
      dispatch(setUser(newUser));
      console.log("Вы успешно вошли");
      localStorage.setItem("user", JSON.stringify(newUser));
      return navigate(`/profile/:${newUser?.uid}`);
    } else {
      console.log("Войдите");
    }
  }, [newUser]);

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-24 w-auto"
            src={nails_logo}
            alt="Nail choice"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Войди в аккаунт
          </h2>
          <p className="mt-2 text-center text-sm text-indigo-500">
            Получи полный доступ к функциям уже сейчас
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
                className="relative block w-full rounded-t-md border-blue-300 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:border-white sm:text-sm sm:leading-6"
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
                className="relative block w-full rounded-b-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-white"
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
                className="h-4 w-4 cursor-pointer rounded border text-black accent-indigo-600  checked:bg-indigo-600 focus:border-indigo-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Запомнить пароль
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Забыли пароль ?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
          <div className="inline-flex w-full items-center justify-center">
            <hr className=" h-px w-96 border-0 bg-gray-200 dark:bg-gray-700 md:w-full" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-1 font-normal text-black">
              Или
            </span>
          </div>
          <button
            type="button"
            onClick={handleLoginWithGoogle}
            disabled={isLoading}
            className="relative flex w-full items-center justify-center rounded-md border border-black bg-white py-2 px-3 text-sm font-semibold text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
