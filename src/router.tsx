import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout/GuestLayout.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"main"} />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/results",
        element: <SearchResultsPage />,
      },
    ],
  },
]);
