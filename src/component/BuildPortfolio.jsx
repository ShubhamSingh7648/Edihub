import React from "react";
import profile from "../assets/avenger.jpeg"; // Replace with your actual profile image
import aeIcon from "../assets/after-effects.png";        // Replace with After Effects logo
import psIcon from "../assets/photoshop.png";        // Replace with Premiere Pro logo
import resolveIcon from "../assets/davinci.png"; // Replace with DaVinci Resolve logo
import prIcon from "../assets/premiere-pro.png";   // Replace with CapCut logo

const BuildPortfolio = () => {
  return (
    <div className="max-w-70  bg-[#ffffff] text-black rounded-2xl shadow-lg p-10 flex flex-col items-center text-center">
      {/* Profile Image */}
      <img
        src={profile}
        alt="Shubham Singh"
        className="w-32 h-32 rounded-full object-cover border-4 border-white"
      />

      {/* Name */}
      <h2 className="mt-4 text-2xl font-semibold">Shubham Singh</h2>

      {/* Tool Icons */}
      <div className="flex gap-2 mt-3 text-lg">
        <img src={aeIcon} alt="After Effects" className="w-8 h-8" />
        <img src={prIcon} alt="Premiere Pro" className="w-8 h-8" />
        <img src={resolveIcon} alt="DaVinci Resolve" className="w-8 h-8" />
        <img src={psIcon} alt="CapCut" className="w-8 h-8" />
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-black-200 leading-relaxed">
        I am a video editor. I make tutorials and videos using CapCut, VN Editor,
        and some AI tools. I have a YouTube channel where I show my work.
      </p>
    </div>
  );
};

export default BuildPortfolio;
