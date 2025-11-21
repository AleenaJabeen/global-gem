import React, { useState } from "react";
import { HiMiniChevronDown, HiMiniMapPin, HiOutlineMapPin } from "react-icons/hi2";
import { CgKeyboard, CgSoftwareUpload } from "react-icons/cg";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import Navbar from "../../layout/Navbar";

export default function CreateListing() {
  // Basic information states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [languages, setLanguages] = useState([]);
  const [maxGroup, setMaxGroup] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  // Description
  const [description, setDescription] = useState("");

  // What's included items
  const includedItems = ["Snacks", "Transport", "Equipment", "Entry tickets"];
  const [selectedIncludes, setSelectedIncludes] = useState([]);

  const toggleInclude = (item) => {
    setSelectedIncludes((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  // Media upload
  const [media, setMedia] = useState([]);
  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    setMedia([...media, ...files]);
  };

  // Calendar States
  const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 1));
  const [selectedRange, setSelectedRange] = useState({ start: null, end: null });

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const addMonths = (date, months) => {
    const d = new Date(date);
    d.setMonth(d.getMonth() + months);
    return d;
  };

  const getCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(new Date(year, month, d));

    return days;
  };

  const onSelectDay = (day) => {
    if (!day) return;
    const { start, end } = selectedRange;

    if (!start) setSelectedRange({ start: day, end: null });
    else if (start && !end) {
      if (day < start) setSelectedRange({ start: day, end: start });
      else setSelectedRange({ start, end: day });
    } else setSelectedRange({ start: day, end: null });
  };

  const isInRange = (day) => {
    if (!day) return false;
    const { start, end } = selectedRange;

    if (!start) return false;
    if (start && !end) return day.getTime() === start.getTime();
    return day >= start && day <= end;
  };

  const clearDates = () => setSelectedRange({ start: null, end: null });
  const days = getCalendarDays();

  return (
    <>
     <Navbar
          navStyle="text-[#1C1C1E] bg-white"
          buttonBg="bg-[#1C1C1E] text-[#F2F2F7]"
        />
       
    <div className="w-full px-6 md:px-20 py-10">
      <h2 className="lg:mb-12 mb-4 font-medium font-[Mulish] md:text-3xl text-xl">Create New Listing</h2>

      {/* ---------- BASIC INFORMATION ---------- */}

      <div className="flex items-start gap-4 mb-6">
<div className="flex flex-col gap-3 font-[Inter] md:w-1/2 w-full">
      <h2 className="text-base font-[Inter] text-[#1C1C1E] font-semibold mb-4">Basic Information</h2>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
<div className="bg-[#F2F2F7] rounded-[10px] p-3">
        <input
          type="text"
          maxLength={60}
          placeholder="Experience Title"
          className="w-full text-base text-[#9999A7] focus:outline-none "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>

        {/* Tour Category */}
        <div className="relative">
          <select
            className="w-full bg-[#F2F2F7] rounded-[10px] p-3 text-base text-[#9999A7] focus:outline-none appearance-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Tour Categories</option>
            <option value="city">City Tour</option>
            <option value="adventure">Adventure</option>
            <option value="historic">Historic</option>
          </select>
          <HiMiniChevronDown className="absolute right-3 top-3 text-xl" />
        </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

        {/* Languages Spoken */}
        <div className="relative">
          <select
            className="w-full bg-[#F2F2F7] rounded-[10px] p-3 text-base text-[#9999A7]  focus:outline-none "
            value={languages}
            onChange={(e) =>
              setLanguages(
                Array.from(e.target.selectedOptions, (opt) => opt.value)
              )
            }
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>

        {/* Max Group Size */}
        <input
          type="number"
          placeholder="Max Group Size"
          className="w-full p-3 bg-[#F2F2F7] rounded-[10px] text-base text-[#9999A7]  focus:outline-none"
          value={maxGroup}
          onChange={(e) => setMaxGroup(e.target.value)}
        />
</div>
        {/* Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Location"
            className="w-full p-3  bg-[#F2F2F7] rounded-[10px] text-base text-[#9999A7]"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <HiOutlineMapPin className="absolute right-3 top-3 text-xl text-[#9999A7]  focus:outline-none" />
        </div>

        {/* Per Person Price */}
        <div className="w-full  bg-[#F2F2F7] rounded-[10px]  relative">
          <input
            type="number"
            placeholder="Per Person Price ($ input)"
            className="w-[90%] p-3  bg-[#F2F2F7]  apperance-none text-base text-[#9999A7] focus:outline-none"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <span className="absolute right-3 top-3 text-lg">$</span>
        </div>
        </div>
      

      {/* -------- WHAT'S INCLUDED -------- */}
      <h2 className="text-base font-[Inter] text-[#1C1C1E] font-semibold mb-2">What's Included</h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {includedItems.map((item) => (
          <label className="flex items-center  text-[#1C1C1E] gap-2 text-base font-[Inter]" key={item}>
            <input
              type="checkbox"
              checked={selectedIncludes.includes(item)}
              onChange={() => toggleInclude(item)}
              className="w-5 h-5 accent-[#1C1C1E]"
            />
            {item}
          </label>
        ))}
      </div>
      </div>





      <div className="lg:w-1/2 w-full">

      {/* -------- DESCRIPTION -------- */}
      <h2 className="text-base font-[Inter] text-[#1C1C1E] font-semibold mb-2">Description</h2>

      <textarea
        placeholder="Write your tour description..."
        maxLength={2000}
        className="w-full h-56 bg-[#F5F5F7] font-[Inter] focus:outline-none text-[#6B7280] p-4 rounded-xl text-base leading-relaxed"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="text-right text-[#9999A7] font-[Inter] text-sm mb-8">
        {description.length}/2000
      </div>
      </div>

