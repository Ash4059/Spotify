import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Navbar } from "./Navbar";
import Loader from "./Loader";
import store from "../Utils/Store";

const delayForLoad = async (promise) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    return promise;
};

export const App = () => {
    const Home = lazy(() => delayForLoad(import("../Pages/Home")));
    const Login = lazy(() => delayForLoad(import("../Pages/Login")));
    const Music = lazy(() => delayForLoad(import("../Pages/Music")));
    const Podcast = lazy(() => delayForLoad(import("../Pages/Podcast")));
    const Liked = lazy(() => delayForLoad(import("../Pages/LikedAudio")));
    const Bookmark = lazy(() => delayForLoad(import("../Pages/Bookmark")));
    const History = lazy(() => delayForLoad(import("../Pages/History")));
    const Account = lazy(() => delayForLoad(import("../Pages/Account")));

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Navbar />
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Login />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/music"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Music />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/liked"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Liked />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/podcast"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Podcast />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/bookmark"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Bookmark />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/history"
                        element={
                            <Suspense fallback={<Loader />}>
                                <History />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/account"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Account />
                            </Suspense>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Home />
                            </Suspense>
                        }
                    />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
};
