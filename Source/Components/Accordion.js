import React from "react";
import { AddIcon, LikedIcon, PlayIcon } from "../Utils/img/Icons";

const Accordion = () => {
  return (
    <div
      className="accordion cursor-pointer flex items-center justify-between 
    p-4 bg-gray-800 text-white w-[90%] mx-auto border border-transparent 
    hover:border-white hover:shadow-lg hover:shadow-gray-600 hover:bg-[rgba(24,24,25,0.8)]"
    >
      <div className="left-side flex items-center relative group">
        <div className="count mr-4">01</div>
        <img
          src="https://ash4059.github.io/Music-player/images/katy-perry/Bona%20Apetit.jpg"
          alt="Bona Apetit"
          className="w-16 h-16 object-cover mr-4"
        />
        <a
          href="#"
          className="hidden absolute top-0 left-[33px] bg-black/40 w-16 h-16 group-hover:flex justify-center items-center text-white text-2xl decoration-none "
        >
          <PlayIcon alt="play icon" />
        </a>
        <div className="description">
          <span className="block font-bold">Bona Apetit</span>
          <span>Feat Migos</span>
        </div>
      </div>
      <div className="center-side">4:38</div>
      <div className="right-side flex items-center justify-between w-16">
        <LikedIcon alt="Liked svg" />
        <AddIcon alt="Add svg" />
      </div>
    </div>
  );
};

export default Accordion;
