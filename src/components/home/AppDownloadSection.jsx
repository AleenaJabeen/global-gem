import React from "react";
import { FaApple, FaAndroid } from "react-icons/fa";
import { AppDownload, appscreen1, appscreen2 } from "../../assets";
import { BsAndroid2 } from "react-icons/bs";

export default function AppDownloadSection() {
  return (
    <section className="w-[90%] relative mx-auto my-12 rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-16">

      {/* ✅ Background Image + Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={AppDownload}
          alt="App background"
          className="w-full h-full object-cover"
        />
        {/* Overlay only on image */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative flex justify-center lg:justify-start mb-24 w-full lg:w-1/2 lg:mb-7">
        <img
     src={appscreen1}
          alt="App screen 1"
          className="w-40 sm:w-60 lg:w-72 rounded-3xl shadow-lg relative z-20"
        />
        <img
          src={appscreen2}
          alt="App screen 2"
          className="w-40 sm:w-60 lg:w-72 rounded-3xl shadow-md absolute lg:top-20 top-10 sm:left-28 left-25  lg:left-20 z-10"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="font-[Mulish] text-left text-white lg:w-1/2 space-y-5">
        <h2 className="text-2xl sm:text-[33px] font-bold">
          Take Your Plans Anywhere
        </h2>
        <p className="text-sm sm:text-base font-extrabold max-w-md mx-auto md:mx-0">
          Download our app to manage your listings, message travelers, and view
          earnings on the go.
        </p>

        <ul className="space-y-2 text-sm sm:text-base text-[#FFFFFFBF] font-semibold">
          <li>• iOS & Android Available</li>
          <li>• Push notifications for new bookings</li>
          <li>• Secure with biometric login</li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 text-base justify-center md:justify-start pt-4">
          <button className="flex items-center justify-center gap-2 bg-white text-[#1C2B38] font-extrabold px-6 py-3 rounded-full hover:opacity-90 transition">
            <FaApple size={20} /> Download For iOS
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#FFDA32] text-[#1C2B38] font-extrabold px-6 py-3 rounded-full hover:opacity-90 transition">
            <BsAndroid2 size={20} /> Download For Android
          </button>
        </div>
      </div>
    </section>
  );
}
