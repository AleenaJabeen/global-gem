import React from 'react'
import HeroSection from '../components/about/HeroSection'
import DiscoverDestinations from '../components/package/DiscoverDestinations'
import BecomeAHost from '../components/home/BecomeAHost';
import FAQ from '../components/home/FAQ'

function Destinations() {
  return (
    <div>
        <HeroSection title="Destinations"/>
        <DiscoverDestinations/>
        <BecomeAHost/>
        <FAQ/>
      
    </div>
  )
}

export default Destinations
