import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function DonutChart() {
  const total = 100;
  const profit = 65;

  return (
    <div className="w-full bg-[#F2F2F7] rounded-xl p-6 flex items-center justify-center relative">
      <div className="w-48 h-48">
        <ResponsiveContainer>
          <PieChart>
            {/* Background ring */}
            <Pie
              data={[{ value: total }]}
              dataKey="value"
              innerRadius={50}
              outerRadius={80}
               startAngle={90}
               endAngle={90 - (profit / total) * (360)}
            >
              <Cell fill="#5151516b" />
            </Pie>

            {/* Black profit arc */}
            <Pie
              data={[{ value: profit }]}
              dataKey="value"
              innerRadius={40}
              outerRadius={80}
              startAngle={90}
              endAngle={90 - (profit / total) * (-360)}
            >
              <Cell fill="#1F1F1F" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Center text */}
      <div className="absolute font-[Inter] flex flex-col items-center">
        <span className="text-lg text-[#515151] font-semibold">{profit}%</span>
        <span className="text-[#515151] text-xs font-medium">Profit</span>
      </div>
    </div>
  );
}
