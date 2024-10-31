/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import FlightsIcon from "@/assets/icons/fligts.svg";
import HotelssIcon from "@/assets/icons/hotels.svg";
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
import GenerateIcon from "@/assets/icons/GenerateIcon.svg";

import ActivityImage1 from "@/assets/images/resultPage/image1.png";
import ActivityImage2 from "@/assets/images/resultPage/image2.png";
import ActivityImage3 from "@/assets/images/resultPage/image3.png";

const PlanResult = () => {
  const [selectedDate, setSelectedDate] = useState("1 ");

  const Dates = [
    {
      title: "Day 1-2",
      id: "1",
    },
    {
      title: "Day 3-5",
      id: "2",
    },
    {
      title: "Day 6-7",
      id: "3",
    },
    {
      title: "Day 8-10",
      id: "4",
    },
    {
      title: "Day 12-14",
      id: "5",
    },
    {
      title: "Day 14-16",
      id: "6",
    },
    {
      title: "Day 17-15",
      id: "9",
    },
  ];

  return (
    <div className="px-4">
      {/* Dates */}
      <div className="flex overflow-x-auto mb-[50px] justify-start md:justify-center gap-x-[20px] items-center">
        {Dates.map((item) => (
          <button
            key={item.id}
            className={`${
              selectedDate === item.id
                ? "bg-[#14591D] text-[#FDF7FA] font-bold border-none"
                : "text-[#14591D] border"
            } transition-all whitespace-nowrap ease-in-out duration-300 px-[15px] md:px-[20px]  leading-[10px] md:leading-[14px] text-[10px] md:text-[14px] font-inter h-fit py-[10px] md:py-[18px]  border-[#14591D]/15 rounded-[50px] `}
            onClick={() => setSelectedDate(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* result */}

      <div className="bg-[#0924AB]/5 overflow-hidden py-[20px] md:py-[30px] md:px-[20px] px-[15px] md:p-[30px] max-w-[full] md:max-w-[1240px] mx-auto rounded-[20px] ">
        {selectedDate === "1" ? <HotelsAndFlights /> : <Activities />}
        <div className="mt-[50px]  mb-[30px]">
          <DashedLineHorizontal />
        </div>
        <Recommendations />
      </div>
    </div>
  );
};

export default PlanResult;

const Activities = () => {
  return (
    <>
      <h2 className=" text-[14px]  md:leading-normal leading-[15px] md:text-[24px] font-semibold font-clashDisplay ">
        Dhaka (November 4-6)
      </h2>
      <div className="mt-[40px] w-full flex items-start gap-[32px] md:flex-row flex-col">
        <div>
          <h3 className="text-[#040F16] md:text-[18px] text-[12px] font-semibold font-clashDisplay ">
            Dhaka city tour
          </h3>
          <ul className="mt-[15px] space-y-[10px] mb-[30px]">
            <li className="flex items-center gap-x-[5px]">
              <GenerateIcon />
              <p className="text-[#767676] text-[10px] md:text-[14px] font-inter font-medium">
                Visit to Lalbagh Fort and Bangladesh National Museum.
              </p>
            </li>
            <li className="flex items-center gap-x-[5px]">
              <GenerateIcon />
              <p className="text-[#767676] text-[10px] md:text-[14px] font-inter font-medium">
                Boat trip on the buriganga river.
              </p>
            </li>
            <li className="flex items-center gap-x-[5px]">
              <GenerateIcon />
              <p className="text-[#767676] text-[10px] md:text-[14px] font-inter font-medium">
                Explore old Dhaka and its traditional markets.
              </p>
            </li>
          </ul>
          <RoundedButton />
        </div>
        <div className="flex md:w-fit w-full md:flex-row gap-[16px] flex-col">
          <Image className="md:w-fit w-full" src={ActivityImage1} alt="" />
          <Image className="md:w-fit w-full" src={ActivityImage2} alt="" />
          <Image className="md:w-fit w-full" src={ActivityImage3} alt="" />
        </div>
      </div>
    </>
  );
};

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
              <p className="text-[8px] mb-[15px]  md:text-[14px] font-medium font-inter">
                800€/round-trip ticket
              </p>

              <RoundedButton />
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
              <p className="text-[8px]  mb-[15px]  md:text-[14px] font-medium font-inter">
                50€/Per Night
              </p>

              <RoundedButton />
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
        <h3 className="text-[12px] md:text-[18px] pt-[10px] md:pt-[20px]  font-clashDisplay font-semibold leading-[12px]  md:leading-[18px]">
          Accommodation
        </h3>
        <p className="text-[8px] md:text-[14px] pt-[7px] md:pt-[10px] font-medium font-inter">
          Choose local hotels for an authentic experience
        </p>
        <p className="text-[#14591D] mb-[15px] md:mb-[24px]  mt-[10px] md:mt-[15px] rounded-[7px] bg-[#14591D]/10 md:py-[8px] py-[5px] px-[7px] md:px-[10px] text-[8px] md:text-[14px] font-semibold font-clashDisplay ">
          Budget: 1965€ (39%)
        </p>

        <RoundedButton />

        <div className="md:hidden pt-[20px] block">
          <DashedLineHorizontalSmall />
        </div>
      </div>
      <DashedLineVertical />

      {/*   Cultural activities */}
      <div className="flex flex-col  max-w-[134px]    md:max-w-[188px] justify-between items-start">
        <div className="md:w-[45px] md:h-[45px] w-[25px] h-[25px]">
          <CultruralActivites />
        </div>

        <h3 className="text-[12px] md:text-[18px] pt-[10px] md:pt-[20px]  font-clashDisplay font-semibold leading-[12px]  md:leading-[18px]">
          Cultural activities
        </h3>
        <p className="text-[8px] md:text-[14px] pt-[7px] md:pt-[10px] font-medium font-inter">
          Visit historic mosques, take part in a traditional weaving workshop
        </p>
        <p className="text-[#14591D] mb-[15px] md:mb-[24px]  mt-[10px] md:mt-[15px] rounded-[7px] bg-[#14591D]/10 md:py-[8px] py-[5px] px-[7px] md:px-[10px] text-[8px] md:text-[14px] font-semibold font-clashDisplay ">
          Budget: 1000€ (20%)
        </p>

        <RoundedButton />
        <div className="md:hidden pt-[20px] block">
          <DashedLineHorizontalSmall />
        </div>
      </div>
      <div className="md:inline-block hidden">
        <DashedLineVertical />
      </div>

      {/* Transport */}
      <div className="flex flex-col   max-w-[134px]   md:max-w-[188px] justify-between items-start">
        <div className="md:w-[45px] md:h-[45px] w-[25px] h-[25px]">
          <Transport />
        </div>

        <h3 className="text-[12px] md:text-[18px] pt-[10px] md:pt-[20px]  font-clashDisplay font-semibold leading-[12px]  md:leading-[18px]">
          Transport
        </h3>
        <p className="text-[8px] md:text-[14px] pt-[7px] md:pt-[10px] font-medium font-inter">
          Use rickshaws for short trips around town
        </p>
        <p className="text-[#14591D] mb-[15px] md:mb-[24px]  mt-[10px] md:mt-[15px] rounded-[7px] bg-[#14591D]/10 md:py-[8px] py-[5px] px-[7px] md:px-[10px] text-[8px] md:text-[14px] font-semibold font-clashDisplay ">
          Budget: 1505€ (30%)
        </p>

        <RoundedButton />
      </div>
      <DashedLineVertical />
      {/* Gastronomy */}
      <div className="flex flex-col   max-w-[134px]   md:max-w-[188px] justify-between items-start">
        <div className="md:w-[45px] md:h-[45px] w-[25px] h-[25px]">
          <Gastronomy />
        </div>

        <h3 className="text-[12px] md:text-[18px] pt-[10px] md:pt-[20px]  font-clashDisplay font-semibold leading-[12px]  md:leading-[18px]">
          Gastronomy
        </h3>
        <p className="text-[8px] md:text-[14px] pt-[7px] md:pt-[10px] font-medium font-inter">
          Try Dhaka's hilsa fish and biryani
        </p>
        <p className="text-[#14591D] mb-[15px] md:mb-[24px]  mt-[10px] md:mt-[15px] rounded-[7px] bg-[#14591D]/10 md:py-[8px] py-[5px] px-[7px] md:px-[10px] text-[8px] md:text-[14px] font-semibold font-clashDisplay ">
          Budget: 530€ (11%)
        </p>

        <RoundedButton />
      </div>
    </div>
  );
};
