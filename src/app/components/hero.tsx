/* eslint-disable react/no-unescaped-entities */
"use client";

import CoverImage from "@/assets/images/hero-cover.webp";
import Logo from "@/assets/images/logo.webp";
import Image from "next/image";
import Earth from "@/assets/icons/Earth.svg";
import ArrowDown from "@/assets/icons/ArrowDown.svg";
// import Location from "@/assets/icons/Location.svg";
import PlanIcon from "@/assets/images/plan-icon.png";
// import SelectBudget from "@/assets/icons/SelectBudget.svg";
import { useState } from "react";
import LocationInput from "./locationInput";
import SelectDateRange from "./selectDateRange";
import SelectTravelers, { TravelersCount } from "./selectTraveler";
import BudgetSelector from "./budgetSelector";
import { FilterOptions, navLinks } from "@/constant";

const Hero = () => {
  return (
    <div id="hero">
      <div
        style={{
          backgroundImage: `url(${CoverImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[913px] px-10 pt-[20px]"
      >
        {/* Header */}
        <Header />

        {/* Hero */}
        <MainHero />
      </div>
      {/* Filter */}
      <Filter />
    </div>
  );
};

export default Hero;

const Header = () => {
  return (
    <div className="flex  mx-auto justify-between items-center">
      <Image src={Logo} alt="" className="max-w-[170]" />
      <ul className="flex gap-x-[40px] translate-x-20  items-center">
        {navLinks.map((item, i) => (
          <li key={i}>
            {" "}
            <p className="text-[18px]  transition-all duration-300 ease-in-out font-clashDisplay cursor-pointer hover:text-[#14591D]  text-[#FDF7FA]">
              {item.label}
            </p>{" "}
          </li>
        ))}
      </ul>
      <div className="flex gap-x-[20px]">
        <div className="flex bg-[#FDF7FA]/10  h-fit border border-[#FDF7FA]/40 rounded-full items-center gap-x-[15px] text-white px-[25px] py-4">
          <div className="flex gap-x-[7px] items-center">
            <Earth />
            <p className="text-[18px] font-medium text-[#FDF7FA]">En</p>
          </div>
          <ArrowDown />
        </div>
        <button className="px-[25px] border border-[#FDF7FA]/30 text-white text-[18px] py-[16px] rounded-[15px] rounded-tl-[0px]">
          Sign Up
        </button>
        <button className="px-[25px] bg-[#14591D]  text-white text-[18px] py-[16px] rounded-[15px] rounded-tl-[0px]">
          Login
        </button>
      </div>
    </div>
  );
};

const MainHero = () => {
  return (
    <div className="pt-[61px]">
      <div className="flex items-start justify-center">
        <div className="translate-x-24">
          <Image src={PlanIcon} alt="" />
        </div>
        <h1 className="text-[68px]  font-clashDisplay text-white text-center leading-[110%] font-semibold">
          Why is it so absurd? <br /> to delight in many inanimate <br />{" "}
          <span className="text-[#14591D]">things 500€</span>
        </h1>
      </div>
      <p className="text-[22px] font-inter text-white text-center font-medium pt-[20px]">
        KaliTrip allows you to organize your trips more efficiently,
        with personalized <br /> itineraries that adapt to your
        preferences and your budget .
      </p>
    </div>
  );
};

const Filter = () => {
  const [selected, setselected] = useState("");

  const handleTravelersChange = (travelers: TravelersCount) => {
    console.log("Selected travelers:", travelers);
  };
  return (
    <div className="-translate-y-20 pb-[20px] bg-white drop-shadow rounded-[20px] max-w-[1240px] mx-auto pt-[50px] px-[30px]">
      <div className="flex pb-[30px] border-b border-[#E6E6E6] justify-between items-center">
        <LocationInput label="Where are you Coming from" />
        <LocationInput label="Where do you want to go?" />

        <div>
          <SelectDateRange />
          {/* <SelectDate /> */}
        </div>
        <div>
          <SelectTravelers onChange={handleTravelersChange} />
        </div>
        <div>
          <BudgetSelector />
        </div>
      </div>
      <div className="flex justify-center flex-wrap px-20 gap-y-[30px] gap-x-[40px] border-b border-[#E6E6E6] py-[30px] items-center ">
        {FilterOptions.map((item, i) => (
          <div
            onClick={() => setselected(item.label)}
            className={`${
              selected === item.label
                ? "text-[#FDF7FA] bg-[#14591D]"
                : "bg-[#ECECEC] text-[#767676]"
            } font-semibold cursor-pointer transition-all ease-in-out duration-300 text-[16px] rounded-full px-[25px] py-[12px]`}
            key={i}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-x-[20px] pt-[30px] items-center">
        <button className="px-[25px] bg-[#14591D]  text-white text-[18px] py-[16px] rounded-[15px] rounded-tl-[0px]">
          🚀 Let's go!
        </button>
        <button className="px-[25px] border border-[#12151A]/30 text-[#080705] text-[18px] py-[16px] rounded-[15px] rounded-tl-[0px]">
          🎉 Inspire me!
        </button>
      </div>
    </div>
  );
};
