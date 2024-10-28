/* eslint-disable react/no-unescaped-entities */
"use client";

import CoverImage from "@/assets/images/hero-cover.webp";
import MobileBackground from "@/assets/images/mobile-hero-cover.webp";
import Logo from "@/assets/images/logo.webp";
import Image from "next/image";
import Earth from "@/assets/icons/Earth.svg";
import ArrowDown from "@/assets/icons/ArrowDown.svg";
// import Location from "@/assets/icons/Location.svg";
import PlanIcon from "@/assets/images/plan-icon.png";
// import SelectBudget from "@/assets/icons/SelectBudget.svg";
import { useEffect, useState } from "react";
import LocationInput from "./locationInput";
import SelectDateRange from "./selectDateRange";
import SelectTravelers, { TravelersCount } from "./selectTraveler";
import BudgetSelector from "./budgetSelector";
import Link from "next/link";
import { FilterOptions, navLinks } from "@/constant";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="hero">
      <div
        style={{
          backgroundImage: `url(${
            isMobile ? MobileBackground.src : CoverImage.src
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[573px] md:h-[913px] px-[20px] md:px-10 pt-[20px]"
      >
        {/* Header */}
       <div>
       <Header />
       </div>

        {/* Hero */}
        <MainHero />
      </div>
      {/* Filter */}
      <div className="md:px-0 px-[20px]">
        <Filter />
      </div>
    </div>
  );
};

export default Hero;

const Header = () => {
  return (
    <div className="flex px-0 md:px-[20px]  mx-auto justify-between items-center">
      <Image src={Logo} alt="" className="max-w-[110px] md:max-w-[170px]" />
      <ul className="hidden lg:flex gap-x-[40px] translate-x-20  items-center">
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
        <div className=" hidden md:flex bg-[#FDF7FA]/10  h-fit border border-[#FDF7FA]/40 rounded-full items-center gap-x-[15px] text-white px-[25px] py-4">
          <div className="flex gap-x-[7px] items-center">
            <Earth />
            <p className="text-[18px] md:leading-[18px] font-medium font-clashDisplay text-[#FDF7FA]">
              En
            </p>
          </div>
          <ArrowDown />
        </div>
        <button className="md:px-[25px] px-[17px] md:leading-[18px] border border-[#FDF7FA]/30  whitespace-nowrap text-[12px]  md:text-[18px] text-white  py-[9px] h-fit md:py-[16px] rounded-[7px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
          Sign Up
        </button>
        <button className="md:px-[25px] px-[17px] md:leading-[18px] bg-[#14591D]  text-white text-[12px]  md:text-[18px] py-[9px] h-fit md:py-[16px] rounded-[7px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
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
        <div className="md:translate-x-14 lg:translate-x-24 translate-x-2">
          <Image
            src={PlanIcon}
            className="md:size-[50px] lg:size-[80px] size-[30px] "
            alt=""
          />
        </div>
        <h1 className="text-[24px] md:text-[42px] lg:text-[68px]  font-clashDisplay text-white text-center leading-[32px] md:leading-[110%] font-semibold">
          Why is it so absurd? <br /> to delight in many inanimate <br />{" "}
          <span className="text-[#14591D]">things 500€</span>
        </h1>
      </div>
      <p className="text-[12px] md:text-[22px] font-inter text-white text-center md:leading-[30px] leading-[16px] font-medium pt-[10px] md:pt-[20px]">
        KaliTrip allows you to organize your trips more efficiently,
        with personalized <br className="lg:block hidden" /> itineraries that
        adapt to your preferences and your budget .
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
    <div className="-translate-y-32 md:-translate-y-20 pb-[20px] bg-white drop-shadow rounded-[15px] md:rounded-[20px] md:max-w-[1240px] mx-auto pt-[20px] md:pt-[50px] px-[20px] md:px-[30px]">
      <div className="md:flex-row  flex-wrap gap-x-[10px] gap-y-[20px] flex-col flex pb-[30px] border-b border-[#E6E6E6] md:justify-center lg:justify-between items-center">
        <div className="  w-full md:w-fit">
          <LocationInput label="Where are you Coming from" />
        </div>

        <div className="  w-full md:w-fit">
          <LocationInput label="Where do you want to go?" />
        </div>

        <div className="md:w-fit w-full">
          <SelectDateRange />
          {/* <SelectDate /> */}
        </div>
        <div className="md:w-fit w-full">
          <SelectTravelers onChange={handleTravelersChange} />
        </div>
        <div className="md:w-fit w-full">
          <BudgetSelector />
        </div>
      </div>
      <div className="flex  justify-center flex-wrap px-[17px] md:px-20 gap-y-[20px] md:gap-y-[30px] gap-x-[20px] md:gap-x-[40px] border-b border-[#E6E6E6] py-[30px] items-center ">
        {FilterOptions.map((item, i) => (
          <div
            onClick={() => setselected(item.label)}
            className={`${
              selected === item.label
                ? "text-[#FDF7FA] bg-[#14591D]"
                : "bg-[#ECECEC] text-[#767676]"
            } font-semibold cursor-pointer transition-all ease-in-out duration-300 text-[8px] md:text-[16px] rounded-full px-[15px] md:px-[25px] py-[9px] md:py-[12px]`}
            key={i}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-x-[20px] pt-[30px] items-center">
        <Link href={"/result"}>
          <button className="px-[12px] md:px-[25px] bg-[#14591D]  text-white text-[12px]  md:text-[18px] py-[9px] h-fit font-clashDisplay md:py-[16px] rounded-[10px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
            🚀 Let's go!
          </button>
        </Link>
        <button className="px-[12px] md:px-[25px] border border-[#12151A]/30 text-[#080705] text-[12px]  md:text-[18px] py-[9px] h-fit font-clashDisplay md:py-[16px] rounded-[10px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
          🎉 Inspire me!
        </button>
      </div>
    </div>
  );
};
