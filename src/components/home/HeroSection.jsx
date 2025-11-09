import React from "react";
import { FiSearch, FiMapPin, FiCalendar, FiUsers, FiPlay } from "react-icons/fi";
import { heroSection } from "../../assets";
import { FaPlay } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative bg-black h-full md:py-12  py-4 text-white flex flex-col justify-center items-center overflow-hidden">
      <div className="relative">
      <img
      src={heroSection}
        alt="Camping in forest"
        className="md:w-[80%]  h-full  w-full mx-auto mt-[7rem]  md:rounded-[20px]  object-cover opacity-90"
      />
      {/* Play Button */}
 
      <div class="bg-[radial-gradient(circle,rgba(255,255,255,0),rgba(255,255,255,1))] absolute top-1/2 transform  -translate-y-1/2 right-1/2  z-10 hidden md:flex justify-center items-center w-[100px] h-[100px] rounded-full">
<div className="bg-[radial-gradient(circle,rgba(255,255,255,0),rgba(255,255,255,1))] w-[70px] h-[70px] rounded-full md:flex justify-center items-center">
        <button className="bg-white rounded-full w-[42px] h-[42px] p-1 flex items-center justify-center">
          <FaPlay size={22} className="text-black" />
        </button>
        </div>
      </div>
       {/* Search Bar */}
      <div className="relative hidden bottom-12 w-[60%] mx-auto z-10 bg-white text-black md:flex flex-wrap justify-between items-center rounded-full py-2 px-4 md:p-4 shadow-xl">
        <div className="flex items-center space-x-2 w-full md:w-auto border-b md:border-none pb-2 md:pb-0 mb-3 md:mb-0">
          <FiMapPin />
          <input
            type="text"
            placeholder="Where are you going?"
            className="outline-none w-full md:w-48 text-sm bg-transparent"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto border-b md:border-none pb-2 md:pb-0 mb-3 md:mb-0">
          <FiCalendar />
          <input
            type="date"
            className="outline-none w-full md:w-36 text-sm bg-transparent"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto border-b md:border-none pb-2 md:pb-0 mb-3 md:mb-0">
          <FiUsers />
          <input
            type="text"
            placeholder="Add guests"
            className="outline-none w-full md:w-36 text-sm bg-transparent"
          />
        </div>

        <button className="bg-black text-white font-semibold px-6 py-2 rounded-full flex items-center space-x-2  transition">
          <FiSearch />
          <span>Search</span>
        </button>
      </div>
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0  bg-black/40"></div> */}

      

      {/* Vertical Text */}
      <div className="font-[Mulish] absolute top-40  lg:-left-40 md:top-1/2  md:-left-20 transform md:-translate-y-1/2 md:rotate-[-90deg] lg:text-[52px] text-2xl font-normal  md:bg-[linear-gradient(to_right,black_-100%,white_-50%,black_120%)] md:bg-clip-text md:text-transparent text-white">
        Explore the Hidden
      </div>
      <div className="font-[Mulish] absolute top-50 lg:-right-50 md:-right-20 md:top-1/2 transform md:-translate-y-1/2 md:rotate-270 lg:text-[52px] text-2xl font-normal  md:bg-[linear-gradient(to_right,black_-100%,white_-50%,black_120%)] md:bg-clip-text md:text-transparent text-white">
        Wonders of the World
      </div>

     
    </section>
  );
}
