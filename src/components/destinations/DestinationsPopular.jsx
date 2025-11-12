import React, { useRef } from "react";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";
import {discover1, discover2, plan1, populardestination, wishlist} from '../../assets'
import DestinyCard from "./DestinyCard";

const destinations = [
  {
    title: "Nusa Penida Beach",
    location: "Bali, Indonesia",
    image:populardestination
  },
  {
    title: "Nusa Penida Beach",
    location: "Bali, Indonesia",
    image:plan1  },
  {
    title: "Nusa Penida Beach",
    location: "Bali, Indonesia",
    image:discover2
  },
  {
    title: "Nusa Penida Beach",
    location: "Bali, Indonesia",
    image:discover1
  },
];



const PopularDestinations = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollTo =
      direction === "left"
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
    scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  };

  return (
    <div className="w-full  lg:px-20 px-6 py-10">
        <div className="flex items-center justify-between">
       <div className="mb-4">
          <p className="text-lg text-[#1A1A1A] font-bold font-[Quattrocento]">Popular Destination</p>
          <h2 className="font-[Mulish] text-2xl capitalize md:text-3xl lg:text-[52px] drop-shadow-sm drop-shadow-[#FFFFFF66] font-bold text-[#1C2B38] leading-tight">
            Popular Destination of<br className="hidden sm:block" />this year for you
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
          onClick={() => scroll("left")}
          className="bg-white flex items-center justify-center text-[#1C2B38] border border-[#1C2B38] shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <BsChevronLeft size={20} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="bg-[#1F1F1F] flex items-center justify-center  text-white shadow-md rounded-full p-2"
        >
          <BsChevronRight size={20} />
        </button>
        </div>
        </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {destinations.map((item, index) => (
            <div key={index} className="snap-start">
              <DestinyCard {...item} />
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default PopularDestinations;
