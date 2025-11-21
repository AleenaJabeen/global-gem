import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import {  profile, sliders, trash } from "../../assets";
import { useNavigate } from "react-router-dom";

const BookingInformation = () => {
  const [activeTab, setActiveTab] = useState("upcoming"); // upcoming | pending | previous
  const [search, setSearch] = useState("");
  const [deleteMode, setDeleteMode] = useState(false);
  const [filter, setFilter] = useState(null);
   const navigate = useNavigate();

  const handleFirstButton = (trip) => {
    if (trip.status.toLowerCase() === "pending") {
      // Decline (no navigation)
      console.log("Decline clicked");
    } else {
      // Chat
      navigate("/inbox");
    }
  };

  const handleSecondButton = (trip) => {
    if (trip.status.toLowerCase() === "pending") {
      // Accept (no navigation)
      console.log("Accept clicked");
    } else {
      // View Details
      navigate("/view-profile");
    }
  };

  // ALL TRIPS DATA
  const [trips, setTrips] = useState([
    {
      id: 1,
      customer: "Putra",
      name: "Hidden Waterfall Trek",
      price: 100,
      profile: profile,
      status: "Confirmed",
      date: "April 22, 2025",
      time: "9:00 AM",
      number: "3",
    },
    {
      id: 2,
      customer: "Putra",
      name: "Hidden Waterfall Trek",
      price: 100,
      profile: profile,
      status: "Completed",
      date: "April 22, 2025",
      time: "9:00 AM",
      number: "3",
    },
    {
      id: 3,
      customer: "Putra",
      name: "Hidden Waterfall Trek",
      price: 100,
      profile: profile,
      status: "Pending",
      date: "April 22, 2025",
      time: "9:00 AM",
      number: "3",
    },
    {
      id: 4,
      customer: "Putra",
      name: "Hidden Waterfall Trek",
      price: 100,
      profile: profile,
      status: "Cancelled",
      date: "April 22, 2025",
      time: "9:00 AM",
      number: "3",
    },
  ]);

  // ---- FILTER BY TAB (STATUS) ----
  const filteredByTab = trips.filter((trip) => {
    if (activeTab === "upcoming") return trip.status.toLowerCase() === "confirmed";
    if (activeTab === "pending") return trip.status.toLowerCase() === "pending";
    if (activeTab === "previous") return trip.status.toLowerCase() === "cancelled";
    return true;
  });

  // ---- SEARCH ----
  const applySearch = filteredByTab.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // ---- SORT FILTER ----
  const applyFilter = () => {
    let sorted = [...applySearch];
    if (filter === "price_low") sorted.sort((a, b) => a.price - b.price);
    if (filter === "price_high") sorted.sort((a, b) => b.price - a.price);
    if (filter === "name_az")
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  };

  const finalList = applyFilter();

  // ---- DELETE CARD ----
  const deleteCard = (id) => {
    setTrips((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full">
      {/* Search + Filter + Delete */}
      <div className="flex items-center gap-3 w-full mb-4">
        <div className="flex items-center w-[80%] gap-5 bg-[#F2F2F7] rounded-full px-6">
          <LuSearch
            className=" text-[#1C1C1E] text-xl"
            size={18}
          />
          <input
            type="text"
            placeholder="Search Bookings"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="font-[Inter] text-[#9999A7] text-sm  py-2 pr-4 focus:outline-none"
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
        {["upcoming", "pending", "previous"].map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-1/3 cursor-pointer ${
              activeTab === tab ? "text-[#1F1F1F]  pb-2" : "text-[#9999A7]"
            }`}
          >
            <span
              className={`${
                activeTab === tab ? "border-b-2 border-[#1F1F1F] pb-2" : ""
              }`}
            >
              {" "}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </span>
          </div>
        ))}
      </div>

      {/* TRIP CARDS */}
      <div className="flex flex-col gap-4">
        {finalList.map((trip) => (
          <div
            key={trip.id}
            className="relative flex md:flex-row flex-col md:justify-between md:items-center p-3"
          >
            <div className="flex flex-row  items-center gap-3">
              <img
                src={trip.profile}
                alt={trip.customer}
                className="w-[44px] h-[44px] rounded-full"
              />
              <div className="flex flex-col font-[Mulish] gap-1">
                <h2 className="text-[#1C1C1E] text-sm font-semibold">
                  {trip.customer}
                </h2>
                <h3 className="text-[#9999A7] text-xs font-medium">
                  {trip.name}
                </h3>
                <p className="text-[#9999A7] text-xs font-medium">
                  {trip.date} | {trip.time} {trip.number} participants
                </p>
                <p className="flex items-center text-[#1F1F1F] text-sm font-semibold">
                  ${trip.price}{" "}
                  <span className="text-[#9999A7] font-normal text-xs">
                    /day
                  </span>
                </p>
              </div>
            </div>
            <p
              className={`${
                trip.status.toLowerCase() === "completed" ? "bg-[#00C48C] " : "bg-[#1F1F1F]"
              } ${trip.status.toLowerCase()==="cancelled"?"bg-[#FF6B6B]":""} font-[Inter] capitalize absolute top-2 right-3 px-2 py-1 text-[10px] capitalize  text-white rounded-md`}
            >
              {trip.status}
            </p>
            <div className="font-[Inter] flex flex-col items-end gap-6 mt-6">
              <div className="flex items-center gap-3">
                 <button
        onClick={()=>handleFirstButton(trip)}
        className="bg-[#9999A7] sm:w-36 w-24 rounded-xl text-white text-xs font-bold p-3"
      >
        {trip.status.toLowerCase() === "pending" ? "Decline" : "Chat"}
      </button>

      <button
        onClick={()=>handleSecondButton(trip)}
        className="border border-[#1F1F1F] sm:w-36 w-24 text-nowrap rounded-xl text-[#1F1F1F] text-xs font-bold p-3"
      >
        {trip.status.toLowerCase() === "pending" ? "Accept" : "View Details"}
      </button>
                {/* DELETE BUTTON */}
                {deleteMode && (
                  <button
                    onClick={() => deleteCard(trip.id)}
                    className="text-red-600 font-bold ml-3"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {finalList.length === 0 && (
        <p className="text-center mt-6 text-gray-400">No bookings found.</p>
      )}
    </div>
  );
};

export default BookingInformation;
