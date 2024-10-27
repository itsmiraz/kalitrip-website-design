import React from "react";
import BlogCover from "@/assets/images/blogCover.png";
import Image from "next/image";
import Calender from "@/assets/icons/Calender.svg";

import LeftArrow from '@/assets/icons/LeftArrow.svg'
const Blogs = () => {
  const otherBlogs = [
    {
      img: BlogCover,
      title: "Plan the Perfect Vacation.",
      desc: "Planning a vacation can be overwhelming, but this post offers a step-by-step guide.",
    },
    {
      img: BlogCover,
      title: "Plan the Perfect Vacation.",
      desc: "Planning a vacation can be overwhelming, but this post offers a step-by-step guide.",
    },
    {
      img: BlogCover,
      title: "Plan the Perfect Vacation.",
      desc: "Planning a vacation can be overwhelming, but this post offers a step-by-step guide.",
    },
    {
      img: BlogCover,
      title: "Plan the Perfect Vacation.",
      desc: "Planning a vacation can be overwhelming, but this post offers a step-by-step guide.",
    },
  ];

  return (
    <div className="pt-[50px] md:pt-[120px] bg-[#945600]/5 px-[20px] md:px-10">
      <h2 className="text-[#040F16] font-clashDisplay pb-[10px] md:pb-[20px] text-[22px] md:text-[48px] text-center  font-semibold">
        Our Recent <span className="text-[#14591D]">Blogs</span>
      </h2>
      <p className="text-[#767676] font-medium  font-inter text-center text-[10px] md:text-[18px]">
        Surround yourself with the community and resources to help <br /> bring
        your vision to life.
      </p>

      <div className="pt-[60px] w-full place-items-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-[30px] gap-x-[50px] md:max-w-[1240px]">
        {/* cover */}

        <div>
          <Image src={BlogCover} alt="" />
          <div className="mt-[30px]  font-inter flex items-center w-fit md:w-[179px] text-heading-color font-semibold gap-x-[7px] justify-center  text-[10px] md:text-[14px] py-[9px] md:py-[10px] px-[13px] md:px-[20px] bg-[#040F16]/10 rounded-full">
            <Calender />
            <p>24 October 2024</p>
          </div>
          <h2 className="text-[18px] md:text-[24px] mt-[20px] font-clashDisplay font-semibold text-heading-color pb-[15px]">
            Plan the Perfect Vacation.
          </h2>
          <p className="text-[#767676] text-[10px] md:text-[14px] md:leading-normal leading-[14px] font-inter font-medium ">
            Planning a vacation can be overwhelming, but this post offers a
            step-by-step guide to help readers create a comprehensive travel
            itinerary. From choosing a destination to booking accommodations and
            activities, readers will learn how to plan a stress-free and
            enjoyable trip. From choosing a destination to booking
            accommodations and activities, but this post offers a step-by-step
            guide to help readers create a comprehensive travel itinerary. but
            this post offers a step-by-step guide to help readers create a
            comprehensive travel itinerary.
          </p>
          <button className="px-[17px] md:px-[25px] flex items-center gap-x-2 font-clashDisplay mt-[40px] bg-[#14591D]  text-white text-[12px] md:text-[18px] py-[9px] md:py-[16px] rounded-[15px] rounded-tl-[0px]">
            Read More <LeftArrow/>
          </button>
        </div>

        {/* others */}
        <div className="space-y-[40px]">
          {otherBlogs.map((item, i) => (
            <div className="flex gap-x-[20px]" key={i}>
              <div className="w-[164px] md:w-[200px] h-[110px] md:h-[145px] overflow-hidden  rounded-[20px]" >
                <Image src={item.img} alt=""  className="h-full w-full object-cover"/>
              </div>
              <div>
                <div className=" font-inter flex items-center w-fit md:w-[179px] text-heading-color font-semibold gap-x-[7px] justify-center  text-[10px] md:text-[14px] py-[8px] md:py-[10px] px-[20px] bg-[#040F16]/10 rounded-full">
                  <Calender />
                  <p>24 October 2024</p>
                </div>
                <h2 className="text-[18px] md:text-[24px] font-clashDisplay leading-[19px] md:leading-[100%] mt-[20px] font-semibold text-heading-color pb-[15px]">
                  {item.title}
                </h2>
                <p className="text-[#767676] font-inter leading-[140%] text-[10px] md:text-[14px] font-medium ">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
