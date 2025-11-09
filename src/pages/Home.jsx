import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AppDownloadSection from '../components/home/AppDownloadSection'
import FAQ from '../components/home/FAQ'
import BecomeAHost from '../components/home/BecomeAHost'

function Home() {
  return (
    <div>
        <HeroSection/>
        <BecomeAHost/>
        <AppDownloadSection/>
        <FAQ/>
      
    </div>
  )
}

export default Home
