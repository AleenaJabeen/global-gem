import React from 'react'
import { arrow } from '../../assets'
import PlanWrapper from '../home/PlanWrapper'

function SuitablePackages() {
  return (
     <div className="w-full h-full bg-white py-10 px-4 md:px-12 lg:px-16">
          {/* Header */}
          <div className="flex items-center md:flex-row flex-col md:justify-between mb-8">
            <div>
              <p className="text-lg  font-[Quattrocento] text-[#1A1A1A] font-bold ">Package</p>
              <h2 className="font-[Mulish] text-2xl capitalize md:text-3xl lg:text-[52px] drop-shadow-sm drop-shadow-[#FFFFFF66] font-bold text-[#1C2B38] leading-tight">
               We provide a choice of<br className="hidden sm:block" />packages Suitable for you
              </h2>
            </div>
            <button className="flex items-center self-start gap-2 text-lg font-bold text-[#1A1A1A] ">
              See more <img src={arrow} alt="Right arrow"  className="mt-1"/>
            </button>
          </div>
          <PlanWrapper/>
    </div>
  )
}

export default SuitablePackages
