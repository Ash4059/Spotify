import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../Utils/Store";

export const Navbar = () => {
  const userName = useSelector((store) => store.user?.user?.name);

  const activeStyle = {
    "text-decoration": "underline",
    "font-weight": "bold"
  }

  return (
    <div className="bg-black text-white dark:bg-white dark:text-black p-4 flex justify-between items-center border-b border-zinc-300 dark:border-zinc-700">
      <div className="flex items-center">
        <NavLink 
          to={"/"} 
          className="text-lg font-bold cursor-pointer"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          AudioWebApp
        </NavLink>
      </div>
      <div className="border-2 border-solid border-black rounded-2xl">
        <input
          type="text"
          placeholder="Search..."
          className="js-search p-4 pl-5 pr-10 text-gray-700 uppercase text-sm rounded-2xl w-96 outline-none"
        />
      </div>
      <nav className="hidden sm:flex items-center space-x-4">
        <NavLink
          to="/artist"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Artist
        </NavLink>
        <NavLink
          to="/podcast"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Podcast
        </NavLink>
        <NavLink
          to="/songs"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Song
        </NavLink>
        <NavLink
          to="/history"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          History
        </NavLink>
        <NavLink
          to="/liked"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Liked
        </NavLink>
        <NavLink
          to="/boolmark"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Bookmark
        </NavLink>
        <NavLink
          to="/login"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          LogIn
        </NavLink>
      </nav>
    </div>
  );
};
