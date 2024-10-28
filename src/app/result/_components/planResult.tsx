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
import DashedLineHorizontalSmall from "@/assets/icons/DashedLineHorizontalSmall.svg";

import Accommodation from "@/assets/icons/Accomodations.svg";
import CultruralActivites from "@/assets/icons/CulturalActivites.svg";
import Transport from "@/assets/icons/Transportation.svg";
import Gastronomy from "@/assets/icons/Gastronomy.svg";
import { RoundedButton } from "@/components/ui/buttons";

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
    {
      title: "Day 11-14",
      id: Math.random().toString(),
    },
    {
      title: "Day 11-14",
      id: Math.random().toString(),
    },
  ];

  return (
    <div className="px-4">
      {/* Dates */}
      <div className="flex overflow-x-auto mb-[50px] justify-center gap-x-[20px] items-center">
        {Dates.map((item) => (
          <button
            key={item.id}
            className={`${
              selectedDate === item.title
                ? "bg-[#14591D] text-[#FDF7FA] font-bold border-none"
                : "text-[#14591D] border"
            } transition-all whitespace-nowrap ease-in-out duration-300 px-[20px] leading-[14px] font-inter h-fit py-[18px]  border-[#14591D]/15 rounded-[50px] `}
            onClick={() => setSelectedDate(item.title)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* result */}

      <div className="bg-[#0924AB]/5 overflow-hidden py-[20px] md:py-[30px] md:px-[30px] px-[15px] md:p-[30px] max-w-[full] md:max-w-[1240px] mx-auto rounded-[20px] ">
        <HotelsAndFlights />
        <div className="mt-[50px]  mb-[30px]">
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
      <h2 className=" text-[14px]  md:leading-normal leading-[15px] md:text-[24px] font-semibold font-clashDisplay ">
        Travel Gretz-Armainvilliers - <br className="md:hover: block" /> Dhaka
        (November 2-3)
      </h2>
      <p className="text-[#767676] pt-[8px] font-medium  md:leading-normal leading-[14px] font-inter text-[10px] md:text-[14px]">
        Paris-Dhaka flight with stopover (around €800). Arrival and installation
        at the Nascent Gardenia Boutique Guest House hotel (€50/night).
      </p>

      <div className="pt-[40px]">
        <div className=" flex justify-between items-center">
          {/* flights */}
          <div className="flex md:flex-row flex-col gap-y-[20px] gap-x-[40px]">
            <div className="flex flex-col  md:min-w-[255px] justify-between items-start">
              <div className="md:w-[45px] md:h-[45px] w-[25px] h-[25px]">
                <FlightsIcon />
              </div>
              <h3 className="text-[12px] pb-[7px] pt-[10px] md:text-[18px] font-clashDisplay font-semibold leading-[18px]">
                Paris-Dhaka flight
              </h3>
              <p className="text-[8px] md:text-[14px] font-medium font-inter">
                800€/round-trip ticket
              </p>
              {/* <button className="mt-[24px]  text-[8px] md:text-[14px] font-clashDisplay px-[20px] py-[8px]  ease-in-out duration-300 transition-all rounded-full font-medium  hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center  hover:bg-[#14591D] h-fit whitespace-nowrap md:h-[34px] leading-[14px] text-heading-color ">
                Book Now <LeftArrow />{" "}
              </button> */}
              <RoundedButton/>
            </div>
            <div>
              <Image src={Flight} alt="" />
            </div>
          </div>
          <div className="md:px-0   px-[24px]">
            <DashedLineVertical />
          </div>
          {/* hotels */}
          <div className="flex     md:flex-row flex-col gap-y-[20px] gap-x-[40px]">
            <div className="flex flex-col  md:min-w-[255px] justify-between   items-start">
              <div className="md:w-[45px] md:h-[45px] w-[25px] h-[25px]">
                <HotelssIcon />
              </div>
              <h3 className="text-[12px] pb-[7px] pt-[10px] leading-[13px] md:text-[18px] font-clashDisplay font-semibold md:leading-[18px]">
                Nascent Gardenia Boutique <br className="md:block hidden" />{" "}
                Guest House
              </h3>
              <p className="text-[8px] md:text-[14px] font-medium font-inter">
                50€/Per Night
              </p>
              {/* <button className="mt-[24px]  text-[8px] md:text-[14px] font-clashDisplay px-[20px] py-[8px]  ease-in-out duration-300 transition-all rounded-full font-medium  hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center  hover:bg-[#14591D] h-fit whitespace-nowrap md:h-[34px] leading-[14px] text-heading-color ">
                Book Now <LeftArrow />{" "}
              </button> */}
              <RoundedButton/>
           
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
    <div className="flex-wrap flex md:flex-row justify-between items-center">
      {/* Accommodations */}
      <div className="flex py-[20px] flex-col max-w-[134px]  md:max-w-[188px] justify-between items-start">
        <div className="md:w-[45px] md:h-[45px] w-[25px] h-[25px]">
          <Accommodation />
        </div>
        <h3 className="text-[12px] md:text-[18px]  pt-[20px]  font-clashDisplay font-semibold leading-[18px]">
          Accommodation
        </h3>
        <p className="text-[8px] md:text-[14px] pt-[10px] font-medium font-inter">
          Choose local hotels for an authentic experience
        </p>
        <p className="text-[#14591D] mt-[15px] rounded-[7px] bg-[#14591D]/10 py-[8px] px-[10px] text-[8px] md:text-[14px] font-semibold font-clashDisplay ">
          Budget: 1965€ (39%)
        </p>
        {/* <button className="mt-[24px]  text-[8px] md:text-[14px] font-clashDisplay px-[20px] py-[7px] md:py-[8px] leading-[8px]  ease-in-out duration-300 transition-all rounded-full font-medium  hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center  hover:bg-[#14591D] h-fit whitespace-nowrap md:h-[34px] md:leading-[14px] text-heading-color ">
          Book Now <div className="w-[8px] h-[8px] md:w-[18px] md:h-[18px] ">
          <LeftArrow  /></div>{" "}
        </button> */}
              <RoundedButton/>

        <div className="md:hidden block">
          <DashedLineHorizontalSmall />
        </div>
      </div>
      <DashedLineVertical />

      {/*   Cultural activities */}
      <div className="flex flex-col  max-w-[134px]    md:max-w-[188px] justify-between items-start">
        <div className="md:w-[45px] md:h-[45px] w-[25px] h-[25px]">
          <CultruralActivites />
        </div>

        <h3 className="text-[12px] md:text-[18px]  pt-[20px]  font-clashDisplay font-semibold leading-[18px]">
          Cultural activities
        </h3>
        <p className="text-[8px] md:text-[14px] pt-[10px] font-medium font-inter">
          Visit historic mosques, take part in a traditional weaving workshop
        </p>
        <p className="text-[#14591D] mt-[15px] rounded-[7px] bg-[#14591D]/10 py-[8px] px-[10px] text-[8px] md:text-[14px] font-semibold font-clashDisplay ">
          Budget: 1000€ (20%)
        </p>
        {/* <button className="mt-[24px]  text-[8px] md:text-[14px] font-clashDisplay px-[20px] py-[8px]  ease-in-out duration-300 transition-all rounded-full font-medium  hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center  hover:bg-[#14591D] h-fit whitespace-nowrap md:h-[34px] leading-[14px] text-heading-color ">
          Book Now <LeftArrow />{" "}
        </button> */}
              <RoundedButton/>

      </div>
      <div className="md:inline-block hidden">
        <DashedLineVertical />
      </div>

      {/* Transport */}
      <div className="flex flex-col   max-w-[134px]   md:max-w-[188px] justify-between items-start">
        <div className="md:w-[45px] md:h-[45px] w-[25px] h-[25px]">
          <Transport />
        </div>

        <h3 className="text-[12px] md:text-[18px]  pt-[20px]  font-clashDisplay font-semibold leading-[18px]">
          Transport
        </h3>
        <p className="text-[8px] md:text-[14px] pt-[10px] font-medium font-inter">
          Use rickshaws for short trips around town
        </p>
        <p className="text-[#14591D] mt-[15px] rounded-[7px] bg-[#14591D]/10 py-[8px] px-[10px] text-[8px] md:text-[14px] font-semibold font-clashDisplay ">
          Budget: 1505€ (30%)
        </p>
        {/* <button className="mt-[24px]  text-[8px] md:text-[14px] font-clashDisplay px-[20px] py-[8px]  ease-in-out duration-300 transition-all rounded-full font-medium  hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center  hover:bg-[#14591D] h-fit whitespace-nowrap md:h-[34px] leading-[14px] text-heading-color ">
          Book Now <LeftArrow />{" "}
        </button> */}
              <RoundedButton/>

      </div>
      <DashedLineVertical />
      {/* Gastronomy */}
      <div className="flex flex-col   max-w-[134px]   md:max-w-[188px] justify-between items-start">
        <div className="md:w-[45px] md:h-[45px] w-[25px] h-[25px]">
          <Gastronomy />
        </div>

        <h3 className="text-[12px] md:text-[18px]  pt-[20px]  font-clashDisplay font-semibold leading-[18px]">
          Gastronomy
        </h3>
        <p className="text-[8px] md:text-[14px] pt-[10px] font-medium font-inter">
          Try Dhaka's hilsa fish and biryani
        </p>
        <p className="text-[#14591D] mt-[15px] rounded-[7px] bg-[#14591D]/10 py-[8px] px-[10px] text-[8px] md:text-[14px] font-semibold font-clashDisplay ">
          Budget: 530€ (11%)
        </p>
        {/* <button className="mt-[24px]  text-[8px] md:text-[14px] font-clashDisplay px-[20px] py-[8px]  ease-in-out duration-300 transition-all rounded-full font-medium  hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center  hover:bg-[#14591D] h-fit whitespace-nowrap md:h-[34px] leading-[14px] text-heading-color ">
          Book Now <LeftArrow />{" "}
        </button> */}
              <RoundedButton/>

      </div>
    </div>
  );
};
