import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";


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

  const getData = () => {
    if (filter === "Month") return dataMonth;
    if (filter === "Year") return dataYear;
    return dataWeek;
  };

  return (
    <div className="w-full bg-[#111] text-white p-4 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">Visitors Overview</h2>
        <div className="relative inline-block text-left">
          <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg text-sm">
            {filter} <FaChevronDown size={16} />
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-gray-900 rounded-lg shadow-xl border border-gray-700">
            {['Week', 'Month', 'Year'].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className="w-full text-left px-4 py-2 hover:bg-gray-800 text-sm"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-6 mb-4 text-sm">
        <div className="flex items-center gap-2"><span className="w-4 h-4 bg-gray-400 rounded-sm"></span> New Visit</div>
        <div className="flex items-center gap-2"><span className="w-4 h-4 bg-gray-500 rounded-sm"></span> Unique Visit</div>
        <div className="flex items-center gap-2"><span className="w-4 h-4 bg-gray-600 rounded-sm"></span> Old Visit</div>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getData()} barGap={15}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="day" stroke="#bbb" />
            <YAxis stroke="#bbb" />
            <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none' }} />
            <Bar dataKey="new" fill="#a3a3b5" radius={[10, 10, 0, 0]} />
            <Bar dataKey="unique" fill="#8a8a95" radius={[10, 10, 0, 0]} />
            <Bar dataKey="old" fill="#6f6f7a" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
