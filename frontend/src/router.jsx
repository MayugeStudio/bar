import { createBrowserRouter } from "react-router";
import App from "./App.jsx";

import TopPage from "./pages/top.jsx";
import LoginPage from "./pages/login.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <></>,
    children: [
      { index: true, Component: TopPage, id: "top" },
      { Component: LoginPage },
    ],
  }
]);
