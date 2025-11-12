import React from 'react'
import HeroSection from '../components/about/HeroSection'
import DiscoverDestinations from '../components/package/DiscoverDestinations'
import BecomeHost from '../components/destinations/BecomeHost';
import FAQ from '../components/home/FAQ';
import DestinationsPopular from '../components/destinations/DestinationsPopular'
import SuitablePackages from '../components/destinations/SuitablePackages';

function Destinations() {
  return (
    <div>
        <HeroSection title="Destinations"/>
        <DestinationsPopular/>
        <DiscoverDestinations/>
        <BecomeHost/>
        <SuitablePackages/>
        <FAQ/>
      
    </div>
  )
}

export default Destinations
