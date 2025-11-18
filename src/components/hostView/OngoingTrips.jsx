import React from "react";
import { arrow, profile } from "../../assets";

function OngoingTrips() {
  const ongoingTrips = [
    {
      id: 1,
      customer: "Putra",
      name: "Hidden Waterfall Trek",
      price: "$100",
      profile: profile,
      status: "confirmed",
      date: "April 22, 2025",
      time: "9:00 AM",
      number: "3",
    },
    {
      id: 2,
      customer: "Putra",
      name: "Hidden Waterfall Trek",
      price: "$100",
      profile: profile,
      status: "completed",
      date: "April 22, 2025",
      time: "9:00 AM",
      number: "3",
    },
    {
      id: 3,
      customer: "Putra",
      name: "Hidden Waterfall Trek",
      price: "$100",
      profile: profile,
      status: "confirmed",
      date: "April 22, 2025",
      time: "9:00 AM",
      number: "3",
    },
    {
      id: 4,
      customer: "Putra",
      name: "Hidden Waterfall Trek",
      price: "$100",
      profile: profile,
      status: "confirmed",
      date: "April 22, 2025",
      time: "9:00 AM",
      number: "3",
    },
  ];
  return (
    <div>
      <div className="flex md:items-center md:flex-row flex-col md:justify-between mb-6 mt-8">
        <h2 className="font-[Mulish] text-xl capitalize md:text-2xl font-bold text-[#1C2B38] leading-tight">
          ongoing trips with me
        </h2>

        <button className="flex items-center self-start gap-2 text-lg font-bold text-[#1A1A1A] ">
          See more <img src={arrow} alt="Right arrow" className="mt-1" />
        </button>
      </div>
      {ongoingTrips.map((trip) => {
        return (
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
                  {trip.price}{" "}
                  <span className="text-[#9999A7] font-normal text-xs">
                    /day
                  </span>
                </p>
              </div>
            </div>
            <p
              className={`${
                trip.status === "completed" ? "bg-[#00C48C] " : "bg-[#1F1F1F]"
              } absolute top-2 right-3 font-[Inter] px-2 py-1 text-[10px] capitalize text-white rounded-md`}
            >
              {trip.status}
            </p>
            <div className="font-[Inter] flex flex-col items-end gap-6 mt-6">
              <div className="flex items-center gap-3">
                <button className="bg-[#9999A7]  sm:w-36 w-24 rounded-xl text-white text-xs font-bold p-3">
                  Chat
                </button>
                <button className="border border-[#1F1F1F] sm:w-36 w-24 text-nowrap rounded-xl text-[#1F1F1F] text-xs font-bold p-3">
                  View Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OngoingTrips;
