import React from 'react'
import { host2, host3 } from '../../assets'

function TourGuide() {
  return (
     <section className="w-full px-6 lg:px-10 py-10 bg-white">
          <div>
          <p className="text-lg text-[#1A1A1A] font-bold font-[Quattrocento]">Tour Guide</p>
          <h2 className="font-[Mulish] text-2xl capitalize md:text-3xl lg:text-[52px] drop-shadow-sm drop-shadow-[#FFFFFF66] font-bold text-[#1C2B38] leading-tight">
            Professional tour guide ready to<br className="hidden sm:block" />Guide your journey
          </h2>
        </div>
        
        <div className="w-full flex flex-col items-center justify-between py-10 px-6 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 gap-5">
        {/* Left Image */}
        <img
  src={host3}
          alt="guide"
          className="w-56 sm:w-64 lg:h-[406px] h-76 md:w-56 rounded-2xl shadow-lg transform rotate-[4deg] hover:rotate-0 transition-all duration-500"
        />

        {/* Center Card */}
        <div className="relative w-56 sm:w-64 lg:h-[406px] h-76 lg:w-76 rounded-2xl -rotate-[4deg] shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500">
          <img
          src={host2}
            alt="travel guide"
            className="w-full  h-full  object-cover opacity-80 "
          />
          <div className="absolute inset-0 bg-black/20 bg-opacity-90 flex flex-col items-center justify-center text-white text-center">
            <h3 className="text-2xl font-semibold">Jovial G</h3>
            <p className="text-sm opacity-90 mt-1">Senior Travel Guide</p>
          </div>
        </div>

        {/* Right Image */}
        <img
        src={host3}
          alt="guide"
          className="w-56 sm:w-64  lg:h-[406px] h-76 md:w-56 rounded-2xl shadow-lg transform rotate-[4deg] hover:rotate-0 transition-all duration-500"
        />
      </div>
    </div>
      
    </section>
  )
}

export default TourGuide
