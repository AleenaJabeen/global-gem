import { useState } from "react";
import { HiMiniMapPin } from "react-icons/hi2";
import { wishlist } from "../../assets";
import { AiFillHeart } from "react-icons/ai";

const DestinyCard = ({ title, location, image }) =>{ 
   const [isWishlisted, setIsWishlisted] = useState(false);
  
    const handleWishlistToggle = () => {
      setIsWishlisted((prev) => !prev);
    };
  return (
  
  <div className="font-[Mulish] relative min-w-[250px] sm:min-w-[300px] md:min-w-[450px] h-[300px] sm:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden group transition-all duration-300">
    {/* Image with gradient overlay */}
    <div className="relative w-full h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      {/* Gradient overlay applied only over the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01121900]  to-[#011219]" />
    </div>   
       {/* Wishlist (Heart) Button */}
             <button
          onClick={handleWishlistToggle}
          className={`${isWishlisted?"bg-[#FF6B6B]":"bg-white"} absolute top-3 right-3 w-12 h-12 flex items-center justify-center  rounded-full p-3 shadow-md z-20 transition-transform duration-200 hover:scale-110`}
        >
          {isWishlisted ? (
            <AiFillHeart className="cursor-pointer text-white rounded-full text-2xl" />
          ) : (
            <img src={wishlist} alt="Add to Wishlist" className="cursor-pointer w-full" />
          )}
        </button>
    {/* Text content */}
    <div className="absolute bottom-16 left-4 text-white z-10">
      <h3 className="text-[22px] font-bold drop-shadow-md">{title}</h3>
      <p className="text-lg font-[Inter] flex items-center gap-2">
        <HiMiniMapPin className="text-white text-xl" />
        {location}
      </p>
    </div>
  </div>
);
}

export default DestinyCard;
