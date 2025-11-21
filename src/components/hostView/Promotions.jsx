import React from "react";
import { arrow, booking, mastercard2 } from "../../assets";
import { HiMiniMapPin } from "react-icons/hi2";
import { BiCalendar } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";

export default function Promotions() {
  const [promotionData, setPromotionData] = React.useState({
    category: "Beach",
    title: "Whispering Pines",
    location: "Solo Raya, Surakata, Jawa Tengah",
    from: "2025-04-22",
    to: "2025-04-22",
    price: 30,
    serviceFee: 0,
  });

  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="w-full  space-y-6">

        {/* PROMOTION CARD */}
        <div className="relative bg-[#F6F6F6] rounded-[15px] flex md:flex-row flex-col md:justify-between md:items-center p-3">
          <div className="flex sm:flex-row flex-col sm:items-center gap-3">
            <img
              src={booking}
              alt="booking"
              className="w-full sm:w-40 sm:h-[116px] h-40 rounded-lg object-cover"
            />

            <div className="flex flex-col font-[Mulish]">
              <span className="w-fit text-sm bg-[#515151] text-white px-2 py-1 rounded">
                {promotionData.category}
              </span>

              <h2 className="font-medium text-[#1C1C1E] text-xl">
                {promotionData.title}
              </h2>

              <p className="text-sm text-[#9999A7] flex items-center gap-1">
                <HiMiniMapPin size={16} />
                {promotionData.location}
              </p>

              <p className="flex items-center gap-1 text-[#9999A7] text-xs font-medium">
                <BiCalendar />
                {promotionData.to}
                <img src={arrow} alt="Arrow" />
                {promotionData.from}
              </p>
            </div>
          </div>

          <div className="absolute sm:top-6 top-54 right-4 font-[Inter] flex flex-col items-end gap-6 mt-6">
            <p className="font-semibold text-sm text-[#1F1F1F] flex items-center -mt-4">
              ${promotionData.price}
              <span className="font-normal text-xs text-[#9999A7]">/day</span>
            </p>
          </div>
        </div>

        <div className="my-2" />
           {/* Promotion Type */}
        <div className="font-[Inter]">
          <label className="block text-base text-[#1C1C1E] font-semibold  mb-2">Promotion Type</label>
          <div className="sm:w-[30%] w-full  bg-[#F2F2F7] rounded-[15px] p-3">
          <select className="w-full bg-[#F2F2F7] text-base text-[#9999A7] rounded-[15px] focus:outline-none">
            <option>Boost Visibility</option>
            <option>Maximize Bookings</option>
            <option>Seasonal Promotion</option>
          </select>
          </div>
        </div>
         {/* Target Audience */}
        <div className="font-[Inter]">
          <label className="block text-base text-[#1C1C1E] font-semibold mb-2">Target Audience</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div  className="bg-[#F2F2F7] rounded-[15px] p-3">
            <select className="w-full bg-[#F2F2F7] text-base text-[#9999A7] rounded-[15px] focus:outline-none">
              <option>Traveler Interests</option>
            </select>
            </div>
             <div  className=" bg-[#F2F2F7] rounded-[15px] p-3">
            <select className="w-full bg-[#F2F2F7] text-base text-[#9999A7] rounded-[15px] focus:outline-none">
              <option>Location Targeting</option>
            </select>
            </div>
             <div  className="bg-[#F2F2F7] rounded-[15px] p-3">
            <select className="w-full bg-[#F2F2F7] text-base text-[#9999A7] rounded-[15px] focus:outline-none">
              <option>Language Preferences</option>
            </select>
            </div>
          </div>
        </div>
        {/* Duration */}
        <div className="font-[Inter]">
          <label className="block text-base text-[#1C1C1E] font-semibold mb-2">Duration</label>
          <div className="flex items-center justify-between border border-[#E5E5EA] rounded-[15px] p-2 gap-4 items-center">
            <div>
              <label className="text-[13px] text-[#1C1C1E] font-medium">To</label>
              <input
                type="date"
                value={promotionData.to}
                onChange={(e) => setPromotionData({ ...promotionData, to: e.target.value })}
                className="w-full  text-sm font-medium text-[#9999A7] p-1 appearance-none focus:outline-none"
              />
            </div>
        <GoArrowRight className="text-[#1C1C1E] text-xl" />

            <div>
              <label className="text-[13px] text-[#1C1C1E] font-medium">From</label>
              <input
                type="date"
                value={promotionData.from}
                onChange={(e) => setPromotionData({ ...promotionData, from: e.target.value })}
                className="w-full text-sm font-medium text-[#9999A7] p-1 appearance-none focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Budget + Payment */}
        <div className="font-[Inter] flex sm:flex-row flex-col gap-4 items-stretch">
          <div className="sm:w-1/2 w-full h-full">
            <label className="block text-base text-[#1C1C1E] font-semibold mb-2">Budget</label>
            <input
              type="text"
              value={`$${promotionData.price}/Per Day`}
              readOnly
              className="w-full bg-[#F2F2F7] text-base text-[#9999A7]  rounded-[15px] p-3 focus:outline-none "
            />
          </div>

          <div  className="sm:w-1/2 w-full h-full" >
            <label className="block text-base text-[#1C1C1E] font-semibold  mb-2">Payment Method</label>
            <div className="flex items-center justify-between bg-[#F2F2F7] rounded-[15px] p-3">
              <div className="flex items-center space-x-3">
               <img src={mastercard2} alt="Mastercard" />
                <span className="text-[13px] text-[#9999A7] font-medium">XXXX XXXX 0908 <br /> Emmie</span>
              </div>
              <button className="text-[13px] text-[#9999A7] font-medium">Change</button>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between font-[Inter] text-base text-[#1C1C1E] font-semibold  pt-4">
          <span>Total</span>
          <span>${promotionData.price}</span>
        </div>

        <div className="flex justify-between font-[Inter]  text-base text-[#9999A7] font-semibold -mt-6">
          <span>Service Fee</span>
          <span>${promotionData.serviceFee}</span>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-full text-lg font-medium mt-4">
          Launch Promotion
        </button>
      </div>
    </div>
  );
}
