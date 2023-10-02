import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"
import { Navbar } from './Navbar';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Home />
    },
    {
        path : '/login',
        element : <Login />
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