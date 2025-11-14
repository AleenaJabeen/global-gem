import React from "react";
import FamousPlaces from "./home/FamousPlaces";



function CityListing() {
  return (
    <div>
      <h2 className="md:text-2xl text-xl font-medium font-[Inter] text-black">
        Explore More in Bali
      </h2>
      <hr className="w-full text-[#CEDADF] mt-2 mb-4" />
      <FamousPlaces title="Experiences" />
      <FamousPlaces title="Tours" />
      <FamousPlaces title="Stays" />
    </div>
  );
}

export default CityListing;
