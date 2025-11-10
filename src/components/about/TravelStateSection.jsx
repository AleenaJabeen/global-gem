import React from "react";
import {  location, login, populardestination, send, switzerland, users } from "../../assets";

export default function TravelStatsSection() {
  return (
    <section className="w-full px-6 lg:px-20 py-10 bg-white">
          <div>
          <p className="text-lg text-[#1A1A1A] font-bold font-[Quattrocento]">About us</p>
          <h2 className="font-[Mulish] text-2xl md:text-3xl lg:text-[52px] drop-shadow-sm drop-shadow-[#FFFFFF66] font-bold text-[#1C2B38] leading-tight">
            Travel Agency provides beautiful<br className="hidden sm:block" />  Dream Place for you
          </h2>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-between md:py-8 py-4 xxl:mb-12 mb-4">
      {/* Left Images */}
      <div className="relative w-full lg:w-1/2 flex justify-center md:mb-[22rem] lg:mb-12 xl:mb-6 mb-16">
        <img
         src={switzerland}
          alt="mountain"
          className="w-50 sm:w-72 md:w-80 xl:w-[365px] xl:h-[530px] lg:h-108 md:h-76 h-64 absolute  lg:-left-10 md:left-10 left-5 rounded-md shadow-lg transform rotate-[-4deg]"
        />
        <img
        src={populardestination}
          alt="beach"
          className="w-50 sm:w-72 md:w-80 lg:w-76 xl:w-[345px]  xl:h-[435px]  lg:h-90 md:h-72  h-54 rounded-md shadow-lg absolute xl:bottom-0 lg:bottom-40 xl:left-40 lg:left-20 lg:top-50 top-10  transform rotate-[6deg] "
        />
      </div>

      {/* Right Content */}
      <div className="font-[Quattrocento] w-full lg:w-1/2 xl:space-y-6 md:space-y-2 space-y-6 text-[#1A1A1A] md:mt-0 mt-60">
        <p className="text-base xl:text-lg leading-relaxed">
          The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn’t enjoy it. I’d like to ask the organisers: please
        </p>
        <p className="text-base xl:text-lg leading-relaxed">
          The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn’t enjoy it. I’d like to ask the organisers: please
        </p>

        {/* Stats Grid */}
      
      {/* STATS */}
      <div className="grid grid-cols-2 md:gap-4 gap-2">
        <div className="flex items-center gap-2  xl:py-6 py-3 text-center md:px-4">
          <img src={location} alt="map icon" />
          <div className="flex flex-col text-[#1C1C1E]">
            <p className="md:text-[33px]  text-xl font-bold">50K+</p>
            <p className="text-base font-extrabold">Locations</p>
          </div>
        </div>

        <div className="flex items-center gap-2  xl:py-6 text-center md:px-4">
          <img src={login} alt="Login" />
          <div className="flex flex-col text-[#1C1C1E]">
            <p className="md:text-[33px] text-xl font-bold">50K+</p>
            <p className="text-base font-extrabold">Check in</p>
          </div>
        </div>

        <div className="flex items-center gap-2  xl:py-6 py-3 text-center md:px-4">
          <img src={send} alt="Send icon" />
          <div className="flex flex-col text-[#1C1C1E]">
            <p className="md:text-[33px] text-xl font-bold">50K+</p>
            <p className="text-base font-extrabold">Travelers</p>
          </div>
        </div>

        <div className="flex items-center gap-2  xl:py-6  py-3 text-center md:px-4">
          <img src={users} alt="User Icon" />
          <div className="flex flex-col text-[#1C1C1E]">
            <p className="md:text-[33px] text-2xl font-bold">50K+</p>
            <p className="text-base font-extrabold">Hosts</p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
