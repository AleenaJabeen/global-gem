import React from "react";
import FamousPlaces from "./home/FamousPlaces";
import { useLocation } from "react-router-dom";
import Navbar from "../layout/Navbar";


function CityListing() {
   const { search } = useLocation();
  const query = new URLSearchParams(search).get("search");
  return (
    <>
        <Navbar navStyle="text-[#1C1C1E] bg-white" buttonBg="bg-[#1C1C1E] text-[#F2F2F7]"/>
    
    <div className="px-6 pt-4 lg:px-16">
      <h2 className="md:text-2xl text-xl font-medium font-[Inter] text-black">
        Explore More in Bali
      </h2>
            <hr className="w-full text-[#CEDADF] mt-4" />

      </div>
      <div className="px-4">
      <FamousPlaces title="Experiences" />
      <FamousPlaces title="Tours" />
      <FamousPlaces title="Stays" />
      </div>
    
    </>
  );
}

export default CityListing;
