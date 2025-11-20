import React from "react";
import HeroSection from "../components/about/HeroSection";
import TravelStatsSection from "../components/about/TravelStateSection";
import BecomeHost from "../components/destinations/BecomeHost";
import TourGuide from "../components/about/TourGuide";
import FAQ from "../components/home/FAQ";
import Navbar from "../layout/Navbar";

function About() {
  return (
    <div>
      <Navbar navStyle="bg-black text-white"  />
      <HeroSection title="About Us" />
      <TravelStatsSection />
      <BecomeHost />
      <TourGuide />
      <FAQ />
    </div>
  );
}

export default About;
