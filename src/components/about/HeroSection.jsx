import React, { useState } from "react";
import { AppDownload, date, guests, map } from "../../assets";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiSearch } from "react-icons/fi";

function HeroSection({ title }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-black h-full md:py-12 py-4 text-white flex flex-col justify-center items-center overflow-hidden">
      <div className="relative w-full flex justify-center">
        <img
          src={AppDownload}
          alt="Camping in forest"
          className="w-[90%] md:w-[80%] lg:w-[75%] h-full mx-auto md:mt-[7rem] sm:mt-[5rem] mt-[3rem] rounded-[20px] object-cover opacity-90"
        />

        {/* Title */}
        <h2 className="font-[Mulish] absolute top-1/2 -translate-y-1/2 text-white font-medium 
          text-2xl sm:text-4xl md:text-5xl lg:text-[77px] text-center px-2">
          {title}
        </h2>

        {/* Search Container */}
        {title.toLowerCase() !== "about us" && (
          <div className="font-[Inter] absolute   top-[65%]
            w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] mx-auto z-10 bg-white text-black 
            flex flex-wrap md:flex-nowrap justify-between items-center rounded-full py-2 px-3 sm:px-4 shadow-xl">

            {/* LOCATION */}
            <div className="flex items-start gap-2 border-r-[1px] border-[#E5E7EB] pr-2 w-1/2 sm:w-auto">
              <img src={map} alt="Map icon" className="mt-1 w-4 sm:w-5" />
              <div className="flex flex-col">
                <h3 className="text-black font-semibold text-xs sm:text-sm">Location</h3>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="outline-none text-[#6B7280] text-[12px] sm:text-[15px] bg-transparent w-full"
                />
              </div>
            </div>

            {/* DATE */}
            <div className="relative flex items-start gap-2 border-r-[1px] border-[#E5E7EB] pr-2 w-1/2 sm:w-auto mt-2 sm:mt-0 cursor-pointer"
              onClick={() => setOpen(true)}>
              <img src={date} alt="Date icon" className="mt-1 w-4 sm:w-5" />
              <div className="flex flex-col">
                <h3 className="text-black font-semibold text-xs sm:text-sm">Date</h3>
                <span className="text-gray-400 text-[12px] sm:text-[15px]">
                  {selectedDate ? selectedDate.toLocaleDateString() : "Pick Date"}
                </span>
              </div>

              {open && (
                <div className="absolute left-0 top-10 sm:left-20 sm:-top-20 z-50">
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

            {/* GUESTS */}
            <div className="flex items-start gap-2 w-1/2 sm:w-auto mt-2 sm:mt-0">
              <img src={guests} alt="Guests icon" className="mt-1 w-4 sm:w-5" />
              <div className="flex flex-col">
                <h3 className="text-black font-semibold text-xs sm:text-sm">Guests</h3>
                <input
                  type="number"
                  placeholder="Add guests"
                  className="outline-none text-[#6B7280] text-[12px] sm:text-[15px] bg-transparent"
                />
              </div>
            </div>

            {/* SEARCH BUTTON */}
            <button className="bg-black text-white font-semibold px-4 sm:px-6 py-2 rounded-full flex items-center space-x-2 mt-2 sm:mt-0 text-xs sm:text-sm">
              <FiSearch />
              <span>Search</span>
            </button>
          </div>
        )}
      </div>

      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* LEFT TEXT (Responsive) */}
      <div className="font-[Mulish] absolute left-2 sm:left-4 md:-left-20 lg:-left-40 
        top-[65%] sm:top-1/2 transform -translate-y-1/2 -rotate-90 
        text-[10px] sm:text-xs md:text-base lg:text-[52px] font-normal 
        bg-[linear-gradient(to_right,black_-100%,white_-50%,black_120%)] bg-clip-text text-transparent">
        Explore the Hidden
      </div>

      {/* RIGHT TEXT (Responsive) */}
      <div className="font-[Mulish] absolute right-2 sm:right-4 md:-right-16 lg:-right-40 
        top-[35%] sm:top-1/2 transform -translate-y-1/2 rotate-90 
        text-[10px] sm:text-xs md:text-base lg:text-[52px] font-normal 
        bg-[linear-gradient(to_right,black_-100%,white_-50%,black_120%)] bg-clip-text text-transparent">
        Wonders of the World
      </div>
    </section>
  );
}

export default HeroSection;
