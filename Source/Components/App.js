import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"

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
            <RouterProvider router={ router } />
        </React.StrictMode>
    )
}