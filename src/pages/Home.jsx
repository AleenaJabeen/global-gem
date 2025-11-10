import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AppDownloadSection from '../components/home/AppDownloadSection'
import FAQ from '../components/home/FAQ'
import BecomeAHost from '../components/home/BecomeAHost'
import PlansWrapper from '../components/home/PlanWrapper'
import PopularDestination from '../components/home/PopularDestinations'

function Home() {
  return (
    <div>
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
