import React, { useState } from "react";
import { HiMiniChevronDown, HiMiniMapPin } from "react-icons/hi2";
import { CgKeyboard } from "react-icons/cg";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

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
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">

      {/* ---------- BASIC INFORMATION ---------- */}
      <h2 className="text-lg font-semibold mb-4">Basic Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        {/* Experience Title */}
        <input
          type="text"
          maxLength={60}
          placeholder="Experience Title"
          className="w-full p-3 bg-[#F5F5F7] rounded-lg text-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Tour Category */}
        <div className="relative">
          <select
            className="w-full p-3 bg-[#F5F5F7] rounded-lg text-sm appearance-none"
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

        {/* Languages Spoken */}
        <div className="relative">
          <select
            multiple
            className="w-full p-3 bg-[#F5F5F7] rounded-lg text-sm"
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
          className="w-full p-3 bg-[#F5F5F7] rounded-lg text-sm"
          value={maxGroup}
          onChange={(e) => setMaxGroup(e.target.value)}
        />

        {/* Location */}
        <div className="relative">
          <input
            type="text"
            placeholder="Location"
            className="w-full p-3 bg-[#F5F5F7] rounded-lg text-sm"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <HiMiniMapPin className="absolute right-3 top-3 text-xl text-gray-500" />
        </div>

        {/* Per Person Price */}
        <div className="relative">
          <input
            type="number"
            placeholder="Per Person Price ($ input)"
            className="w-full p-3 bg-[#F5F5F7] rounded-lg text-sm"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <span className="absolute right-3 top-3 text-lg">$</span>
        </div>
      </div>

      {/* -------- WHAT'S INCLUDED -------- */}
      <h2 className="text-lg font-semibold mb-2">What's Included</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {includedItems.map((item) => (
          <label className="flex items-center gap-2 text-sm" key={item}>
            <input
              type="checkbox"
              checked={selectedIncludes.includes(item)}
              onChange={() => toggleInclude(item)}
              className="w-5 h-5 accent-black"
            />
            {item}
          </label>
        ))}
      </div>

      {/* -------- DESCRIPTION -------- */}
      <h2 className="text-lg font-semibold mb-2">Description</h2>

      <textarea
        placeholder="Write your tour description..."
        maxLength={2000}
        className="w-full h-48 bg-[#F5F5F7] p-4 rounded-lg text-sm leading-relaxed"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="text-right text-gray-400 text-sm mb-8">
        {description.length}/2000
      </div>

      {/* -------- CALENDAR -------- */}
      <div className="w-full p-4 border rounded-xl mb-10">
        <h2 className="font-semibold text-xl mb-1">Availability</h2>
        <p className="text-sm text-gray-500 mb-4">Select available days</p>

        <div className="flex justify-between items-center mb-4">
          <button onClick={() => setCurrentDate(addMonths(currentDate, -1))}>
            <HiMiniChevronLeft className="w-6 h-6" />
          </button>

          <h2 className="text-base font-medium">
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </h2>

          <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
            <HiMiniChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2">
          {daysOfWeek.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
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

      <label className="w-full border border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer mb-6">
        <input
          type="file"
          multiple
          accept="image/*,video/*"
          className="hidden"
          onChange={handleMediaUpload}
        />
        <div className="text-lg">Upload Images and Videos</div>
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
      <h2 className="text-lg font-semibold mb-2">Additional Notes</h2>
      <textarea
        maxLength={200}
        placeholder="(e.g., weather dependent)"
        className="w-full h-28 p-4 bg-[#F5F5F7] rounded-lg mb-6"
      />

      {/* PUBLISH BUTTON */}
      <button className="w-full bg-black text-white py-3 rounded-full text-center text-lg font-medium">
        Publish & Promote
      </button>
    </div>
  );
}
