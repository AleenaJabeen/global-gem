import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { MdArrowDropDown, MdOutlineStar } from "react-icons/md";
import { review } from "../../assets";
import { LuCheckCheck } from "react-icons/lu";

export default function CustomerReviews() {
  const [filter, setFilter] = useState("Recommended");
  const [travelerType, setTravelerType] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [search, setSearch] = useState("");

 const allReviews = [
  {
    name: "Arlene McCoy",
    verified: true,
    date: "2 October 2022",
    rating: 4,
    travelerType: "Couple",
    title: "Good tour, really well organised",
    description:
      "The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was great but stressful, and you couldn’t enjoy it. I'd like to ask the organisers: please slow down a bit.",
  },
  {
    name: "Robert Fox",
    verified: true,
    date: "12 September 2022",
    rating: 5,
    travelerType: "Solo",
    title: "Amazing experience!",
    description:
      "Everything was perfect! The guide was very knowledgeable and kept things entertaining. Highly recommended for anyone visiting London for the first time.",
  },
  {
    name: "Leslie Alexander",
    verified: true,
    date: "29 August 2022",
    rating: 3,
    travelerType: "Family",
    title: "Good but too crowded",
    description:
      "The tour itself was good, but the crowd made it a bit difficult to fully enjoy the experience. Timing could be better managed.",
  },
  {
    name: "Courtney Henry",
    verified: false,
    date: "15 July 2022",
    rating: 4,
    travelerType: "Couple",
    title: "Enjoyable tour with great guide",
    description:
      "We had a great guide who explained everything very well. Could’ve used more time at some stops but overall worth it.",
  },
];


  const reviews = allReviews.filter((r) => {
    const matchRating = ratingFilter ? r.rating === Number(ratingFilter) : true;
    const matchSearch = search
      ? r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.name.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchRating && matchSearch;
  });

  return (
    <div className="p-4 md:p-10 max-w-6xl mx-auto font-sans">
      <h2 className="text-2xl text-black font-[Inter] font-medium mb-2">
        Customer Review
      </h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-2xl text-black font-[Inter] font-medium flex items-center gap-1">
                4.5 <MdOutlineStar size={16} />
              </p>
              <p className="text-xs text-[#9999A7] font-[Inter]">273 Reviews</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-2xl text-black font-[Inter] font-medium">
                88%
              </p>
              <p className="text-xs text-[#9999A7] font-[Inter]">
                {" "}
                Recommended
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <FaStar size={22} />
            <FaStar size={22} />
            <FaStar size={22} />
            <FaStar size={22} />
            <FaStar className="text-[#F2F2F7]" size={22} />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2 mb-1">
              <span className="text-sm w-4 text-[#9999A7]">{star}</span>
              <div className="w-full h-2 bg-[#F2F2F7] rounded-bl-[2px] rounded-tl-[2px]">
                <div
                  className="h-full bg-[#1F1F1F] rounded-bl-[2px] rounded-tl-[2px] "
                  style={{ width: `${Math.random() * 90 + 10}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col bg-[#F8FAFC] md:flex-row md:items-center  py-2 w-full gap-4 mb-6 px-6">
        <div className="flex items-center gap-1 text-[#1C2B38] text-[15px] font-bold font-[Mulish]">
          <FiFilter className="text-[#1C2B38]" size={20} />
          <p>Filtering:</p>
        </div>
        <div className="relative md:w-[15%] w-full bg-white">
          <select
            className="p-2 font-[Mulish]   focus:outline-none appearance-none w-full font-semibold  text-[15px] text-[#495560] md:w-auto"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>Recommended</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
          <MdArrowDropDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#778088] text-2xl pointer-events-none" />
        </div>
        <div className="relative md:w-[15%] w-full bg-white">
          <select
            className="p-2 font-[Mulish]   focus:outline-none appearance-none w-full font-semibold  text-[15px] text-[#495560] md:w-auto"
            value={travelerType}
            onChange={(e) => setTravelerType(e.target.value)}
          >
            <option value="">Traveler type</option>
            <option>Solo</option>
            <option>Couple</option>
            <option>Family</option>
          </select>
                    <MdArrowDropDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#778088] text-2xl pointer-events-none" />

        </div>
        <div className="relative md:w-[15%] w-full bg-white">
          <select
            className="p-2 font-[Mulish] bg-white focus:outline-none appearance-none w-full font-semibold  text-[15px] text-[#495560] md:w-auto"
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
          >
            <option value="">Rating</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
          </select>
          <MdArrowDropDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#778088] text-2xl pointer-events-none" />
        </div>
        <div className="flex items-center bg-white gap-2 px-4 text-[#495560] rounded-full w-[35%] border border-[#CCD5DD]">
          <BiSearch size={22}/>
          <input
            type="text"
            placeholder="Search Here"
            className="w-full py-2 font-[Mulish] font-semibold text-[15px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-6">
        {reviews.map((r, i) => (
          <div key={i} className="relative flex md:flex-row flex-col md:gap-4 border-b border-[#E8EAEB] pb-4">
            <div className="md:w-[25%] w-full font-[Mulish] flex items-center gap-3">
              <img
                src={review}
                alt="avatar"
                className="w-[60px] h-[60px] rounded-full"
              />
              <div>
                <div className="flex items-center">
              {Array(r.rating)
                .fill(0)
                .map((_, idx) => (
                  <span key={idx}><MdOutlineStar className="text-[#1F1F1F]"/></span>
                ))}
            </div>
                <p className="text-[#1C2B38] text-nowrap font-semibold flex items-center gap-1">{r.name} <LuCheckCheck className="text-[#7BBCB0]"/></p>
                <p className="text-xs font-medium font-[Inter] text-[#00C48C]">Verified User</p>
                <p className="text-[13px] font-semibold text-[#778088]">{r.date}</p>
              </div>
            </div>

            <div className="md:w-[70%] w-full flex flex-col md:mt-2 ">

            <h3 className="text-black font-[Mulish] text-base font-medium mb-2">
              Good tour, really well organised
            </h3>
            <p className="text-sm text-[#495560] font-[Mulish] leading-6">{r.description}</p>
</div>
            <div className="absolute right-1 top-0  font-[Mulish] text-[13px] flex justify-end mt-2 text-sm text-gray-500">
              <span className="mr-1 text-[#778088] font-semibold ">Helpful?</span>
              <button className="font-bold text-[#7BBCB0]">Yes</button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
