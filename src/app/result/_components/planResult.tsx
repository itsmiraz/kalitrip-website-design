"use client";
import React, { useState } from "react";

const PlanResult = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const Dates = [
    {
      title: "Day 1-2",
      id: Math.random().toString(),
    },
    {
      title: "Day 3-5",
      id: Math.random().toString(),
    },
    {
      title: "Day 6-7",
      id: Math.random().toString(),
    },
    {
      title: "Day 8-10",
      id: Math.random().toString(),
    },
    {
      title: "Day 11-14",
      id: Math.random().toString(),
    },
  ];

  return (
    <div>
      {/* Dates */}
      <div className="flex justify-center gap-x-[20px] items-center">
        {Dates.map((item) => (
          <button
            key={item.id}
            className={`${
              selectedDate === item.title
                ? "bg-[#14591D] text-[#FDF7FA] font-bold border-none"
                : "text-[#14591D] border"
            } transition-all ease-in-out duration-300 px-[20px] leading-[14px] font-inter h-fit py-[18px]  border-[#14591D]/15 rounded-[50px] `}
            onClick={() => setSelectedDate(item.title)}
          >
            {item.title} 
          </button>
        ))}
      </div>

      {/* result */}

      <div className="bg-[#0924AB]/5 p-[30px] ">
      
      
      </div>
    </div>
  );
};

export default PlanResult;
