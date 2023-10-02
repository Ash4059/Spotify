import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"
import { Navbar } from './Navbar';
import Music from '../Pages/Music';
import LikedAudio from '../Pages/LikedAudio';
import Bookmark from '../Pages/Bookmark';
import Account from '../Pages/Account';
import Podcast from '../Pages/Podcast';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Home />
    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/music',
        element : <Music />
    },
    {
        path : '/liked',
        element : <LikedAudio />
    },
    {
        path : '/podcast',
        element : <Podcast />
    },
    {
        path : '/bookmark',
        element : <Bookmark />
    },
    {
        path : '/history',
        element : <History />
    },
    {
        path : '/account',
        element : <Account />
    }
])

export const App = () => {
    return (
        <React.StrictMode>
            <Navbar />
            <RouterProvider router={ router } />
        </React.StrictMode>
    )
}