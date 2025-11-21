import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { arrow, booking, sliders, trash } from "../../assets";
import { HiMiniMapPin } from "react-icons/hi2";
import { BiCalendar } from "react-icons/bi";

const MyListing = () => {
  const [activeTab, setActiveTab] = useState("all"); // all | promoted
  const [search, setSearch] = useState("");
  const [deleteMode, setDeleteMode] = useState(false);
  const [filter, setFilter] = useState(null);

  // ---- LISTINGS DATA ----
  const [listings, setListings] = useState([
    {
      id: 1,
      name: "Ubud Jungle Trek",
      location: "Solo Raya, Surakarta, Jawa Tengah",
  category: "Nature",
      customer: "You",
      price: 120,
      date: "April 10, 2025",
      time: "10:00 AM",
      promoted: false,
      number: 6,
      profile: booking,
    },
    {
      id: 2,
      name: "Bali Waterfall Adventure",
      location: "Solo Raya, Surakarta, Jawa Tengah",
  category: "Nature",
      customer: "You",
      price: 150,
      date: "April 18, 2025",
      time: "8:00 AM",
      promoted: true,
      number: 12,
      profile: booking,
    },
    {
      id: 3,
      name: "Rice Terrace Exploration",
      location: "Solo Raya, Surakarta, Jawa Tengah",
  category: "Nature",
      customer: "You",
      price: 90,
      date: "May 2, 2025",
      time: "7:30 AM",
      promoted: false,
      number: 4,
      profile: booking,
    },
  ]);

  // ---- FILTER BY TAB ----
  const filteredByTab = listings.filter((item) => {
    if (activeTab === "promoted") return item.promoted === true;
    return true; // all listings
  });

  // ---- SEARCH ----
  const applySearch = filteredByTab.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // ---- SORT ----
  const applyFilter = () => {
    let sorted = [...applySearch];
    if (filter === "price_low") sorted.sort((a, b) => a.price - b.price);
    if (filter === "price_high") sorted.sort((a, b) => b.price - a.price);
    if (filter === "name_az")
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  };

  const finalList = applyFilter();

  // ---- DELETE LISTING ----
  const deleteListing = (id) => {
    setListings((prev) => prev.filter((item) => item.id !== id));
  };

  // ---- PROMOTE LISTING ----
  const togglePromotion = (id) => {
    setListings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, promoted: !item.promoted } : item
      )
    );
  };

  return (
    <div className="w-full">
      {/* Search + Filter + Delete */}
      <div className="flex items-center gap-3 w-full mb-4">
        <div className="flex items-center w-[80%] gap-5 bg-[#F2F2F7] rounded-full px-6">
          <LuSearch className="text-[#1C1C1E] text-xl" size={18} />
          <input
            type="text"
            placeholder="Search Listings"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="font-[Inter] text-[#9999A7] text-sm py-2 pr-4 focus:outline-none"
          />
        </div>

        {/* FILTER */}
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

        {/* DELETE MODE */}
        <button
          onClick={() => setDeleteMode(!deleteMode)}
          className={`p-2 ${deleteMode ? "text-red-600" : ""}`}
        >
          <img src={trash} alt="Delete" />
        </button>
      </div>

      {/* TABS */}
      <div className="w-full font-[Inter] flex justify-between font-semibold text-base text-center mb-5">
        <div
          onClick={() => setActiveTab("all")}
          className={`w-1/2 cursor-pointer ${
            activeTab === "all" ? "text-[#1F1F1F] pb-2" : "text-[#9999A7]"
          }`}
        >
          <span
            className={`${
              activeTab === "all" ? "border-b-2 border-[#1F1F1F] pb-2" : ""
            }`}
          >
            All Listings
          </span>
        </div>

        <div
          onClick={() => setActiveTab("promoted")}
          className={`w-1/2 cursor-pointer ${
            activeTab === "promoted" ? "text-[#1F1F1F] pb-2" : "text-[#9999A7]"
          }`}
        >
          <span
            className={`${
              activeTab === "promoted" ? "border-b-2 border-[#1F1F1F] pb-2" : ""
            }`}
          >
            Promoted Listings
          </span>
        </div>
      </div>

      {/* LISTING CARDS */}
      <div className="flex flex-col gap-4">
        {finalList.map((item) => (
          <div
            key={item.id}
            className="relative flex md:flex-row bg-[#F6F6F6] rounded-[15px] flex-col md:justify-between md:items-center p-3"
          >
            {/* Left Side Info */}
            <div className="flex flex-row items-center gap-3">
              <img
                src={item.profile}
                alt={item.name}
                className="w-40 h-[116px] rounded-lg object-cover"
              />
              <div className="flex flex-col font-[Mulish]">
                <span className="w-fit text-sm bg-[#515151] text-white px-2 py-1 rounded">
                {item.category}
              </span>

                <h2 className="font-medium text-[#1C1C1E] text-xl">
                  {item.name}
                </h2>
                <p className="text-sm text-[#9999A7] flex items-center gap-1">
                  <HiMiniMapPin size={16} />
                  {item.location}
                </p>
                <p className="flex items-center gap-1 text-[#9999A7] text-xs font-medium">
                  <BiCalendar />{item.date} <img src={arrow} alt="" /> {item.date}
                </p>
              
              </div>
            </div>

            {/* Right Buttons */}
            <div className="absolute top-0 right-4 font-[Inter] flex flex-col items-end gap-6 mt-6">
              <div className="flex items-center gap-3">
                <button className=" bg-[#1F1F1F]  px-5 py-1 rounded-md text-white text-[10px]">
                  Edit
                </button>
                {/* Promote / Remove Promotion */}
                <button
                  onClick={() => togglePromotion(item.id)}
                  className={`bg-[#FF8E6B]
                    px-5 py-1 rounded-md text-white text-[10px]`}
                >
                  {item.promoted ? "Remove Promotion" : "Promote"}
                </button>


                {/* Delete */}
                {deleteMode && (
                  <button
                    onClick={() => deleteListing(item.id)}
                    className="text-red-600 font-bold ml-3"
                  >
                    Delete
                  </button>
                )}
              </div>
              
                 <p className="font-semibold text-sm text-[#1F1F1F] flex items-center -mt-4">
                ${item.price}
                <span className="font-normal text-xs text-[#9999A7]">
                  /day
                </span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>

      {finalList.length === 0 && (
        <p className="text-center mt-6 text-gray-400">No listings found.</p>
      )}
    </div>
  );
};

export default MyListing;
