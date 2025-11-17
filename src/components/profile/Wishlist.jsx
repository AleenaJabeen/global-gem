import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { booking, sliders, trash, wishlist } from "../../assets";
import { HiMiniMapPin } from "react-icons/hi2";
import { AiFillHeart } from "react-icons/ai";

function Wishlist() {
  const [search, setSearch] = useState("");
  const [deleteMode, setDeleteMode] = useState(false);
  const [filter, setFilter] = useState(null);

  // ⭐ Store wishlist items in state so UI updates
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Whispering Pines",
      location: "Solo Raya, Surakarta, Jawa Tengah",
      price: 100,
      category: "Beach",
      img: booking,
      wishlist: true,
    },
    {
      id: 2,
      name: "Ocean Retreat",
      location: "Bali, Indonesia",
      price: 80,
      category: "Nature",
      img: booking,
      wishlist: true,
    },
    {
      id: 3,
      name: "Whispering Pines",
      location: "Solo Raya, Surakarta, Jawa Tengah",
      price: 100,
      category: "Beach",
      img: booking,
      wishlist: true,
    },
  ]);

  // ⭐ Toggle wishlist → remove item
  const toggleWishlist = (id) => {
    setWishlistItems((prev) =>
      prev.filter((item) => item.id !== id) // remove from wishlist
    );
  };

  // ⭐ Delete mode → tapping card deletes
  const deleteCard = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ⭐ Filter function
  const applyFilter = (list) => {
    if (filter === "price_low") return [...list].sort((a, b) => a.price - b.price);
    if (filter === "price_high") return [...list].sort((a, b) => b.price - a.price);
    if (filter === "name_az") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  };

  // ⭐ Search function
  const applySearch = (list) =>
    list.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

  // ⭐ Final result shown on screen
  const list = applyFilter(applySearch(wishlistItems));

  return (
    <div className="w-full">
      {/* Search + Filters + Delete Mode */}
      <div className="flex items-center gap-3 w-full mb-4">
        <div className="relative flex-1 bg-[#F2F2F7] rounded-full px-2">
          <LuSearch
            className="absolute left-4 top-3 text-[#1C1C1E] text-xl"
            size={18}
          />
          <input
            type="text"
            placeholder="Search Bookings"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-[#9999A7] font-[Inter] text-sm rounded-full py-2.5 pl-10 pr-4 focus:outline-none"
          />
        </div>

        {/* Filter button */}
        <button
          onClick={() =>
            setFilter((prev) =>
              prev === "price_low"
                ? "price_high"
                : prev === "price_high"
                ? "name_az"
                : "price_low"
            )
          }
          className="p-2"
        >
          <img src={sliders} alt="Sliders" />
        </button>

        {/* Delete mode */}
        <button
          onClick={() => setDeleteMode((p) => !p)}
          className={`p-2 ${deleteMode ? "text-red-700" : ""}`}
        >
          <img src={trash} alt="Delete" />
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {list.map((card) => (
          <div
            key={card.id}
            onClick={() => deleteMode && deleteCard(card.id)}
            className={`flex bg-[#F6F6F6] gap-4 p-4 rounded-[15px] cursor-pointer transition ${
              deleteMode ? "hover:bg-red-100" : "hover:bg-gray-100"
            }`}
          >
            {/* Image */}
            <img src={card.img} className="w-28 h-20 rounded-lg object-cover" />

            {/* Details */}
            <div className="font-[Inter] flex flex-col justify-between flex-1">
              <span className="w-fit text-sm bg-[#515151] text-white px-2 py-1 rounded">
                {card.category}
              </span>

              <h3 className="font-medium text-[#1C1C1E] text-xl">
                {card.name}
              </h3>

              <p className="text-sm text-[#9999A7] flex items-center gap-1">
                <HiMiniMapPin size={16} />
                {card.location}
              </p>
            </div>

            {/* Price + Wishlist toggle */}
            <div className="font-[Inter] flex flex-col gap-3 items-end">
              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  toggleWishlist(card.id); // remove item
                }}
                className="bg-[#FF6B6B] w-8 h-8 flex items-center justify-center rounded-full p-1 hover:scale-110"
              >
                <AiFillHeart className="text-white text-xl" />
              </button>

              <p className="font-semibold text-sm text-[#1F1F1F] flex items-center">
                ${card.price}
                <span className="font-normal text-xs text-[#9999A7]">/day</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
