import React from 'react'
import { Navbar } from '../Components/Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-gray-700 flex justify-center items-center"
        style={{ height: "calc(100vh - 201px)" }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Home;
