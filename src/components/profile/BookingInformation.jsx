import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { booking, sliders, trash, wishlist } from "../../assets";
import { HiMiniMapPin } from "react-icons/hi2";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BookingInformation = () => {
  const [activeTab, setActiveTab] = useState("current");
  const [search, setSearch] = useState("");
  const [deleteMode, setDeleteMode] = useState(false);
  const [filter, setFilter] = useState(null);
  const navigate=useNavigate();
  const currentBookingsData = [
    {
      id: 1,
      name: "Whispering Pines",
      location: "Solo Raya, Surakarta, Jawa Tengah",
      price: 100,
      category: "Beach",
      img: booking,
      wishlist: false,
    },
    {
      id: 2,
      name: "Ocean Retreat",
      location: "Bali, Indonesia",
      price: 80,
      category: "Nature",
      img: booking,
      wishlist: false,
    },
    {
      id: 3,
      name: "Whispering Pines",
      location: "Solo Raya, Surakarta, Jawa Tengah",
      price: 100,
      category: "Beach",
      img: booking,
      wishlist: false,
    },
  ];

  const toggleWishlist = (id) => {
    if (activeTab === "current") {
      setCurrentBookings((prev) =>
        prev.map((card) =>
          card.id === id ? { ...card, wishlist: !card.wishlist } : card
        )
      );
    } else {
      setPreviousBookings((prev) =>
        prev.map((card) =>
          card.id === id ? { ...card, wishlist: !card.wishlist } : card
        )
      );
    }
  };

  const previousBookingsData = [
    {
      id: 10,
      name: "Mountain Breeze",
      location: "Bandung, Indonesia",
      price: 95,
      category: "Mountain",
      img: booking,
    },
  ];

  const [currentBookings, setCurrentBookings] = useState(currentBookingsData);
  const [previousBookings, setPreviousBookings] =
    useState(previousBookingsData);

  // --- SEARCH ---
  const applySearch = (list) =>
    list.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

  // --- FILTER ---
  const applyFilter = (list) => {
    if (filter === "price_low")
      return [...list].sort((a, b) => a.price - b.price);
    if (filter === "price_high")
      return [...list].sort((a, b) => b.price - a.price);
    if (filter === "name_az")
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  };

  const list =
    activeTab === "current"
      ? applyFilter(applySearch(currentBookings))
      : applyFilter(applySearch(previousBookings));

  // --- DELETE CARD ---
  const deleteCard = (id) => {
    if (activeTab === "current")
      setCurrentBookings((prev) => prev.filter((item) => item.id !== id));
    else setPreviousBookings((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full">
      {/* Search + Icons */}
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

        {/* FILTER BUTTON */}
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
          className="p-2 "
        >
          <img src={sliders} alt="Sliders" />
        </button>

        {/* DELETE MODE TOGGLE */}
        <button
          onClick={() => setDeleteMode((p) => !p)}
          className={`p-2  ${deleteMode ? "text-red-700" : ""}`}
        >
          <img src={trash} alt="Delete" />
        </button>
      </div>

      {/* Tabs */}
      <div className="w-full font-[Inter] text-base  flex gap-6 mb-5 pb-2">
        <div
          className={` w-1/2 text-center cursor-pointer font-semibold ${
            activeTab === "current" ? "text-[#1C1C1E]" : "text-[#9999A7]"
          }`}
          onClick={() => setActiveTab("current")}
        >
          <span
            className={`${
              activeTab === "current" ? "border-[#1C1C1E] border-b-2 pb-2" : ""
            }`}
          >
            Current Bookings
          </span>
        </div>

        <div
          className={`w-1/2 text-center cursor-pointer font-semibold ${
            activeTab === "previous" ? "text-[#1C1C1E]" : "text-[#9999A7]"
          }`}
          onClick={() => setActiveTab("previous")}
        >
          <span
            className={`${
              activeTab === "previous" ? "border-[#1C1C1E] border-b-2 pb-2" : ""
            }`}
          >
            Previous Bookings
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {list.map((card) => (
          <div 
            key={card.id}
            onClick={() => {
              deleteMode && deleteCard(card.id)
              navigate("/detail")
            }}
            className={`flex bg-[#F6F6F6] gap-4 p-4 rounded-[15px] cursor-pointer transition ${
              deleteMode ? "hover:bg-red-100" : "hover:bg-gray-100"
            }`}
          >
            {/* Image */}
            <img src={card.img} className="w-28 h-20 rounded-lg object-cover" />

            {/* Details */}
            <div className="font-[Inter]  flex flex-col justify-between flex-1">
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

            {/* Price and Favorite */}
            <div className="font-[Inter] flex flex-col gap-3 items-end">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevents delete tap
                  toggleWishlist(card.id);
                }}
                className={`${
                  card.wishlist ? "bg-[#FF6B6B]" : ""
                } w-8 h-8 flex items-center justify-center rounded-full p-1 transition-transform duration-200 hover:scale-110`}
              >
                {card.wishlist ? (
                  <AiFillHeart className="text-white rounded-full text-xl" />
                ) : (
                  <img
                    src={wishlist}
                    alt="Add to Wishlist"
                    className="w-full"
                  />
                )}
              </button>

              <p className="font-semibold text-sm text-[#1F1F1F] flex items-center">
                ${card.price}
                <span className="font-normal text-xs text-[#9999A7]">
                  /day
                </span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>

      {list.length === 0 && (
        <p className="text-center mt-6 text-gray-400">No bookings found.</p>
      )}
    </div>
  );
};

export default BookingInformation;
