import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"
import { Navbar } from './Navbar';
import Music from '../Pages/Music';
import LikedAudio from '../Pages/LikedAudio';
import Bookmark from '../Pages/Bookmark';
import Account from '../Pages/Account';
import Podcast from '../Pages/Podcast';
import History from '../Pages/History';

export const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/music' element={<Music />} />
                <Route path='/liked' element={<LikedAudio />} />
                <Route path='/podcast' element={<Podcast />} />
                <Route path='/bookmark' element={<Bookmark />} />
                <Route path='/history' element={<History />} />
                <Route path='/account' element={<Account />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}