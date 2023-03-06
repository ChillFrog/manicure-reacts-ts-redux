import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function ErrorPage() {
  let error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex h-screen flex-col items-center justify-center ">
        <ExclamationTriangleIcon height={100} title="Error" />
        <h1 className="mb-4 text-7xl font-bold">Упс !!!</h1>
        <p className="text-1xl  font-medium">Произошла неожидання ошибка</p>
        <p className="text-3xl text-slate-400">{error.status}</p>
        <p className="text-3xl font-thin text-slate-400">{error.statusText}</p>
      </div>
    );
  } else {
    return null;
  }
}
