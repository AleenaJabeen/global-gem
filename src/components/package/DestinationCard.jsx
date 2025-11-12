import React,{useState} from "react";
import { FaStar } from "react-icons/fa";
import { FiMapPin} from "react-icons/fi";
import { destinationCard, wishlist } from "../../assets";
import { CiStar } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";

function DestinationCard() {
    const [isWishlisted, setIsWishlisted] = useState(false);
    
      const handleWishlistToggle = () => {
        setIsWishlisted((prev) => !prev);
      };
  return (
    <div className="w-full px-6 lg:px-20 py-10">
         <div>
          <p className="text-lg text-[#1A1A1A] font-bold font-[Quattrocento]">Packages</p>
          <h2 className="font-[Mulish] text-2xl md:text-3xl lg:text-[52px] capitalize drop-shadow-sm drop-shadow-[#FFFFFF66] font-bold text-[#1C2B38] leading-tight">
         We provide a choice of<br className="hidden sm:block" />packages Suitable for you
          </h2>
        </div>
        <div  className="flex flex-col  gap-5 md:flex-row bg-white   overflow-hidden py-10">
      {/* LEFT IMAGE */}
      <div className="relative w-full md:w-1/2">
        <img
        src={destinationCard}
          alt="Hidden Waterfalls of Ubud"
          className="lg:min-w-[503px] w-full h-64 md:h-[450px] xl:h-[600px] lg:h-[500px] object-cover rounded-[20px]"
        />
              <span className="absolute top-3 left-3 bg-[#00000080] text-white text-sm font-extrabold sm:text-base px-3 py-1 rounded-full">
          Indonesia
        </span>
        {/* Wishlist (Heart) Button */}
                     <button
                       onClick={handleWishlistToggle}
                       className="absolute top-3 right-3 bg-white rounded-full p-3 shadow-md z-20 transition-transform duration-200 hover:scale-110"
                     >
                       {isWishlisted ? (
                         <AiFillHeart className="text-red-500 text-2xl" />
                       ) : (
                         <img src={wishlist} alt="Add to Wishlist" className="w-6 h-6" />
                       )}
                     </button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="font-[Mulish] flex flex-col justify-center lg:gap-5 gap-2 md:pl-8 lg:mt-4 mt-1 md:mt-0 w-full md:w-1/2">
        {/* TAGS */}
        <div className="flex flex-wrap gap-2 lg:mb-3 mb-1">
          <span className="border border-[#1F1F1F] font-semibold text-[#9999A7] text-sm sm:text-lg rounded-full px-3 py-1">
            Nature & Adventure
          </span>
          <span className="border border-[#1F1F1F] font-semibold text-[#9999A7] text-sm sm:text-lg rounded-full px-3 py-1">
            Waterfall
          </span>
          <span className="border border-[#1F1F1F] font-semibold text-[#9999A7] text-sm sm:text-lg rounded-full px-3 py-1">
            Local Visit
          </span>
        </div>

        {/* TITLE + PRICE */}
        <div className="font-[Mulish] flex flex-wrap items-center justify-between lg:mb-2 mb-0">
          <h2 className="text-xl lg:text-[30px] font-bold text-[#1A1A1A]">
            Hidden Waterfalls of Ubud
              <span className='mx-2 font-bold lg:text-[54px] sm:text-3xl text-xl'>|</span>
          </h2>
          
          <p className="text-xl lg:text-[40px] font-bold text-[#1A1A1A]">
            $300
            <span className="lg:text-xl text-base  font-bold text-[#1A1A1A]"> <span className=" text-xl lg:text-[44px]">/</span>2 days</span>
          </p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-[#778088] font-semibold font-[Mulish] text-sm lg:text-base lg:mb-3 mb-1">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        {/* RATING + LOCATION */}
        <div className="flex flex-col gap-3 lg:mb-4 mb-2">
          <div className="flex items-center gap-1 text-[#000000]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
           <CiStar/>
            <span className="text-[#1A1A1A] text-xl font-semibold ml-1">4/5</span>
          </div>
          <div className="font-[Mulish] flex items-center gap-1 text-[#022A3A] text-xl">
            <FiMapPin className="text-[#1A1A1A] text-xl font-semibold" />
            Ubud, Bali
          </div>
        </div>

        {/* BUTTON */}
        <button className="bg-[#1F1F1F] font-[Quattrocento] text-white rounded-full px-6 py-3 w-full sm:w-[180px] text-base sm:text-xk font-bold transition hover:bg-gray-800">
          See detail
        </button>
      </div>
      </div>
    </div>
  );
}

export default DestinationCard;
