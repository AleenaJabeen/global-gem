import React from "react";
import HeroSection from "../components/about/HeroSection";
import DestinationCard from "../components/package/DestinationCard";
import DestinationCard2 from "../components/package/DestinationCard2";
import PopularPackages from "../components/package/PopularPackages";
import FAQ from "../components/home/FAQ";
import DiscoverDestinations from "../components/package/DiscoverDestinations";
import Navbar from "../layout/Navbar";

function Package() {
  return (
    <div>
      <Navbar navStyle="bg-gradient-to-r bg-black from-[#04153400] to-[#041534] text-white" />
      <HeroSection title="Packages" />
      <DestinationCard />
      <DestinationCard2 />
      <PopularPackages />
      <DiscoverDestinations />
      <FAQ />
    </div>
  );
}

export default Package;
