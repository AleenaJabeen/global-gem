import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const dataWeek = [
  { day: "Sun 12", new: 1500, unique: 900, old: 700 },
  { day: "Mon 13", new: 2550, unique: 1400, old: 1000 },
  { day: "Tue 14", new: 2100, unique: 1200, old: 900 },
  { day: "Wed 15", new: 2400, unique: 1300, old: 1100 },
  { day: "Thu 16", new: 2700, unique: 1500, old: 1200 },
  { day: "Fri 17", new: 2800, unique: 1600, old: 1300 },
  { day: "Sat 18", new: 2500, unique: 1400, old: 1100 }
];

const dataMonth = dataWeek.map((d) => ({ ...d, new: d.new * 2, unique: d.unique * 2, old: d.old * 2 }));
const dataYear = dataWeek.map((d) => ({ ...d, new: d.new * 10, unique: d.unique * 10, old: d.old * 10 }));

export default function VisitChart() {
  const [filter, setFilter] = useState("Week");
  const [open, setOpen] = useState(false);

  const getData = () => {
    if (filter === "Month") return dataMonth;
    if (filter === "Year") return dataYear;
    return dataWeek;
  };

  return (
    <div className="w-full bg-[#1F1F1F] text-white p-4 rounded-xl shadow-lg">
      <div className="flex items-center justify-end mb-5">
        <div className="relative inline-block text-left">
          
          {/* Dropdown Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-white text-[#1C1C1E] px-4 py-2 font-[Inter] font-medium rounded-lg text-xs"
          >
            {filter} <FaChevronDown size={12} />
          </button>

          {/* DROPDOWN MENU */}
          {open && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-[#1C1C1E] rounded-lg shadow-xl  z-10">
              {["Week", "Month", "Year"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setFilter(item);
                    setOpen(false); // close dropdown when selecting
                  }}
                  className="w-full text-left px-4 py-2  text-xs"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-6 mb-6 -mt-8 pl-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-6 h-4 bg-[#9999A7]"></span> New Visit
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-4 bg-[#FFFFFF]/40"></span> Unique Visit
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-4 bg-[#FFFFFF]/60"></span> Old Visit
        </div>
      </div>

      <div className="w-full h-70">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getData()} barGap={15}>
            <CartesianGrid strokearray="1 1" stroke="#ffffff36" horizontal={true} vertical={false} />
            <XAxis dataKey="day" stroke="#ffffff8c" padding={{ left: 20, right: 20 }}/>
            <YAxis stroke="#ffffff" padding={{ top: 20, bottom: 20 }} />

            {/* Transparent Tooltip */}
            <Tooltip
              contentStyle={{
                background: "#1f1f1f",
                border: "none",
                boxShadow: "none",
              }}
              wrapperStyle={{
                background: "transparent",
              }}
              labelStyle={{ color: "#fff" }}
            />

            <Bar dataKey="new" fill="#9999A7" radius={[10, 10, 0, 0]} />
            <Bar dataKey="unique" fill="#ffffffc1" radius={[10, 10, 0, 0]} />
            <Bar dataKey="old" fill="#ffffffa6" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
