import React from "react";
import Navbar from "../../layout/Navbar";
import { experience, host3 } from "../../assets";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { BiSolidMap } from "react-icons/bi";
import OfferedExperiences from "./OfferedExperiences";

function GuideProfile() {
  return (
    <>
      <Navbar
        navStyle="text-[#1C1C1E] bg-white"
        buttonBg="bg-[#1C1C1E] text-[#F2F2F7]"
      />
      <div className="font-[Mulish] lg:px-20 px-6 h-full py-8">
        <h2 className="text-[#1C2B38] font-semibold md:text-3xl text-2xl mb-4">
          Guide Profile
        </h2>

        <div className="w-full flex md:flex-row flex-col gap-4 h-full">
          {/* Left side */}
          <div className="md:w-[28%] flex-col w-full">
            <img src={host3} alt="host" className="w-48 h-48 rounded-full mb-2" />
            <h2 className="font-medium text-[#1C2B38] text-2xl mb-3">Wayan Suta</h2>
            <div className="font-[Inter] flex-wrap flex items-center gap-2 mb-3">
              <h3 className="flex items-center gap-2 text-[#1C1C1E]">
                <MdOutlineVerifiedUser className="text-xl text-[#00C48C]" />
                Verified
              </h3>
              <h3 className="flex items-center gap-2 text-[#9999A7]">
                <IoIosStar className="text-xl text-[#1F1F1F]" />
                <span className="text-[#1C1C1E]">4.6</span>(167 reviews)
              </h3>
            </div>
            <div className="font-[Inter] flex-wrap flex items-center gap-4 mb-3">
              <p className="flex items-center gap-1 text-[#1C1C1E] text-sm font-semibold">
                <BiSolidMap />
                Ubud,Bali
              </p>
              <p className="flex items-center gap-1 text-[#1C1C1E] text-sm font-semibold">
                <img src={experience} alt="Experience" />
                6+ Years of exp
              </p>
            </div>
            <h3 className="font-[Inter] text-[#1C1C1E] text-base font-semibold mb-3">
              Specialties
            </h3>
            <div className="flex items-center flex-wrap  gap-2 text-[13px] font-[Inter] text-white mb-3">
              <p className="bg-[#515151]  rounded-[5.5px]  py-1 px-4 text-center">
                Beach
              </p>
              <p className="bg-[#515151]  rounded-[5.5px] px-4 py-1 text-center">
                Food
              </p>
               <p className="bg-[#515151]  rounded-[5.5px] px-4 py-1 text-center">
                Spa
              </p>
            </div>
            <h3 className="font-[Inter] flex-wrap text-[#1C1C1E] text-base font-semibold mb-2">
             Languages Spoken
            </h3>
            <div className="flex items-center  gap-2 text-[13px] font-[Inter] text-white">
              <p className="bg-[#515151]  rounded-[5.5px]  py-1 px-4 text-center">
                English
              </p>
              <p className="bg-[#515151]  rounded-[5.5px] px-4 py-1 text-center">
                Indonesian
              </p>
            </div>
          </div>
          {/* Right side */}
          <div className="font-[Inter] md:w-[70%] w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#1C1C1E] text-xl font-semibold">About</h3>
              <div className="flex items-center gap-3 font-medium text-base text-black">
                <button className="p-2 px-3 shadow-[#00000021] shadow-md rounded-xl">
                  Report
                </button>
                <button className="p-2 px-3 shadow-[#00000021] shadow-md rounded-xl">
                  Block
                </button>
              </div>
            </div>
            <div className="font-[Quattrocento] text-[#9999A7] text-lg flex flex-col gap-2">
              <p>
                The tour was very well organised. One minus is that you get
                completely bombarded with information. You also have to stand up
                for too long at the private entrance to the Tower of London,
                which leads to a lack of time later. Lunch was the same, too
                stress, the quality was great but you couldn't enjoy it. I'd
                like to ask the organisers: please
              </p>

              <p>
                The tour was very well organised. One minus is that you get
                completely bombarded with information. You also have to stand up
                for too long at the private entrance to the Tower of London,
                which leads to a lack of time later. Lunch was the same, too
                stress, the quality was great but you couldn't enjoy it. I'd
                like to ask the organisers: please
              </p>
              <p>
                The tour was very well organised. One minus is that you get
                completely bombarded with information. You also have to stand up
                for too long at the private entrance to the Tower of London,
                which leads to a lack of time later. Lunch was the same, too
                stress, the quality was great but you couldn't enjoy it. I'd
                like to ask the organisers: please
              </p>
              <button className="bg-[#1F1F1F] text-white text-center py-2 mt-3 rounded-[15px] font-bold text-lg font-[Inter] md:w-[40%] w-[60%] ">Let’s Talk</button>
            </div>
          </div>
        </div>
        <OfferedExperiences/>
      </div>
    </>
  );
}

export default GuideProfile;
