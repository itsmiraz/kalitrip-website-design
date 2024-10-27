/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import FlightsIcon from "@/assets/icons/fligts.svg";
import HotelssIcon from "@/assets/icons/hotels.svg";
import LeftArrow from "@/assets/icons/LeftArrow.svg";
import Image from "next/image";
import Flight from "@/assets/images/flights.png";
import HotelImage from "@/assets/images/hotel.png";
import DashedLineVertical from "@/assets/icons/dashedVerticalBorder.svg";
import DashedLineHorizontal from "@/assets/icons/DashedBorderHorizontal.svg";

import Accommodation from "@/assets/icons/Accomodations.svg";
import CultruralActivites from "@/assets/icons/CulturalActivites.svg";
import Transport from "@/assets/icons/Transportation.svg";
import Gastronomy from "@/assets/icons/Gastronomy.svg";

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
      <div className="flex mb-[50px] justify-center gap-x-[20px] items-center">
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

      <div className="bg-[#0924AB]/5 p-[30px] max-w-[1240px] mx-auto rounded-[20px] ">
        <HotelsAndFlights />
        <div className="mt-[50px] mb-[30px]">
          <DashedLineHorizontal />
        </div>
        <Recommendations />
      </div>
    </div>
  );
};

export default PlanResult;

const HotelsAndFlights = () => {
  return (
    <div>
      <h2 className="text-[24px] font-semibold font-clashDisplay ">
        Travel Gretz-Armainvilliers - Dhaka (November 2-3)
      </h2>
      <p className="text-[#767676] font-medium font-inter text-[14px]">
        Paris-Dhaka flight with stopover (around €800). Arrival and installation
        at the Nascent Gardenia Boutique Guest House hotel (€50/night).
      </p>

      <div className="pt-[40px]">
        <div className=" flex justify-between items-center">
          {/* flights */}
          <div className="flex  gap-x-[40px]">
            <div className="flex flex-col  md:min-w-[255px] justify-between items-start">
              <FlightsIcon />
              <h3 className="text-[18px] font-clashDisplay font-semibold leading-[18px]">
                Paris-Dhaka flight
              </h3>
              <p className="text-[14px] font-medium font-inter">
                800€/round-trip ticket
              </p>
              <button className="mt-[24px] font-clashDisplay px-[20px] py-[8px]  ease-in-out duration-300 transition-all rounded-full font-medium  hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center  hover:bg-[#14591D] h-[34px] leading-[14px] text-heading-color ">
                Book Now <LeftArrow />{" "}
              </button>
            </div>
            <div>
              <Image src={Flight} alt="" />
            </div>
          </div>
          <DashedLineVertical />
          {/* hotels */}
          <div className="flex  gap-x-[40px]">
            <div className="flex flex-col  md:min-w-[255px] justify-between items-start">
              <HotelssIcon />
              <h3 className="text-[18px] font-clashDisplay font-semibold leading-[18px]">
                Nascent Gardenia Boutique <br /> Guest House
              </h3>
              <p className="text-[14px] font-medium font-inter">
                50€/Per Night
              </p>
              <button className="mt-[24px] font-clashDisplay px-[20px] py-[8px]  ease-in-out duration-300 transition-all rounded-full font-medium  hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center  hover:bg-[#14591D] h-[34px] leading-[14px] text-heading-color ">
                Book Now <LeftArrow />{" "}
              </button>
            </div>
            <div>
              <Image src={HotelImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Recommendations = () => {
  return (
    <div className="flex justify-between items-center">
      {/* Accommodations */}
      <div className="flex flex-col  md:max-w-[188px] justify-between items-start">
        <Accommodation />
        <h3 className="text-[18px]  pt-[20px]  font-clashDisplay font-semibold leading-[18px]">
          Accommodation
        </h3>
        <p className="text-[14px] pt-[10px] font-medium font-inter">
          Choose local hotels for an authentic experience
        </p>
        <p className="text-[#14591D] mt-[15px] rounded-[7px] bg-[#14591D]/10 py-[8px] px-[10px] text-[14px] font-semibold font-clashDisplay ">
          Budget: 1965€ (39%)
        </p>
        <button className="mt-[24px] font-clashDisplay px-[20px] py-[8px]  ease-in-out duration-300 transition-all rounded-full font-medium  hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center  hover:bg-[#14591D] h-[34px] leading-[14px] text-heading-color ">
          Book Now <LeftArrow />{" "}
        </button>
      </div>
      <DashedLineVertical />

      {/*   Cultural activities */}
      <div className="flex flex-col  md:max-w-[188px] justify-between items-start">
        <CultruralActivites />
        <h3 className="text-[18px]  pt-[20px]  font-clashDisplay font-semibold leading-[18px]">
          Cultural activities
        </h3>
        <p className="text-[14px] pt-[10px] font-medium font-inter">
          Visit historic mosques, take part in a traditional weaving workshop
        </p>
        <p className="text-[#14591D] mt-[15px] rounded-[7px] bg-[#14591D]/10 py-[8px] px-[10px] text-[14px] font-semibold font-clashDisplay ">
          Budget: 1000€ (20%)
        </p>
        <button className="mt-[24px] font-clashDisplay px-[20px] py-[8px]  ease-in-out duration-300 transition-all rounded-full font-medium  hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center  hover:bg-[#14591D] h-[34px] leading-[14px] text-heading-color ">
          Book Now <LeftArrow />{" "}
        </button>
      </div>
      <DashedLineVertical />

      {/* Transport */}
      <div className="flex flex-col  md:max-w-[188px] justify-between items-start">
        <Transport />
        <h3 className="text-[18px]  pt-[20px]  font-clashDisplay font-semibold leading-[18px]">
          Transport
        </h3>
        <p className="text-[14px] pt-[10px] font-medium font-inter">
          Use rickshaws for short trips around town
        </p>
        <p className="text-[#14591D] mt-[15px] rounded-[7px] bg-[#14591D]/10 py-[8px] px-[10px] text-[14px] font-semibold font-clashDisplay ">
          Budget: 1505€ (30%)
        </p>
        <button className="mt-[24px] font-clashDisplay px-[20px] py-[8px]  ease-in-out duration-300 transition-all rounded-full font-medium  hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center  hover:bg-[#14591D] h-[34px] leading-[14px] text-heading-color ">
          Book Now <LeftArrow />{" "}
        </button>
      </div>
      <DashedLineVertical />
      {/* Gastronomy */}
      <div className="flex flex-col  md:max-w-[188px] justify-between items-start">
        <Gastronomy />
        <h3 className="text-[18px]  pt-[20px]  font-clashDisplay font-semibold leading-[18px]">
          Gastronomy
        </h3>
        <p className="text-[14px] pt-[10px] font-medium font-inter">
          Try Dhaka's hilsa fish and biryani
        </p>
        <p className="text-[#14591D] mt-[15px] rounded-[7px] bg-[#14591D]/10 py-[8px] px-[10px] text-[14px] font-semibold font-clashDisplay ">
          Budget: 530€ (11%)
        </p>
        <button className="mt-[24px] font-clashDisplay px-[20px] py-[8px]  ease-in-out duration-300 transition-all rounded-full font-medium  hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center  hover:bg-[#14591D] h-[34px] leading-[14px] text-heading-color ">
          Book Now <LeftArrow />{" "}
        </button>
      </div>
    </div>
  );
};
