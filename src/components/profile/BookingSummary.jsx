import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMiniMapPin } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import Navbar from "../../layout/Navbar";
import { RiVisaLine } from "react-icons/ri";
import {
  applePay2,
  editBtn,
  googlePay,
  host3,
  mastercard2,
} from "../../assets";
import { MdOutlineVerifiedUser } from "react-icons/md";
import BookingSuccessful from "./BookingSuccessful";

export default function BookingSummary() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [confirmPay, setConfirmPay] = useState(false);

  const handleSubmit = (e) => {
    setConfirmPay(true);
  };
  useEffect(() => {
    let timer;
    if (confirmPay) {
      timer = setTimeout(() => {
        setConfirmPay(false);
        navigate("/");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [confirmPay]);

  if (!state) return <div className="p-6">No booking data found.</div>;

  const {
    title,
    category,
    location,
    image,
    from,
    to,
    adults,
    children,
    pricePerPerson,
    discount,
    cleaningFee,
    serviceFee,
    taxes,
    total,
    host,
    userEmail,
  } = state;

  const totalPeople = adults + children;
  const basePrice = totalPeople * pricePerPerson;

  // --- Add these states at top inside BookingSummary component ---
  const [isEditingContact, setIsEditingContact] = React.useState(false);
  const [email, setEmail] = React.useState(userEmail);

  const [isEditingDetails, setIsEditingDetails] = React.useState(false);

  const [fromDate, setFromDate] = React.useState(from);
  const [toDate, setToDate] = React.useState(to);
  const [adultCount, setAdultCount] = React.useState(adults);
  const [childCount, setChildCount] = React.useState(children);

  return (
    <>
      <Navbar
        navStyle="text-[#1C1C1E] bg-white"
        buttonBg="bg-[#1C1C1E] text-[#F2F2F7]"
      />
      <div className="font-[Mulish] w-full min-h-screen bg-white px-4 lg:px-16 py-10 font-[Mulish]">
        <h1 className="text-2xl md:text-3xl font-medium text-black  mb-6">
          Booking Summary
        </h1>

        <div className="flex lg:flex-row flex-col lg:gap-16  gap-6">
          {/* LEFT SECTION */}
          <div className="lg:w-[56%] w-full flex flex-col gap-6">
            {/* CONTACT INFORMATION */}
            <div className="border border-[#E5E7EB] rounded-[20px] p-5 shadow-sm">
              <div className="flex justify-between">
                <h2 className="font-bold text-xl text-[#0F172A] flex items-center gap-2">
                  <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#7A7A7A2E]">
                    1
                  </span>
                  Contact Information
                </h2>

                <button
                  onClick={() => setIsEditingContact(!isEditingContact)}
                  className="border border-[#CBD5E1] rounded-[8px] text-[#7A7A7A] font-medium px-4 text-sm"
                >
                  {isEditingContact ? "Save" : "Edit"}
                </button>
              </div>

              {!isEditingContact ? (
                <p className="mt-1 text-lg font-medium pl-12 text-[#7A7A7A]">
                  {email}
                </p>
              ) : (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-3 ml-12  text-[#7A7A7A]  rounded-[10px] px-4 py-2 focus:outline-none text-base w-[70%]"
                />
              )}
            </div>

            {/* PAYMENT METHOD */}
            <div className="border  border-[#E5E7EB] rounded-[20px] p-5 shadow-md shadow-[#00000026]">
              <h2 className="font-bold text-xl font-bold text-[#0F172A] flex items-center gap-2">
                <span className="w-[40px] h-[40px] text-base font-[SF_Pro_Display] font-bold rounded-full flex justify-center items-center bg-[#7A7A7A2E]">
                  2
                </span>{" "}
                Payment Method
              </h2>

              <p className="text-base font-medium text-black pl-12  mb-2 font-[Inter]">
                Choose Type
              </p>

              <div className="lg:w-[80%] w-full mx-auto flex  flex-wrap gap-8 mb-5 pl-14">
                <span className="flex justify-center px-2 items-center border border-[#EFEFF4] rounded-[8px] text-[#172B85]">
                  <RiVisaLine size={36} />
                </span>
                <span className="flex justify-center px-2 items-center border border-[#EFEFF4] rounded-[8px] ">
                  <img src={mastercard2} />
                </span>
                <span className="flex justify-center px-2 items-center border border-[#EFEFF4] rounded-[8px] ">
                  <img src={googlePay} />
                </span>
                <span className="flex justify-center px-2 items-center border border-[#EFEFF4] rounded-[8px] ">
                  <img src={applePay2} alt="Apple Pay" />
                </span>
              </div>
              <p className="text-base font-medium text-black pl-12  mb-2 font-[Inter]">
                Card Details
              </p>

              <div className="flex flex-col gap-3 pl-12 text-[#9999A7] font-[Inter] text-base">
                <input
                  type="text"
                  className="bg-[#F2F2F7] rounded-[10px]  px-4 py-2 text-sm focus:outline-none"
                  placeholder="Name on Card"
                />
                <input
                  type="text"
                  className="bg-[#F2F2F7] rounded-[10px] px-4 py-2 text-sm focus:outline-none"
                  placeholder="Card Number"
                />
                <div className="flex sm:flex-row flex-col  gap-3">
                  <input
                    type="text"
                    className="bg-[#F2F2F7] rounded-[10px] px-4 py-2 text-sm sm:w-1/2 w-full focus:outline-none"
                    placeholder="MM/YY"
                  />
                  <input
                    type="text"
                    className="bg-[#F2F2F7] rounded-[10px] px-4 py-2 text-sm sm:w-1/2 w-full focus:outline-none"
                    placeholder="CVC"
                  />
                </div>
              </div>
              <div className="md:w-[50%] w-[80%] mx-auto ">
                <button className="w-full bg-[#9999A7] sm:text-lg text-base font-bold font-[Inter] text-white rounded-full md:py-3 py-2 mt-5">
                  Save Card
                </button>
              </div>
              <div className="text-center text-[#8A8A8F] text-xs font-[Inter] mt-2">
                By providing your credit cards details, you agree to <br />
                GolbaGem{" "}
                <span className="text-black underline">
                  Terms and Conditions{" "}
                </span>
              </div>
            </div>

            {/* HOST DETAILS */}
            <div className="border  border-[#E5E7EB] rounded-[20px] p-5 shadow-md shadow-[#00000026]">
              <div className="flex-1">
                <h2 className="font-bold text-xl font-bold text-[#0F172A] flex items-center gap-2">
                  <span className="w-[40px] h-[40px] text-base font-[SF_Pro_Display] font-bold rounded-full flex justify-center items-center bg-[#7A7A7A2E]">
                    3
                  </span>{" "}
                  Host Details
                </h2>

                <div className="flex gap-2 pl-12 mt-2">
                  <img
                    src={host3}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-md">{host.name}</h3>
                    <div className="flex gap-2 mt-1">
                      {host.languages.map((lang, i) => (
                        <span
                          key={i}
                          className="bg-[#515151] text-white font-[Inter] px-3 py-1 text-sm rounded"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 pl-12 text-[#9999A7] py-4">
                  <h3 className="flex items-center gap-1 text-xs">
                    <MdOutlineVerifiedUser className="text-lg text-[#00C48C]" />
                    Verified Guide
                  </h3>
                  <h3 className="text-xs flex items-center gap-1">
                    <IoIosStar className="text-lg text-[#1F1F1F]" />
                    {host.reviews} reviews
                  </h3>
                </div>

                <div className="md:w-[70%] w-full flex gap-3 mt-3">
                  <Link to="/inbox" className="w-1/2  flex items-center justify-center bg-[#9999A7] font-bold text-xs text-white  px-4 py-3 rounded-full">
                    Chat
                  </Link>
                  <Link to="/view-profile" className="w-1/2 flex items-center justify-center border border-[#1F1F1F] font-[Inter] text-[#1F1F1F] font-bold text-xs px-4 py-3 rounded-full">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION (BOOKING CARD) */}
          <div className="lg:w-[42%] h-fit bg-white">
            {/* PLACE INFO */}
            <div className="relative flex bg-[#F6F6F6] gap-4 mb-4 p-2 rounded-xl">
              <img src={image} className="w-24 h-20 rounded-xl object-cover" />
              <img
                src={editBtn}
                alt="Edit Btn"
                className="absolute top-2 right-3"
              />

              <div>
                <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded">
                  {category}
                </span>

                <h3 className="font-bold text-lg mt-1">{title}</h3>

                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <HiMiniMapPin /> {location}
                </p>
              </div>
            </div>

            <div className="border  border-[#E5E7EB] rounded-lg p-5 shadow-md shadow-[#00000026]">
              <h3 className="text-xl font-bold mb-3">
                ${pricePerPerson}
                <span className="text-sm text-gray-500"> / person</span>
              </h3>

              {/* Input Section */}
              <div className="font-[Mulish] flex flex-col border border-[#D1D5DB] rounded-md mb-3">
                <div className="w-full flex items-center justify-between gap-2 border-b border-[#D1D5DB] pr-2 px-2">
                  <div className="w-1/2 flex flex-col border-r border-[#D1D5DB]">
                    <span className="py-1 text-xs text-black font-bold">
                      From:
                    </span>
                    <input
                      type="date"
                      disabled={!isEditingDetails}
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className={`w-full text-sm focus:outline-none ${
                        !isEditingDetails ? "text-gray-400" : "text-black"
                      }`}
                    />
                  </div>

                  <div className="w-1/2 flex flex-col">
                    <span className="py-1 text-xs text-black font-bold">
                      To:
                    </span>
                    <input
                      type="date"
                      disabled={!isEditingDetails}
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className={`w-full text-sm focus:outline-none ${
                        !isEditingDetails ? "text-gray-400" : "text-black"
                      }`}
                    />
                  </div>
                </div>

                {/* Adults & Children */}
                <div className="w-full flex items-center justify-between gap-2 pr-2 px-2">
                  <div className="w-1/2 flex flex-col border-r border-[#D1D5DB]">
                    <span className="py-1 text-xs text-black font-bold">
                      Adults
                    </span>
                    <input
                      type="number"
                      disabled={!isEditingDetails}
                      value={adultCount}
                      min={0}
                      onChange={(e) => setAdultCount(Number(e.target.value))}
                      className={`w-full text-sm focus:outline-none ${
                        !isEditingDetails ? "text-gray-400" : "text-black"
                      }`}
                    />
                  </div>

                  <div className="w-1/2 flex flex-col">
                    <span className="py-1 text-xs text-black font-bold">
                      Children
                    </span>
                    <input
                      type="number"
                      disabled={!isEditingDetails}
                      value={childCount}
                      min={0}
                      onChange={(e) => setChildCount(Number(e.target.value))}
                      className={`w-full text-sm focus:outline-none ${
                        !isEditingDetails ? "text-gray-400" : "text-black"
                      }`}
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#6B7280] font-[Mulish] mb-2">
                You won’t be charged yet
              </p>

              <div className="font-[Mulish] font-medium text-black flex justify-between text-base mb-2">
                <span>
                  ${pricePerPerson} × {totalPeople} people
                </span>
                <span>${basePrice}</span>
              </div>

              <div className="font-[Mulish] font-medium text-black flex justify-between text-base mb-2">
                <span>Discount</span>
                <span className="text-[#00C48C]">-${discount}</span>
              </div>

              <div className="font-[Mulish] font-medium text-black flex justify-between text-base mb-2">
                <span>Cleaning fee</span>
                <span>${cleaningFee}</span>
              </div>

              <div className="font-[Mulish] font-medium text-black flex justify-between text-base mb-2">
                <span>Service fee</span>
                <span>${serviceFee}</span>
              </div>

              <div className="font-[Mulish] font-medium text-black flex justify-between text-base mb-5">
                <span>Taxes & fees</span>
                <span>${taxes}</span>
              </div>

              <hr className="my-2 text-[#E5E7EB] mb-4" />

              <div className="font-[Mulish] flex justify-between font-bold text-[#1C2B38] mb-2">
                <span>Total</span>
                <span>${total}</span>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white text-sm font-medium font-[Inter] rounded-full py-3 text-sm mt-3"
              >
                Confirm & Pay
              </button>
            </div>
          </div>
        </div>
        {confirmPay && <BookingSuccessful />}
      </div>
    </>
  );
}
