import React from "react";
import HeroSection from "../components/about/HeroSection";
import DiscoverDestinations from "../components/package/DiscoverDestinations";
import BecomeHost from "../components/destinations/BecomeHost";
import FAQ from "../components/home/FAQ";
import DestinationsPopular from "../components/destinations/DestinationsPopular";
import SuitablePackages from "../components/destinations/SuitablePackages";
import Navbar from "../layout/Navbar";

function Destinations() {
  return (
    <div>
      <Navbar navStyle="bg-gradient-to-b bg-black from-[#04153400] to-[#041534] text-white" />
      <HeroSection title="Destinations" />
      <DestinationsPopular />
      <DiscoverDestinations />
      <BecomeHost />
      <SuitablePackages />
      <FAQ />
    </div>
  );
}

export default Destinations;
