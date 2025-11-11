import React, { useState } from "react";
import {aboutus, destinationCard2, discover1, discover2} from '../../assets'
import DiscoverCard from "./DiscoverCard";

const categories = [
  {
    name: "Stays",
    items: [],
  },
  {
    name: "Experiences",
    items: [],
  },
  {
    name: "Eateries",
    items: [
      {
        title: "Santorini: Oia Sunset Tour",
        country: "Greece",
        type: "Sightseeing",
        price: "$75.00",
        reviews: 210,
        rating: 4,
        image:aboutus
      },
      {
        title: "Kyoto: Arashiyama Bamboo Grove",
        country: "Japan",
        type: "Nature Walk",
        price: "$45.00",
        reviews: 340,
        rating: 5,
        image:discover1
      },
      {
        title: "Machu Picchu: Inca Trail Hike",
        country: "Peru",
        type: "Adventure",
        price: "$120.00",
        reviews: 150,
        rating: 5,
        image:discover2
      },
      {
        title: "Sydney: Harbour Bridge Climb",
        country: "Australia",
        type: "Adventure",
        price: "$100.00",
        reviews: 400,
        rating: 4,
        image:destinationCard2
      },
    ],
  },
  {
    name: "Tours",
    items: [],
  },
];


const DiscoverDestinations = () => {
  const [activeTab, setActiveTab] = useState("Eateries");

  const activeCategory = categories.find((cat) => cat.name === activeTab);

  return (
    <div className="lg:px-20 px-6 py-10">
      <div>
          <p className="text-lg text-[#1A1A1A] font-bold font-[Quattrocento]">Categories</p>
          <h2 className="font-[Mulish] text-2xl md:text-3xl lg:text-[52px] capitalize drop-shadow-sm drop-shadow-[#FFFFFF66] font-bold text-[#1C2B38] leading-tight">
        Discover You Next<br className="hidden sm:block" />Dream Destination
          </h2>
        </div>
      <div className="flex flex-wrap gap-3 mb-10 mt-3">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveTab(cat.name)}
            className={`px-5 py-2 font-bold font-[Mulish] text-sm rounded-full border transition-all ${
              activeTab === cat.name
                ? "bg-[#1F1F1F] text-white"
                : "border-[#1F1F1F] text-[#495560] hover:bg-gray-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {activeCategory.items.length > 0 ? (
          activeCategory.items.map((item, index) => <DiscoverCard key={index} {...item} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No destinations available for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default DiscoverDestinations;
