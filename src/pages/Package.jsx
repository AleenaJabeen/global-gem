import React from 'react'
import HeroSection from '../components/about/HeroSection'
import DestinationCard from '../components/package/DestinationCard'
import DestinationCard2 from '../components/package/DestinationCard2'
import PopularPackages from '../components/package/PopularPackages';
import FAQ from '../components/home/FAQ';
import DiscoverDestinations from '../components/package/DiscoverDestinations';

function Package() {
  return (
    <div>
      <HeroSection title="Packages"/>
      <DestinationCard/>
      <DestinationCard2/>
      <PopularPackages/>
      <DiscoverDestinations/>
      <FAQ/>
    </div>
  )
}

export default Package
