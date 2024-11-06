/* eslint-disable react/no-unescaped-entities */
"use client";

import CoverImage from "@/assets/images/hero-cover.webp";
import MobileBackground from "@/assets/images/mobile-hero-cover.webp";
import Logo from "@/assets/images/logo.webp";
import Image from "next/image";
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
import LanguageDropdown from "./languageDropown";
import Menu from "@/assets/icons/Menu.svg";
import Close from "@/assets/icons/Close.svg";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1200);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="flex px-0 lg:px-[20px] mx-auto justify-between items-center">
      <Image src={Logo} alt="Logo" className="max-w-[110px] md:max-w-[170px]" />
      <ul
        className={`hidden ${
          isLargeScreen ? "translate-x-20" : ""
        } lg: md:translate-x-10 lg:flex md:gap-[20px] lg:gap-x-[40px] items-center`}
      >
        {navLinks.slice(0, !isLargeScreen ? 2 : 4).map((item, i) => (
          <li key={i}>
            <p className="md:text-[14px] hover:font-semibold lg:text-[18px] transition-all duration-300 ease-in-out font-clashDisplay cursor-pointer hover:text-[#14591D] text-[#FDF7FA]">
              {item.label}
            </p>
          </li>
        ))}
        {!isLargeScreen && (
          <li className="relative" onMouseEnter={() => setIsDropdownOpen(true)}>
            <p className="md:text-[14px] lg:text-[18px] transition-all duration-300 ease-in-out font-clashDisplay cursor-pointer hover:text-[#14591D] text-[#FDF7FA]">
              More
            </p>
            {isDropdownOpen && (
              <ul
                onMouseLeave={handleDropdownToggle}
                className="absolute overflow-hidden top-full mt-2 bg-white shadow-lg rounded-md text-black"
              >
                {navLinks.slice(2).map((item, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 font-clashDisplay cursor-pointer hover:bg-gray-200"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        )}
      </ul>
      <div className="flex items-center gap-x-[20px]">
        <div className="hidden md:flex">
          <LanguageDropdown />
        </div>
        <button className="md:px-[25px] leading-[12px] px-[17px] md:leading-[18px] border border-[#FDF7FA]/30 whitespace-nowrap text-[12px] md:text-[18px] text-white py-[9px] h-fit md:py-[16px] rounded-[7px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
          Sign Up
        </button>
        <button className="md:px-[25px] leading-[12px] px-[17px] md:leading-[18px] bg-[#14591D] text-white text-[12px] md:text-[18px] py-[9px] h-fit md:py-[16px] rounded-[7px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
          Login
        </button>
        <div onClick={() => setisOpen(!isOpen)} className="md:hidden block">
          {isOpen ? (
            <div className="w-[20px] text-white h-[20px]">
              <Close />
            </div>
          ) : (
            <div className="w-[20px] text-white h-[20px]">
              <Menu />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="w-32 bg-white z-50 px-4 py-2 rounded-[12px]  absolute top-14 right-4">
          {navLinks.map((item, i) => (
            <p
              key={i}
              className="md:text-[14px] lg:text-[18px] transition-all duration-300 ease-in-out font-clashDisplay cursor-pointer hover:text-[#14591D] text-[#1a1a1a]"
            >
              {item.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

// const Header = () => {
//   return (
//     <div className="flex px-0 md:px-[20px]  mx-auto justify-between items-center">
//       <Image src={Logo} alt="" className="max-w-[110px] md:max-w-[170px]" />
//       <ul className="hidden   lg:flex md:gap-[20px] lg:gap-x-[40px] translate-x-20  items-center">
//         {navLinks.map((item, i) => (
//           <li key={i}>
//             {" "}
//             <p className="md:text-[14px] lg:text-[18px]  transition-all duration-300 ease-in-out font-clashDisplay cursor-pointer hover:text-[#14591D]  text-[#FDF7FA]">
//               {item.label}
//             </p>{" "}
//           </li>
//         ))}
//       </ul>
//       <div className="flex gap-x-[20px]">
//         <div className=" hidden md:flex ">
//           <LanguageDropdown/>
//         </div>
//         <button className="md:px-[25px] px-[17px] md:leading-[18px] border border-[#FDF7FA]/30  whitespace-nowrap text-[12px]  md:text-[18px] text-white  py-[9px] h-fit md:py-[16px] rounded-[7px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
//           Sign Up
//         </button>
//         <button className="md:px-[25px] px-[17px] md:leading-[18px] bg-[#14591D]  text-white text-[12px]  md:text-[18px] py-[9px] h-fit md:py-[16px] rounded-[7px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

const MainHero = () => {
  return (
    <div className="pt-[61px]">
      <div className="flex items-start justify-center">
        <div className="md:translate-x-14 lg:translate-x-24 translate-x-4">
          <Image
            src={PlanIcon}
            className="md:w-[50px] lg:w-[80px] w-[30px] "
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
  // const [selected, setselected] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const handleFilterClick = (label: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((item) => item !== label)
        : [...prevSelected, label]
    );
  };

  const handleTravelersChange = (travelers: TravelersCount) => {
    console.log("Selected travelers:", travelers);
  };
  return (
    <div className="-translate-y-20 heroFilterBgShadow md:-translate-y-20 pb-[20px] bg-white rounded-[15px] md:rounded-[20px] md:max-w-[1240px] mx-auto pt-[20px] md:pt-[50px] px-[20px] md:px-[30px]">
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
      <div className="flex justify-center flex-wrap px-[0px] md:px-20 gap-y-[15px] md:gap-y-[30px] gap-x-[15px] md:gap-x-[40px] border-b border-[#E6E6E6] py-[30px] items-center">
        {FilterOptions.map((item, i) => (
          <div
            onClick={() => handleFilterClick(item.label)}
            className={`${
              selected.includes(item?.label)
                ? "text-[#FDF7FA] bg-[#14591D]"
                : "bg-[#ECECEC] text-[#767676]"
            } font-semibold cursor-pointer transition-all ease-in-out duration-300 text-[12px] md:text-[16px] rounded-full px-[15px] md:px-[25px] py-[9px] md:py-[12px]`}
            key={i}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-x-[20px] pt-[30px] items-center">
        <Link href={"/result"}>
          <button className="md:px-[25px]  leading-[12px]s  px-[27px] md:leading-[18px] bg-[#14591D] text-white text-[12px] md:text-[18px] py-[9px] h-fit md:py-[16px] rounded-[7px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
            🚀 Let's go!
          </button>
        </Link>

        <button className="md:px-[25px]  leading-[12px]s px-[17px] md:leading-[18px] border       border-[#12151A]/30 text-[#080705]  whitespace-nowrap text-[12px] md:text-[18px] py-[9px] h-fit md:py-[16px] rounded-[7px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
          🎉 Inspire me!
        </button>
      </div>
    </div>
  );
};
