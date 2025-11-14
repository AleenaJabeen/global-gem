import { useState } from "react";
import { CgKeyboard } from "react-icons/cg";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";


export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2022, 2, 1));
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

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      days.push(new Date(year, month, d));
    }

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
    <div className="w-full p-4 select-none">
        <div className="mb-4">
                    <h2 className="font-[Inter] text-black font-medium text-2xl">Availability</h2>
                    <p className="font-[Mulish] text-[#6B7280] text-sm">23 Available days in February, 2025</p>

        </div>
      <div className="font-[Mulish] flex justify-between items-center mb-4">
        <button onClick={() => setCurrentDate(addMonths(currentDate, -1))}>
          <HiMiniChevronLeft className="w-6 h-6" />
        </button>

        <h2 className="text-base font-medium">
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </h2>

        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
          <HiMiniChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-7 text-center text-xs font-[Inter] text-[#6B7280] mb-2">
        {daysOfWeek.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((day, index) => {
          const isSelected = isInRange(day);
          return (
            <div
              key={index}
              onClick={() => onSelectDay(day)}
              className={`p-2 rounded-full cursor-pointer transition
                ${day ? "" : "opacity-0"}
                ${isSelected ? "bg-black text-white" : "hover:bg-gray-200"}`}
            >
              {day ? day.getDate() : ""}
            </div>
          );
        })}
      </div>

      <div className="font-[Mulish] mt-4 flex justify-between items-center">
        <CgKeyboard className="text-2xl"/>
        <button onClick={clearDates} className="text-base font-medium text-black underline">Clear dates</button>
      </div>
    </div>
  );
}
