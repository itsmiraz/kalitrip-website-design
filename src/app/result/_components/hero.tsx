/* eslint-disable react/no-unescaped-entities */
"use client";

import CoverImage from "@/assets/images/result-page-hero-cover.webp";
import MobileCoverImage from "@/assets/images/result-page-hero-cover.webp";
import Logo from "@/assets/images/logo-black.png";
import Image from "next/image";
// import Earth from "@/assets/icons/Earth.svg";
// import ArrowDown from "@/assets/icons/ArrowDown.svg";
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
import MailIcon from "@/assets/icons/MailFillIcon.svg";
import { useEffect, useState } from "react";
import LanguageDropdown from "@/app/components/languageDropown";

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
    <div id="hero" className=" pt-[20px]">
      {/* Header */}
      <Header />
      <div
        style={{
          backgroundImage: `url(${
            isMobile ? MobileCoverImage.src : CoverImage.src
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[170px] md:h-[572px] px-0  md:px-10"
      ></div>
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
    <div className="flex px-[20px] md:px-10 pb-[20px]  mx-auto justify-between items-center">
      <Link href={"/"}>
        <Image src={Logo} alt="" className="max-w-[110px] md:max-w-[170px]" />
      </Link>

      <div className="flex  items-center gap-x-[20px]">
        {/* <div className="hidden md:flex  h-fit text-[#040F16] bg-[#040F16]/10 border border-[#FDF7FA]/40 rounded-full items-center gap-x-[15px] px-[25px] py-4">
          <div className="flex text-[#040F16] gap-x-[7px] items-center">
            <Earth />
            <p className="text-[18px] leading-[15px] font-clashDisplay font-medium ">
              En
            </p>
          </div>
          <ArrowDown />
        </div> */}

        <div className="hidden md:flex">
          <LanguageDropdown variant={'dark'} />
        </div>

        {/* border border-[#040F16]/30 text-[#040F16]  */}
        <button className="md:px-[25px] px-[17px] md:leading-[18px] border       border-[#12151A]/30 text-[#080705]  whitespace-nowrap text-[12px] md:text-[18px] py-[9px] h-fit md:py-[16px] rounded-[7px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
          Sign Up
        </button>
        <button className="md:px-[25px] px-[17px] md:leading-[18px] bg-[#14591D] text-white text-[12px] md:text-[18px] py-[9px] h-fit md:py-[16px] rounded-[7px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
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
    <div className="-translate-y-20 pb-[20px] bg-white heroFilterBgShadow rounded-[20px] max-w-[1240px] mx-auto pt-[20px] md:pt-[50px] px-[20px] md:px-[30px]">
      <h2 className="text-center  md:block hidden pb-[50px] text-[36px] text-heading-color font-semibold font-clashDisplay">
        Travel Itinerary
      </h2>
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
      <div className="flex justify-center flex-wrap px-[10px] md:px-20 gap-y-[30px] gap-x-[15px] md:gap-x-[40px] border-b border-[#E6E6E6] py-[20px] md:py-[30px] items-center ">
        {FilterOptions.slice(1, 3).map((item, i) => (
          <div
            className={`font-semibold  gap-x-[10px] flex items-center text-heading-color font-clashDisplay cursor-pointer transition-all ease-in-out duration-300 text-[8px] md:text-[16px] rounded-full px-[1px] md:px-[25px] py-[12px]`}
            key={i}
          >
            <NinjaStar /> {item.label}
          </div>
        ))}
      </div>
      <div className="flex justify-center  gap-x-[20px] pt-[30px] items-center">
        <button className="md:px-[25px] px-[17px] md:leading-[18px] bg-[#14591D] text-white text-[12px] md:text-[18px] py-[9px] leading-[12px] h-fit md:py-[16px] rounded-[7px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
          Modify <span className="md:inline-block hidden">Search</span>
        </button>
        <div className="flex items-center gap-x-[20px] ">
          <p className="text-heading-color md:text-[18px] text-[12px] items-center flex font-semibold font-clashDisplay">
            Share :{" "}
          </p>
          <div className="flex items-center gap-x-[16px] ">
            <div className="w-[25px] h-[25px] md:w-[36px] md:h-[36px]">
              <ShareIcon />
            </div>
            <div className="w-[25px] h-[25px] md:w-[36px] md:h-[36px]">
              <SaveIcon />
            </div>
            <div className="w-[25px] h-[25px] md:w-[36px] md:h-[36px]">
              <MailIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
