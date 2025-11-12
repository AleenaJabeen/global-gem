import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import {  AiFillHeart } from "react-icons/ai";
import { wishlist } from "../../assets";

export default function PlanCard({ image, title, price, reviews }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted((prev) => !prev);
  };

  return (
    <div className="relative w-full max-w-[300px] md:h-[612px] h-[350px] max-h-[600px] rounded-[32px] overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* GRADIENT OVERLAY ONLY ON BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00151A]" />
      </div>

      {/* CARD CONTENT ABOVE IMAGE + OVERLAY */}
      <div className="relative z-10 flex flex-col justify-between h-full p-5 pt-6 pb-6">
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

        <div className="font-[Mulish] flex-1 flex flex-col justify-end">
          <h3 className="text-[21px] font-bold leading-snug mb-4 drop-shadow-sm drop-shadow-[#FFFFFF66]">
            {title}
          </h3>
          <hr className="text-[#FFFFFF57] h-1 w-full pb-2" />

          <div className="font-[Mulish] flex justify-between items-center mb-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-0 text-base">
                {[...Array(5)].map((_, i) => (
                  <IoIosStar key={i} className="text-[#CFD9DE]" />
                ))}
              </div>
              <span className="text-base font-semibold text-[#F6F6F6]">
                {reviews} reviews
              </span>
            </div>

            <div className="flex flex-col text-right gap-0">
              <p className="font-bold text-[21px] text-white">${price}</p>
              <p className="text-base font-semibold text-[#F6F6F6] mt-[-9px]">
                per person
              </p>
            </div>
          </div>

          <button className="font-[Mulish] w-[75%] mx-auto bg-white text-[#141414] font-extrabold py-2 rounded-full mt-5">
            See detail
          </button>
        </div>
      </div>
    </div>
  );
}
