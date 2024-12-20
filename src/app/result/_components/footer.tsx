/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.webp";

import XICon from "@/assets/icons/social/Xicon.svg";
import Facebook from "@/assets/icons/social/Facebook.svg";
import Insta from "@/assets/icons/social/Insta.svg";
import Youtube from "@/assets/icons/social/Youtube.svg";
import Tiktok from "@/assets/icons/social/Tiktok.svg";
import Discord from "@/assets/icons/social/Discord.svg";

import Phone from "@/assets/icons/PhoneIcon.svg";
import Mail from "@/assets/icons/MailIcon.svg";
import Location from "@/assets/icons/LocationIcon.svg";

import Image1 from "@/assets/images/footerImages/image1.png";
import Image2 from "@/assets/images/footerImages/image-2.png";
import Image3 from "@/assets/images/footerImages/image-8.png";
import Image4 from "@/assets/images/footerImages/image4.png";
import Image5 from "@/assets/images/footerImages/image-5.png";
import Image6 from "@/assets/images/footerImages/image6.png";
import Image7 from "@/assets/images/footerImages/image7.png";
import Image8 from "@/assets/images/footerImages/image-8.png";
import Image9 from "@/assets/images/footerImages/image9.png";

import HoverOverLayIcon from "@/assets/icons/OverlayIcon.svg";

import CopyRightIcon from "@/assets/icons/CopyRightIcon.svg";
import UpArrow from "@/assets/icons/UpArrow.svg";
const Footer = () => {
  const socialLinks = [
    {
      link: "/",
      icon: <XICon />,
    },
    {
      link: "/",
      icon: <Facebook />,
    },
    {
      link: "/",
      icon: <Insta />,
    },
    {
      link: "/",
      icon: <Youtube />,
    },
    {
      link: "/",
      icon: <Tiktok />,
    },
    {
      link: "/",
      icon: <Discord />,
    },
  ];

  const FooterImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ];

  return (
    <div>
      <div className="bg-[#040F16] md:px-0 px-[20px] pb-[11px]  pt-[60px]">
      <div className="max-w-[1240px] flex md:flex-row flex-col justify-center  md:justify-between mx-auto">
          <div className="w-full max-w-full md:max-w-[192px] flex flex-col md:justify-start items-center justify-center ">
            <div className="md:mx-0 flex justify-center md:justify-start  w-full">
              <Image src={Logo} alt="" />
            </div>
            <div className="mt-[30px] md:mt-[0px]">
              <h3 className="font-semibold block md:hidden   text-[16px] md:text-[24px] mb-[0px] md:text-start text-center font-clashDisplay  text-[#FDF7FA] ">
                Follow us
              </h3>
              <div className="flex mt-[20px] md:mt-[40px] justify-center md:justify-start flex-wrap gap-[16px]">
                {socialLinks.map((item, i) => (
                  <div
                    className="bg-[#FDF7FA]/10 text-[#FDF7FA]/30 hover:text-[#FDF7FA] flex justify-center items-center hover:bg-[#14591D] w-[36px] h-[36px]  cursor-pointer rounded-full  border border-[#FDF7FA]/20 backdrop-blur"
                    key={i}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-[30px] mt-[30px] md:mt-0 md:pt-[0px]  border-t border-[#696969] md:border-none">
            <h3 className="font-semibold text-[16px] md:text-[24px] mb-[20px] md:mb-[30px] md:text-start text-center font-clashDisplay  text-[#FDF7FA] ">
              Ease of use
            </h3>
            <ul className="space-y-[10px] md:space-y-[20px] md:text-start text-center font-inter">
              <li>
                <p className="text-[#ABABAB]  cursor-pointer    hover:font-semibold hover:text-[#14591D] text-[12px] md:leading-[100%]  md:text-[18px]">
                  Welcome
                </p>
              </li>
              <li>
                <p className="text-[#ABABAB]  cursor-pointer    hover:font-semibold hover:text-[#14591D] text-[12px]  md:leading-[100%] md:text-[18px]">
                  Features
                </p>
              </li>
              <li>
                <p className="text-[#ABABAB]   cursor-pointer   hover:font-semibold hover:text-[#14591D] text-[12px]  md:leading-[100%] md:text-[18px]">
                  Testimonials
                </p>
              </li>
              <li>
                <p className="text-[#ABABAB]   cursor-pointer   hover:font-semibold hover:text-[#14591D] text-[12px]  md:leading-[100%] md:text-[18px]">
                  Blog
                </p>
              </li>
              <li>
                <p className="text-[#ABABAB]  cursor-pointer    hover:font-semibold hover:text-[#14591D] text-[12px]  md:leading-[100%] md:text-[18px]">
                  Boutique
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-[30px] md:mt-0">
            <h3 className="font-semibold md:text-start text-center text-[16px] md:text-[24px] mb-[20px] md:mb-[30px] font-clashDisplay   text-[#FDF7FA] ">
              Contact Info.
            </h3>
            <ul className="space-y-[14px] md:space-y-[16px] md:text-start text-center font-inter">
              <li className="flex md:justify-start justify-center  gap-x-[17px]">
                <Phone />
                <p className="text-[12px] md:text-[18px]   text-[#ABABAB]">
                  +33 05 51 90 02 80
                </p>
              </li>
              <li className="flex md:justify-start justify-center  gap-x-[17px]">
                <div>
                  <Mail />
                </div>
                <p className="text-[12px] md:text-[18px]   text-[#ABABAB]">
                  Kalitrip@gmail.com
                </p>
              </li>
              <li className="flex md:justify-start justify-center  gap-x-[17px]">
                <Location />
                <p className="text-[12px] md:text-[18px]   text-[#ABABAB]">
                  85 rue Marie de Médicis, <br /> Blagnac, France.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center md:justify-start md:mt-0 mt-[40px] max-w-full md:max-w-[266px] flex-wrap gap-y-[10px] gap-x-[10px]">
            {FooterImages.map((item, i) => (
              <ImageIcon item={item} i={i} key={i} />
            ))}
          </div>
        </div>
        <div className="max-w-[1240px] py-[10px] px-[20px] mx-auto mt-[50px] bg-[#FFFFFF]/10 backdrop-blur flex justify-between items-center rounded-[15px]">
          <div className="flex items-center gap-x-2">
            <CopyRightIcon />
            <p className="font-inter text-[12px] md:text-[18px] font-medium text-[#ABABAB]">
              2024 - Kalitrip Copyright All Right reserved
            </p>
          </div>
          <div>
            <a href="/#hero">
              <button>
                <UpArrow />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

export const ImageIcon = ({ item, i }: { item: any; i: number }) => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer rounded-[7px]  overflow-hidden"
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      key={i}
    >
      <div
        key={i}
        className="relative  z-10 w-[114px] md:w-[82px] md:rounded-[10px] overflow-hidden h-[68px] "
      >
        <Image
          key={i}
          className="w-full object-cover h-full"
          alt=""
          src={item}
        />
      </div>
      {isHovered && (
        <div className="bg-[#14591D]/85 absolute top-0 left-0 z-30 w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <HoverOverLayIcon />
          </div>
        </div>
      )}
    </div>
  );
};