</div>
      {/* -------- CALENDAR -------- */}
      <div className="w-[80%] p-4 rounded-xl mb-10">
        <h2 className="font-medium font-[Inter]  text-2xl mb-1">Availability</h2>
        

        <div className="flex justify-between items-center mb-4">
          <button onClick={() => setCurrentDate(addMonths(currentDate, -1))}>
            <HiMiniChevronLeft className="w-6 h-6" />
          </button>

          <h2 className="text-base  font-[Mulish] font-medium">
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </h2>

          <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
            <HiMiniChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-7 text-[#6B7280] text-center text-xs font-[Inter] font-semibold">
          {daysOfWeek.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 font-[Inter] text-center">
          {days.map((day, index) => {
            const selected = isInRange(day);
            return (
              <div
                key={index}
                onClick={() => onSelectDay(day)}
                className={`p-2 rounded-full cursor-pointer transition
                  ${day ? "" : "opacity-0"}
                  ${selected ? "bg-black text-white" : "hover:bg-gray-200"}
                `}
              >
                {day ? day.getDate() : ""}
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <CgKeyboard className="text-2xl" />
          <button className="underline" onClick={clearDates}>Clear dates</button>
        </div>
      </div>

      {/* -------- MEDIA UPLOAD -------- */}
      <h2 className="text-lg font-semibold mb-2">Upload Media</h2>

      <label className="w-full border-2 border-dashed rounded-[20px] h-48 p-8 flex flex-col items-center justify-center cursor-pointer mb-6">
        <input
          type="file"
          multiple
          accept="image/*,video/*"
          className="hidden"
          onChange={handleMediaUpload}
        />
        <div className="flex flex-col items-center text-base font-[Inter] text-[#9999A7]">
          <span className="bg-[#E5E5EA] text-[#1C1C1E] p-3 rounded-sm"><CgSoftwareUpload /></span>
          <span>Upload Images and Videos</span></div>
      </label>

      {/* Preview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {media.map((file, index) => (
          <div key={index} className="w-full h-32 bg-gray-100 rounded-lg p-2">
            {file.type.startsWith("video") ? (
              <video src={URL.createObjectURL(file)} controls className="w-full h-full rounded-lg" />
            ) : (
              <img
                src={URL.createObjectURL(file)}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        ))}
      </div>

      {/* -------- Additional Notes -------- */}
      <h2 className="text-base font-[Inter] text-[#1C1C1E] font-semibold mb-2">Additional Notes</h2>
      <textarea
        maxLength={200}
        placeholder="(e.g., weather dependent)"
        className="w-full h-48 p-4 bg-[#F2F2F7] text-[#9999A7] text-nase font-[Inter] rounded-[15px] focus:outline-none mb-6"
      />

      {/* PUBLISH BUTTON */}
      <div className="md:w-[25%] w-[80%] mx-auto ">
      <button className="w-full shadow shadow-[#1F293714] bg-black text-white font-[Inter]  py-3 rounded-full text-center text-xl font-bold">
        Publish & Promote
      </button>
      </div>
    </div>
     </>
  );
}
