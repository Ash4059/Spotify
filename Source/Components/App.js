import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import Loader from "./Loader";
import store from "../Utils/Store";
import AuthRequired from "./AuthRequired";

const Home = lazy(() => delayForLoad(import("../Pages/Home")));
const MainContent = lazy(() => delayForLoad(import("../Pages/MainContent")));
const UserForm = lazy(() => delayForLoad(import("../Pages/UserForm")));
const Music = lazy(() => delayForLoad(import("../Pages/Music")));
const Podcast = lazy(() => delayForLoad(import("../Pages/Podcast")));
const Liked = lazy(() => delayForLoad(import("../Pages/LikedAudio")));
const Bookmark = lazy(() => delayForLoad(import("../Pages/Bookmark")));
const History = lazy(() => delayForLoad(import("../Pages/History")));
const Account = lazy(() => delayForLoad(import("../Pages/Account")));
const Error = lazy(() => delayForLoad(import("./Error")));
const Artist = lazy(() => delayForLoad(import("../Pages/Artist")));

const delayForLoad = async (promise) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return promise;
};

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
        errorElement: <Error />,
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Loader />}>
            <UserForm mode="Sign Up" />
          </Suspense>
        ),
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
