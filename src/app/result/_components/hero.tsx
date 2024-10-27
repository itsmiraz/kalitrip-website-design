/* eslint-disable react/no-unescaped-entities */
"use client";

import CoverImage from "@/assets/images/result-page-hero-cover.webp";
import Logo from "@/assets/images/logo-black.png";
import Image from "next/image";
import Earth from "@/assets/icons/Earth.svg";
import ArrowDown from "@/assets/icons/ArrowDown.svg";
import { FilterOptions } from "@/constant";
import Link from "next/link";
import LocationInput from "@/app/components/locationInput";
import SelectDateRange from "@/app/components/selectDateRange";
import SelectTravelers, {
  TravelersCount,
} from "@/app/components/selectTraveler";
import BudgetSelector from "@/app/components/budgetSelector";

import NinjaStar from "@/assets/icons/NinjaStar.svg";
import ShareIcon from "@/assets/icons/Share.svg";
import SaveIcon from "@/assets/icons/Save.svg";
import MailIcon from "@/assets/icons/MailIcon.svg";

const Hero = () => {
  return (
    <div id="hero" className=" pt-[20px]">
      {/* Header */}
      <Header />
      <div
        style={{
          backgroundImage: `url(${CoverImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[572px] px-10"
      ></div>
      {/* Filter */}
      <Filter />
    </div>
  );
};

export default Hero;

const Header = () => {
  return (
    <div className="flex px-10 pb-[20px]  mx-auto justify-between items-center">
      <Link href={"/"}>
        <Image src={Logo} alt="" className="max-w-[170]" />
      </Link>

      <div className="flex  items-center gap-x-[20px]">
        <div className="flex  h-fit text-[#040F16] bg-[#040F16]/10 border border-[#FDF7FA]/40 rounded-full items-center gap-x-[15px] px-[25px] py-4">
          <div className="flex text-[#040F16] gap-x-[7px] items-center">
            <Earth />
            <p className="text-[18px] leading-[15px] font-clashDisplay font-medium ">En</p>
          </div>
          <ArrowDown />
        </div>
        <button className="px-[25px]  h-fit leading-[15px] font-clashDisplay border border-[#040F16]/30  text-[#040F16] py-[16px] rounded-[15px] rounded-tl-[0px]">
          Sign Up
        </button>
        <button className="px-[25px] h-fit  leading-[18px] font-semibold font-clashDisplay bg-[#14591D]  text-white text-[18px] py-[16px] rounded-[15px] rounded-tl-[0px]">
          Login
        </button>
      </div>
    </div>
  );
};

const Filter = () => {
  const handleTravelersChange = (travelers: TravelersCount) => {
    console.log("Selected travelers:", travelers);
  };
  return (
    <div className="-translate-y-20 pb-[20px] bg-white drop-shadow rounded-[20px] max-w-[1240px] mx-auto pt-[50px] px-[30px]">
      <h2 className="text-center  pb-[50px] text-[36px] text-heading-color font-semibold font-clashDisplay">
        Travel Itinerary
      </h2>
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
        {FilterOptions.slice(1, 3).map((item, i) => (
          <div
            className={`font-semibold  gap-x-[10px] flex items-center text-heading-color font-clashDisplay cursor-pointer transition-all ease-in-out duration-300 text-[16px] rounded-full px-[25px] py-[12px]`}
            key={i}
          >
            <NinjaStar /> {item.label}
          </div>
        ))}
      </div>
      <div className="flex justify-center  gap-x-[20px] pt-[30px] items-center">
        <button className="px-[25px] bg-[#14591D]  leading-[15px] h-fit text-[#FDF7FA] font-semibold font-clashDisplay text-[18px] py-[16px] rounded-[15px] rounded-tl-[0px]">
          Modify Search
        </button>
        <div className="flex items-center gap-x-[20px] ">
          <p className="text-heading-color items-center flex font-semibold font-clashDisplay">
            Share :{" "}
          </p>
          <div className="flex items-center gap-x-[16px] ">
            <div>
              <ShareIcon />
            </div>
            <div>
              <SaveIcon />
            </div>
            <div>
              <MailIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
