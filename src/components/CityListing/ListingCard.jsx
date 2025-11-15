import React,{useState} from "react";
import { MdOutlineStar } from "react-icons/md";
import { wishlist } from "../../assets";
import { AiFillHeart } from "react-icons/ai";

function ListingCard({ item }) {
     const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted((prev) => !prev);
  };

  return (
    <div className="flex sm:flex-row flex-col gap-2 border-b border-[#E5E7EB] p-3  transition">
      <img
        src={item.img}
        className="sm:w-[28%] w-full sm:h-[112px]  h-[200px] object-cover rounded-xl mb-3"
      />
      <div className="flex flex-col justify-between sm:w-[70%] w-full px-4">
        <div className="font-[Inter] flex justify-between items-start">
          <div>
            <h3 className="text-sm text-[#6B7280]">{item.title}</h3>
            <p className="text-xl font-medium text-[#374151]">
              {item.subtitle}
            </p>
          </div>
        <button
          onClick={handleWishlistToggle}
        >
          {isWishlisted ? (
            <AiFillHeart className="bg-[#FF6B6B] w-7 h-7 text-white p-1 rounded-full text-2xl" />
          ) : (
            <img src={wishlist} alt="Add to Wishlist" className="w-6 h-6" />
          )}
        </button>
        </div>
        <div className="flex justify-between items-start">
          <p className="flex items-center text-[#374151] font-medium text-sm">
        {item.rating}<MdOutlineStar className="text-[#FFB906]" />
            <span className="font-normal">({item.reviews} reviews)</span>
          </p>
          <p className=" font-medium text-lg text-[#374151]">
            ${item.price} <span className="font-normal">/ person</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
