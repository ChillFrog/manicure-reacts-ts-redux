import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouteObject, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./store/store";
import { createBrowserRouter, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <Login /> },
      {
        path: "home",
        element: <App />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
