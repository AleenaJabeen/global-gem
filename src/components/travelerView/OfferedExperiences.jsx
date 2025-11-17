import React, { useState } from "react";
import {
  aboutus,
  arrow,
  destinationCard2,
  discover1,
  discover2,
} from "../../assets";
import DiscoverCard from "../package/DiscoverCard";

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
 
];

const OfferedExperiences = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mt-12 mb-4">
        <h2 className="font-[Mulish] text-2xl capitalize drop-shadow-sm drop-shadow-[#FFFFFF66] font-bold text-[#1C2B38] leading-tight">
          Offered Experiences
        </h2>
        <button className="flex items-center self-start gap-2 text-lg font-bold text-[#1A1A1A] ">
          See more <img src={arrow} alt="Right arrow" className="mt-1" />
        </button>
      </div>
     

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.length > 0 ? (
          categories.map((item, index) => (
            <DiscoverCard key={index} {...item} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No destinations available for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default OfferedExperiences;
