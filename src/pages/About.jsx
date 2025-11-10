import React from 'react'
import HeroSection from '../components/about/HeroSection'
import TravelStatsSection from '../components/about/TravelStateSection'
import BecomeAHost from '../components/home/BecomeAHost'
import TourGuide from '../components/about/TourGuide'
import FAQ from '../components/home/FAQ'

function About() {
  return (
    <div>
      <HeroSection title="About Us"/>
      <TravelStatsSection/>
      <BecomeAHost/>
      <TourGuide/>
      <FAQ/>
      
    </div>
  )
}

export default About
