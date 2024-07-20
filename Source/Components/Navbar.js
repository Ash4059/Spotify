import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../Utils/Store";

export const Navbar = () => {
  const userName = useSelector((store) => store.user?.user?.name);

  return (
    <div className="bg-black text-white dark:bg-white dark:text-black p-4 flex justify-between items-center border-b border-zinc-300 dark:border-zinc-700">
      <div className="flex items-center">
        <Link to={"/"} className="text-lg font-bold cursor-pointer">
          AudioWebApp
        </Link>
      </div>
      <div className="border-2 border-solid border-black rounded-2xl">
        <input
          type="text"
          placeholder="Search..."
          className="js-search p-4 pl-5 pr-10 text-gray-700 uppercase text-sm rounded-2xl w-96 outline-none"
        />
      </div>
      <nav className="hidden sm:flex items-center space-x-4">
        <Link
          to="/artist"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
        >
          Artist
        </Link>
        <Link
          to="/podcast"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
        >
          Podcast
        </Link>
        <Link
          to="/songs"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
        >
          Song
        </Link>
        <Link
          to="/history"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
        >
          History
        </Link>
        <Link
          to="/liked"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
        >
          Liked
        </Link>
        <Link
          to="/boolmark"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
        >
          Bookmark
        </Link>
        <Link
          to="/login"
          className="text-white dark:text-black hover:text-white dark:hover:text-black"
        >
          LogIn
        </Link>
      </nav>
    </div>
  );
};
