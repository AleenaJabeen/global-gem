import React, { useState } from "react";
import { FiArrowRight, FiHeart } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { populardestination,wishlist,taxi,tour,transport,nature,visit, arrow } from "../../assets";
import { IoBus } from "react-icons/io5";

export default function PopularDestination() {
  const [active, setActive] = useState("Eateries");
const categories=[
    {
        icon:transport,
        text:"Public Transportations"
    },
    {
        icon:nature,
        text:"Nature & Adventure"
    },{
        icon:taxi,
        text:"Private Transportations"
    },{
        icon:tour,
        text:"Business Tours"
    },{
        icon:visit,
        text:"Local Visit"
    }
]
  const tabs = [
    "Stays",
    "Experiences",
    "Eateries",
    "Tours",
    "Experience",
    "Stay",
    "Eaterie",
    "Tour",
  ];

  return (
    <div className="w-full h-full bg-white py-10 px-4 md:px-12 lg:px-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-lg  font-[Quattrocento] text-[#1A1A1A] font-bold ">Popular Destination</p>
          <h2 className="font-[Mulish] text-2xl md:text-3xl lg:text-[52px] drop-shadow-sm drop-shadow-[#FFFFFF66] font-bold text-[#1C2B38] leading-tight">
            Popular Destination Of <br className="hidden sm:block" /> This Year For You
          </h2>
        </div>
        <button className="flex items-center gap-2 text-lg font-bold text-[#1A1A1A] ">
          See more <img src={arrow} alt="Right arrow"  className="mt-1"/>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8 px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`lg:w-[10%] w-fit px-5 py-2 font-[Mulish] rounded-full border text-sm font-bold transition-all duration-200 ${
              active === tab
                ? "bg-[#1F1F1F] text-white border-black"
                : "border-[#1F1F1F] text-[#495560] "
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Destination Card */}
      <div className="relative rounded-2xl md:mb-20 mb-50 shadow-lg w-full mx-auto">
        <img
        src={populardestination}
          alt="Nusa Penida Beach"
          className="w-full h-[380px] md:h-[500px] rounded-lg object-cover -z-10"
        />
        <button className="absolute top-4 right-4 bg-white shadow shadow-[#00000012] rounded-full p-3">
            <img src={wishlist} alt="Favourite" />
        </button>

        {/* Info Box */}
        <div className=" font-[Mulish] absolute md:-bottom-30 bottom-[-16rem] z-10 left-0 right-0 px-6 md:px-10 py-5">
          <div className="bg-[#F9FDFF] rounded-[20px] shadow-md shadow-[#0000001F] p-5 md:p-6">
            <div className="flex md:flex-row flex-col items-end gap-8">
                <div className="md:w-[55%] w-full">
            <h3 className="text-xl md:text-[33px] font-bold text-[#1C2B38] drop-shadow-sm drop-shadow-[#FFFFFF66]">
              Nusa Penida Beach
            </h3>
            <p className="font-[Inter] flex items-center text-[#9999A7] text-[17.32px] mt-1 mb-3">
              <FaMapMarkerAlt className="mr-2 text-[#9999A7]" /> Bali, Indonesia
            </p>
            <p className="font-[Mulish] text-base text-[#778088] font-semibold mb-5 leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
              sunt nostrud amet.
            </p>
</div>
            {/* Category Tags */}
            <div className="md:w-[40%] w-full flex flex-wrap gap-4">
             {categories.map((item, i) => (
                <div className="flex items-center gap-1">
                
               <img src={item.icon} alt={item.text} />
                <p
                  key={i}
                  className="flex items-center justify-center font-[Mulish] text-sm font-bold bg-gray-50 text-[#202020] py-2 px-3 hover:bg-gray-100 transition"
                >

                  {item.text}
                </p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
