import React from "react";
import { MdOutlineMonitor } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoComment } from "react-icons/go";

const BannerBottom = () =>
{
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-0 lg:flex-row justify-center items-center h-auto lg:h-60 bg-bgColor text-textColor py-10 px-8 -mt-20 z-50">
      <div className="w-full lg:w-[60%] flex flex-col gap-3">
        <p className="text-sm uppercase font-bodyFont font-semibold text-white/50">
          My Blog
        </p>
        <h3 className="font-bold  md:text-xl hover:text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 duration-300">
          Embark on a Journey of Knowledge: Explore Fresh Perspectives and
          Inspiring Stories!
        </h3>
        <p className="text-xs text-white/50">Aman Kumar Dwivedi / Now 😉</p>
      </div>
      <div className="w-full lg:w-[40%] flex items-center justify-center gap-2 lg:gap-8">
        <div className="w-full flex flex-col items-center group">
          <MdOutlineMonitor className="text-4xl text-gray-300 group-hover:text-rose-300 duration-300 " />
          <p className="text-xs md:text-sm font-titleFont text-white/50 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400 duration-300">
            Dive into videos
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center group">
          <IoMdHeartEmpty className="text-4xl text-gray-300 group-hover:text-red-600 duration-300" />
          <p className="text-xs md:text-sm font-titleFont text-white/50 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400 duration-300">
            Spread the Love
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center group">
          <GoComment className="text-4xl text-gray-300 group-hover:text-blue-500 duration-300" />
          <p className="text-xs md:text-sm font-titleFont text-white/50 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400 duration-300">
            Share Thoughts
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
