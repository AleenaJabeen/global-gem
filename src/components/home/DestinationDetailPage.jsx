import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  detail1,
  detail2,
  detail3,
  host3,
  calendarIcon,
  checkInIcon,
  cleanIcon,
  homeIcon,
  person2,
  send,
  info,
  flag,
} from "../../assets";
import { HiMiniMapPin } from "react-icons/hi2";
import Description from "./Description";
import { MdOutlineVerifiedUser } from "react-icons/md";
import CustomerReviews from "./CustomerReviews";
import Map from "./Map";
import FamousPlaces from "./FamousPlaces";
import Navbar from '../../layout/Navbar'

export default function DestinationDetailPage() {
  const navigate = useNavigate();
   const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const pricePerPerson = 75;

  // **Fixed charges**
  const discount = 28;
  const cleaningFee = 62;
  const serviceFee = 83;
  const taxes = 29;

  // **Dynamic calculation**
  const totalPeople = adults + children;
  const basePrice = totalPeople * pricePerPerson;

  const total =
    basePrice - discount + cleaningFee + serviceFee + taxes;


  return (
    <>
    <Navbar navStyle="text-[#1C1C1E] bg-white" buttonBg="bg-[#1C1C1E] text-[#F2F2F7]"/>
    <div className="font-[Mulish] bg-white min-h-screen flex flex-col items-center px-6 py-10 lg:px-16">
      <div className="w-full">
        {/* <button
          onClick={() => navigate(-1)}
          className="mb-4 text-gray-600 hover:text-black"
        >
          ← Back
        </button> */}

        <h1 className="font-[Mulish] text-[33px] md:text-4xl font-medium mb-2">
          Hidden Waterfalls of Ubud
        </h1>
        <div className="flex items-center text-black font-medium mb-4 text-sm md:text-base">
          <IoIosStar className="text-black" />
          <span className="ml-1">
            4.8 · <span className="underline">7 reviews</span> ·
          </span>
          <HiMiniMapPin className="mx-1 text-black" />
          <span className="underline">Ubud,Bali</span>
        </div>

        {/* Images */}
        <div className="flex md:flex-row flex-col items-start gap-4 mb-8">
          {/* Column 1 */}

          <div className="md:w-[72%]  w-full gap-2 flex flex-col">
            {/* Detail start images */}

            <div className="flex items-stretch gap-2">
              <div className="w-[60%]">
                <img
                  src={detail1}
                  alt="Main"
                  className="w-full h-full rounded-xl object-cover col-span-1 md:col-span-1"
                />
              </div>
              <div className="flex justify-between items-between  w-[40%] gap-3 flex-col h-full">
                <img
                  src={detail2}
                  alt="1"
                  className="w-full  h-[50%]  object-cover rounded-xl"
                />
                <img
                  src={detail3}
                  alt="2"
                  className="w-full   h-[50%]  object-cover rounded-xl"
                />
              </div>
            </div>
            {/* Details + Booking */}
            <div className="flex items-center  gap-8 mt-4">
              {/* Left Section */}
              <div className="w-full">
                <div className="w-full flex lg:flex-row flex-col justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={host3}
                      alt="host"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex items-center gap-16 font-[Inter]">
                      <div>
                        <h2 className="font-medium text-2xl text-black ">
                          Wayan Suta
                        </h2>
                        <p className="text-[#6B7280] text-sm">
                          Joined May 2021
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pl-6">
                      <img src={person2} alt="User icon" />
                      <img src={send} alt="Send icon" className="w-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-[#6B7280] font-[Mulish] text-sm">
                    <div className="flex items-center gap-1">
                      <h3 className="flex items-center gap-1">
                        {" "}
                        <MdOutlineVerifiedUser className="text-xl text-[#00C48C]" />
                        Verified Guide
                      </h3>
                      <h3 className="flex items-center gap-1">
                        {" "}
                        <IoIosStar className="text-xl text-[#FFB906]" /> 167
                        reviews
                      </h3>
                    </div>
                    <div className="flex items-center lg:justify-end gap-2 text-[10px] font-[Inter] text-white">
                      <p className="bg-[#515151]  rounded-[5.5px]  py-1 px-4 text-center">
                        English
                      </p>
                      <p className="bg-[#515151]  rounded-[5.5px] px-4 py-1 text-center">
                        Indonesian
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-4">
                  <div className="flex items-start gap-3">
                    <img src={homeIcon} alt="Home Icon" />
                    <div className="font-[Mulish] flex flex-col">
                      <p className="text-black text-base font-medium">
                        Entire home
                      </p>
                      <p className="text-[#6B7280] text-sm">
                        You’ll have the apartment to yourself
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src={checkInIcon} alt="checkin Icon" />
                    <div className="font-[Mulish] flex flex-col">
                      <p className="text-black text-base font-medium">
                        Self check-in
                      </p>
                      <p className="text-[#6B7280] text-sm">
                        Check yourself in with the keypad.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src={cleanIcon} alt="Clean Icon" />
                    <div className="font-[Mulish] flex flex-col">
                      <p className="text-black text-base font-medium">
                        Enhanced Clean
                      </p>
                      <p className="text-[#6B7280] text-sm">
                        This Host committed to Airbnb’s 5-step enhanced cleaning
                        process. Show more
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src={calendarIcon} alt="Calendar Icon" />
                    <div className="font-[Mulish] flex flex-col">
                      <p className="text-black text-base font-medium">
                        Free cancellation before Feb 14
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="md:w-[30%] w-full">
           <div className="font-[Mulish] border border-[#E5E7EB] rounded-md shadow-lg p-5 h-fit">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl text-black font-bold">
          <span className="border-b border-b-2">$75 / </span>
          <span className="text-[#6B7280] font-normal text-sm">person</span>
        </h3>

        <div className="flex items-center text-black">
          <IoIosStar />
          <span className="text-base font-medium ml-1">
            4.8 .<span className="border-b border-b-2">7 reviews</span>
          </span>
        </div>
      </div>

      {/* Input Section */}
      <div className="font-[Mulish] flex flex-col border border-[#D1D5DB] rounded-md mb-3">
        <div className="w-full flex items-center justify-between gap-2 border-b border-[#D1D5DB] pr-2 px-2">
          <div className="w-1/2 flex flex-col border-r border-[#D1D5DB]">
            <span className="py-1 text-xs text-black font-bold">From:</span>
            <input
              type="date"
              className="w-full text-[#6B7280] text-sm focus:outline-none appearance-none"
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <span className="py-1 text-xs text-black font-bold">To:</span>
            <input
              type="date"
              className="w-full text-[#6B7280] text-sm focus:outline-none appearance-none"
            />
          </div>
        </div>

        {/* Adults & Children */}
        <div className="w-full flex items-center justify-between gap-2 pr-2 px-2">
          <div className="w-1/2 flex flex-col border-r border-[#D1D5DB]">
            <span className="py-1 text-xs text-black font-bold">Adults</span>
            <input
              type="number"
              value={adults}
              min={0}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full text-[#6B7280] text-sm focus:outline-none appearance-none"
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <span className="py-1 text-xs text-black font-bold">Children</span>
            <input
              type="number"
              value={children}
              min={0}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="w-full text-[#6B7280] text-sm focus:outline-none appearance-none"
            />
          </div>
        </div>
      </div>

      <button className="w-full bg-black text-white text-sm py-3 my-5 rounded-full font-medium font-[Inter] hover:bg-gray-900">
        Book Now
      </button>

      {/* Price Breakdown */}
      <p className="text-sm text-[#6B7280] font-[Mulish] mb-2">You won’t be charged yet</p>

      <div className="font-[Mulish] text-black flex justify-between text-base mb-2">
        <span>${pricePerPerson} × {totalPeople} people</span>
        <span>${basePrice}</span>
      </div>

      <div className="font-[Mulish] text-black flex justify-between text-base mb-2">
        <span>Discount</span>
        <span className="text-[#00C48C]">-${discount}</span>
      </div>

      <div className="font-[Mulish] text-black flex justify-between text-base mb-2">
        <span>Cleaning fee</span>
        <span>${cleaningFee}</span>
      </div>

      <div className="font-[Mulish] text-black flex justify-between text-base mb-2">
        <span>Service fee</span>
        <span>${serviceFee}</span>
      </div>

      <div className="font-[Mulish] text-black flex justify-between text-base mb-5">
        <span>Taxes & fees</span>
        <span>${taxes}</span>
      </div>

      <hr className="my-2 text-[#E5E7EB] mb-4" />

      <div className="font-[Mulish] flex justify-between font-bold text-[#1C2B38] mb-2">
        <span>Total</span>
        <span>${total}</span>
      </div>
    </div>
          <div className="flex mt-2  items-center justify-center text-[#6B7280] underline text-sm font-[Mulish]"><img src={flag} alt="Flag" />Report this listing</div>
          </div>
        </div>
        <div className="md:w-[72%] w-full">
          <hr className="w-full text-[#CEDADF] mt-2 mb-4" />
          {/* Description plus Activities */}
          <Description />
        </div>
        <hr className="w-full text-[#CEDADF] mt-2 mb-4" />
        <Map />
        <hr className="w-full text-[#CEDADF] mt-2 mb-4" />
        <FamousPlaces title="Famous in Bali" />
        <hr className="w-full text-[#CEDADF] mt-2 mb-4" />
        <CustomerReviews />
      </div>
    </div>
    </>
  );
}
