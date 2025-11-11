import React from 'react'
import { FaStar } from 'react-icons/fa';
import { HiMapPin } from 'react-icons/hi2';

const DiscoverCard = ({ title, country, type, price, reviews, rating, image }) => (
  <div className="font-[Mulish] bg-white border border-[#E5E7EB] p-2 rounded-[20px] shadow-md overflow-hidden hover:shadow-xl transition-all">
    <img src={image} alt={title} className="h-48 w-full object-cover rounded-lg" />
    <div className="p-4">
      <h3 className="text-base font-medium mb-1">{title}</h3>
      <div className='flex justify-between items-center my-2'>
      <p className="text-[#9999A7] text-xs mb-2 flex items-center gap-1 font-[Inter]"> <HiMapPin className='text-lg'/>{country}</p>
              <span className="bg-[#515151] font-[Inter] text-white text-xs px-2 py-1 rounded-sm">{type}</span>
</div>
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
            <div className='flex items-center gap-1'>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-[#1F1F1F] ${i < rating ? "" : "opacity-30"}`}><FaStar/></span>
          ))}
          </div>
                    <span className="text-xs font-semibold text-[#778088] ml-1">{reviews} reviews</span>

        </div>
        <div className="flex justify-between items-center mt-2">
        <span className="flex flex-col text-[#1F1F1F] font-medium font-[Inter] text-xl">{price} <span className="text-xs font-semibold text-[#778088]">per person</span></span>
      </div>
      </div>
      
    </div>
  </div>
);

export default DiscoverCard
