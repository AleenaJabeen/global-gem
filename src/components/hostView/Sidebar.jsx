import React, { useState } from "react";
import { cake, experience, host3 } from "../../assets";
import { MdEdit, MdOutlineVerifiedUser } from "react-icons/md";
import { BsGeoAltFill } from "react-icons/bs";
import { BiSolidMap } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";

export const Sidebar = ({ active, setActive, enterPage, form }) => {
  const menu = [
    { id: "profile", label: "Profile Information" },
    { id: "booking", label: "Booking History" },
    { id: "listing", label: "My Listing" },
    { id: "promotions", label: "Promotions" },
    { id: "analytics", label: "Analytics" },
  ];

  return (
<div className="w-full bg-white h-full border-r-2 pr-2 border-[#F4F4F5] py-5 px-8 flex flex-col overflow-y-auto no-scrollbar">
      <div className="flex flex-col md:items-center">
        <div className="relative self-center">
          <img
            src={host3}
            className="md:w-[120px] md:h-[120px] h-24 w-24 rounded-full"
          />
          <span className="absolute bottom-2 right-1 flex w-8 h-8 items-center justify-center p-1 rounded-full border-[2px] border-white bg-[#1F1F1F]">
            <MdEdit className="text-white text-lg" />
          </span>
        </div>
        <h2 className="font-[Mulish] text-[#1C2B38] mt-1 font-semibold md:text-2xl text-xl">
          {form.name}
        </h2>
        <div className="flex flex-col">
        
        <div className="font-[Inter] flex-wrap flex items-center gap-2 mb-3">
          <h3 className="flex items-center gap-2 text-[#1C1C1E]">
            <MdOutlineVerifiedUser className="text-xl text-[#00C48C]" />
            Verified
          </h3>
          <h3 className="flex items-center gap-2 text-[#9999A7]">
            <IoIosStar className="text-xl text-[#1F1F1F]" />
            <span className="text-[#1C1C1E]">4.6</span>(167 reviews)
          </h3>
        </div>
        <div className="font-[Inter] flex-wrap flex items-center gap-4 mb-3">
          <p className="flex items-center gap-1 text-[#1C1C1E] text-sm font-semibold">
            <BiSolidMap />
            Ubud,Bali
          </p>
          <p className="flex items-center gap-1 text-[#1C1C1E] text-sm font-semibold">
            <img src={experience} alt="Experience" />
            6+ Years of exp
          </p>
        </div>
        <h3 className="font-[Inter] text-[#1C1C1E] text-base font-semibold mb-3">
          Specialties
        </h3>
        <div className="flex items-center flex-wrap  gap-2 text-[13px] font-[Inter] text-white mb-3">
          <p className="bg-[#515151]  rounded-[5.5px]  py-1 px-4 text-center">
            Beach
          </p>
          <p className="bg-[#515151]  rounded-[5.5px] px-4 py-1 text-center">
            Food
          </p>
          <p className="bg-[#515151]  rounded-[5.5px] px-4 py-1 text-center">
            Spa
          </p>
        </div>
        <h3 className="font-[Inter] flex-wrap text-[#1C1C1E] text-base font-semibold mb-2">
          Languages Spoken
        </h3>
        <div className="flex items-center  gap-2 text-[13px] font-[Inter] text-white">
          <p className="bg-[#515151]  rounded-[5.5px]  py-1 px-4 text-center">
            English
          </p>
          <p className="bg-[#515151]  rounded-[5.5px] px-4 py-1 text-center">
            Indonesian
          </p>
        </div>
        </div>
      </div>

      <div className="w-[90%] mt-6 flex flex-col gap-2">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => enterPage(item.id)}
            className={`py-4 pl-4  text-nowrap  font-[Mulish] font-bold text-base rounded-tl-full rounded-bl-full text-left text-sm transition ${
              active === item.id
                ? "bg-[#1F1F1F] text-white"
                : "hover:bg-gray-100 text-[#1C2B38]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};
