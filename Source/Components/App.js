import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import Loader from "./Loader";
import store from "../Utils/Store";
import AuthRequired from "../Utils/AuthRequired";
import FormLoader from "./FormLoader";
import UserFormAction from "./FormAction";

const Home = lazy(() => import("../Pages/Home"));
const MainContent = lazy(() => import("../Pages/MainContent"));
const UserForm = lazy(() => import("../Pages/UserForm"));
const Music = lazy(() => import("../Pages/Music"));
const Podcast = lazy(() => import("../Pages/Podcast"));
const Liked = lazy(() => import("../Pages/LikedAudio"));
const Bookmark = lazy(() => import("../Pages/Bookmark"));
const History = lazy(() => import("../Pages/History"));
const Account = lazy(() => import("../Pages/Account"));
const Error = lazy(() => import("./Error"));
const Artist = lazy(() => import("../Pages/Artist"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loader />}>
            <MainContent />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <UserForm mode="Login" />
          </Suspense>
        ),
        loader: FormLoader,
        action: UserFormAction,
        errorElement: <Error />,
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Loader />}>
            <UserForm mode="Sign Up" />
          </Suspense>
        ),
        action: UserFormAction,
        errorElement: <Error />,
      },
      {
        path: "songs",
        element: (
          <Suspense fallback={<Loader />}>
            <Music />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "artist",
        element: (
          <Suspense fallback={<Loader />}>
            <Artist />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "liked",
        element: (
          <Suspense fallback={<Loader />}>
            <Liked />
          </Suspense>
        ),
        loader: AuthRequired,
        errorElement: <Error />,
      },
      {
        path: "podcast",
        element: (
          <Suspense fallback={<Loader />}>
            <Podcast />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "bookmark",
        element: (
          <Suspense fallback={<Loader />}>
            <Bookmark />
          </Suspense>
        ),
        loader: AuthRequired,
        errorElement: <Error />,
      },
      {
        path: "history",
        element: (
          <Suspense fallback={<Loader />}>
            <History />
          </Suspense>
        ),
        loader: AuthRequired,
        errorElement: <Error />,
      },
      {
        path: "account",
        element: (
          <Suspense fallback={<Loader />}>
            <Account />
          </Suspense>
        ),
        errorElement: <Error />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
