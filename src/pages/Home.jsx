import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AppDownloadSection from '../components/home/AppDownloadSection'
import FAQ from '../components/home/FAQ'
import BecomeAHost from '../components/home/BecomeAHost'
import PlansWrapper from '../components/home/PlanWrapper'
import PopularDestination from '../components/home/PopularDestinations'
import Navbar from '../layout/Navbar'

function Home() {
  return (
    <div>
      <Navbar navStyle="bg-gradient-to-r bg-black from-[#04153400] to-[#041534] text-white"/>
        <HeroSection/>
        <PopularDestination/>
        <PlansWrapper/>
        <BecomeAHost/>
        <AppDownloadSection/>
        <FAQ/>
      
    </div>
  )
}

export default Home
