import React, { useRef } from "react";
import DiscoverCard from "../package/DiscoverCard";
import { aboutus, destinationCard2, discover1, discover2 } from "../../assets";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const categories = [
  {
    title: "Santorini: Oia Sunset Tour",
    country: "Greece",
    type: "Sightseeing",
    price: "$75.00",
    reviews: 210,
    rating: 4,
    image: aboutus,
  },
  {
    title: "Kyoto: Arashiyama Bamboo Grove",
    country: "Japan",
    type: "Nature Walk",
    price: "$45.00",
    reviews: 340,
    rating: 5,
    image: discover1,
  },
  {
    title: "Machu Picchu: Inca Trail Hike",
    country: "Peru",
    type: "Adventure",
    price: "$120.00",
    reviews: 150,
    rating: 5,
    image: discover2,
  },
  {
    title: "Sydney: Harbour Bridge Climb",
    country: "Australia",
    type: "Adventure",
    price: "$100.00",
    reviews: 400,
    rating: 4,
    image: destinationCard2,
  },
  {
    title: "Kyoto: Arashiyama Bamboo Grove",
    country: "Japan",
    type: "Nature Walk",
    price: "$45.00",
    reviews: 340,
    rating: 5,
    image: discover1,
  },
  {
    title: "Sydney: Harbour Bridge Climb",
    country: "Australia",
    type: "Adventure",
    price: "$100.00",
    reviews: 400,
    rating: 4,
    image: destinationCard2,
  },
];

export default function FamousPlaces(props) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full px-4 md:px-10 py-6">
      <div className="font-[Mulish] flex justify-between items-center mb-4">
        <h2 className={`${!props.title.includes("Famous")?"rounded-full border border-[#1F1F1F] text-[#495560] px-4 py-2 text-center font-bold text-sm":"font-[Inter] text-xl md:text-2xl font-medium text-black"} `}>{props.title}</h2>

        <div className="flex items-center gap-3">
          <button
           onClick={scrollLeft}
            className="bg-white flex items-center justify-center text-[#1C2B38] border border-[#1C2B38] shadow-md rounded-full p-2 hover:bg-gray-100"
          >
            <BsChevronLeft size={20} />
          </button>
          <button
             onClick={scrollRight}
            className="bg-[#1F1F1F] flex items-center justify-center  text-white shadow-md rounded-full p-2"
          >
            <BsChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-scroll no-scrollbar scroll-smooth"
      >
        {/* Example Cards (Replace these with your actual card component) */}
        {categories.length > 0 &&
          categories.map((item, index) => (
            <DiscoverCard key={index} {...item} />
          ))}
      </div>
    </div>
  );
}
