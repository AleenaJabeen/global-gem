import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { date, guests, heroSection, map } from "../../assets";
import { FaPlay } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
   const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
   const [search, setSearch] = useState("");
    const navigate = useNavigate();
  
    const handleSearch = () => {
      if (!search.trim()) return;
  
      navigate(`/city-listing?search=${encodeURIComponent(search)}`);
    };
  return (
    <section className="relative bg-black h-full md:py-12  py-4 text-white flex flex-col justify-center items-center overflow-hidden">
      <div className="relative">
        <img
          src={heroSection}
          alt="Camping in forest"
          className="md:w-[80%]  h-full  w-full mx-auto mt-[2rem]  md:rounded-[20px]  object-cover opacity-90"
        />
        {/* Play Button */}

        <div className="bg-[radial-gradient(circle,rgba(255,255,255,0),rgba(255,255,255,1))] absolute top-1/2 transform  -translate-y-1/2 right-1/2  z-10 hidden md:flex justify-center items-center w-[100px] h-[100px] rounded-full">
          <div className="bg-[radial-gradient(circle,rgba(255,255,255,0),rgba(255,255,255,1))] w-[70px] h-[70px] rounded-full md:flex justify-center items-center">
            <button className="bg-white rounded-full w-[42px] h-[42px] p-1 flex items-center justify-center">
              <FaPlay size={22} className="text-black" />
            </button>
          </div>
        </div>
        {/* Search Bar */}
        <div className="font-[Inter] lg:w-[90%] w-full relative block xl:bottom-12 lg:-bottom-6 -bottom-8  xl:w-[60%] mx-auto z-10 bg-white text-black md:flex flex-wrap justify-between items-center lg:rounded-full py-2 px-4 md:p-4 shadow-xl lg:mb-1 mb-2">
          <div className="flex items-start justify-start gap-2  border-r-[1.09px] border-[#E5E7EB]">
            <img src={map} alt="Map icon" className="mt-1 " />
            <div className="flex flex-col">
              <h3 className="text-black font-semibold">Location</h3>
              <input
                type="text"
                placeholder="Where are you going?"
                className="outline-none w-full md:w-48 text-[#6B7280] text-[15.31px] bg-transparent"
              />
            </div>
          </div>

          <div className="relative border-r-[1.09px] border-[#E5E7EB] pr-4 ">
      <div
        className="flex items-start  space-x-2  w-full md:w-auto border-b md:border-none pb-2 md:pb-0 mb-3 md:mb-0 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img src={date} alt="Date icon" className="mt-1" />

        <div className="flex flex-col">
          <h3 className="text-black font-semibold">Date</h3>

          <span className="text-gray-400 text-[15.31px]">
            {selectedDate ? selectedDate.toLocaleDateString() : "Pick Date"}
          </span>
        </div>
      </div>

      {open && (
        <div className="absolute left-20   -top-20 z-50 ">
          <DatePicker
            selected={selectedDate}
            onChange={(d) => {
              setSelectedDate(d);
              setOpen(false);
            }}
            inline
            className="text-[#6B7280]"
          />
        </div>
      )}
    </div>
          <div className="flex items-start space-x-2 w-full md:w-auto border-b md:border-none pb-2 md:pb-0 mb-3 md:mb-0">
            <img src={guests} alt="Guests icon" className="mt-1 " />

            <div className="flex flex-col">
              <h3 className="text-black font-semibold">Guests</h3>
              <input
              
                type="text"
                placeholder="Add guests"
                className="outline-none text-[#6B7280] text-[15.31px] w-full md:w-36 text-sm bg-transparent"
              />
            </div>
          </div>
          <button onClick={handleSearch}  className="md:w-fit w-full bg-black text-white font-semibold px-6 py-2 rounded-full flex items-center space-x-2  transition">
            <FiSearch />
           <input
             value={search}
        onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
                className="outline-none w-24 text-white font-extrabold text-base bg-transparent"
              />
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
