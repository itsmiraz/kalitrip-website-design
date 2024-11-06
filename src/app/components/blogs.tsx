import React from "react";
import BlogCover from "@/assets/images/blogCover.png";
import Image from "next/image";
import Calender from "@/assets/icons/Calender.svg";
import BlogCover1 from "@/assets/images/blogs/blogCover1.jpg";
import BlogCover2 from "@/assets/images/blogs/blogCover2.png";
import BlogCover3 from "@/assets/images/blogs/blogCover3.png";
import BlogCover4 from "@/assets/images/blogs/blogCover4.png";
import LeftArrow from "@/assets/icons/LeftArrow.svg"
const Blogs = () => {
  const otherBlogs = [
    {
      img: BlogCover1,
      title: "Discover Hidden Gems.",
      desc: "Uncover the best-kept secrets of travel destinations with this insightful guide.",
    },
    {
      img: BlogCover2,
      title: "Travel on a Budget.",
      desc: "Learn how to explore the world without breaking the bank with these practical tips.",
    },
    {
      img: BlogCover3,
      title: "Adventure Awaits You.",
      desc: "Dive into thrilling adventures and make unforgettable memories with this post.",
    },
    {
      img: BlogCover4,
      title: "Culinary Journeys.",
      desc: "Embark on a gastronomic adventure and savor the flavors of the world.",
    },
  ];

  return (
    <div className="pt-[50px] md:pt-[80px]  px-[16px] md:px-10">
      <h2 className="text-[#040F16] font-clashDisplay pb-[10px] md:pb-[20px] text-[22px] md:text-[48px] text-center  font-semibold">
        Our Recent <span className="text-[#14591D]">Blogs</span>
      </h2>
      <p className="text-[#767676] font-medium  font-inter text-center text-[10px] md:text-[18px]">
        Surround yourself with the community and resources to help <br /> bring
        your vision to life.
      </p>

      <div className="pt-[60px] w-full place-items-center mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-[30px] gap-x-[50px] md:max-w-[1240px]">
        {/* cover */}

        <div>
          <Image src={BlogCover} alt="" />
          <div className="mt-[30px]  font-inter flex items-center w-fit md:w-[179px] text-heading-color font-semibold gap-x-[7px] justify-center  text-[10px] md:text-[14px] py-[9px] md:py-[10px] px-[13px] md:px-[20px] bg-[#040F16]/10 rounded-full">
            <Calender />
            <p>24 October 2024</p>
          </div>
          <h2 className="text-[18px] md:text-[24px] mt-[20px] font-clashDisplay md:leading-[24px] font-semibold text-heading-color pb-[15px]">
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
          <button className="md:px-[25px] gap-x-1 mt-[40px] flex justify-center items-center px-[17px] md:leading-[18px] bg-[#14591D] text-white text-[12px] md:text-[18px] py-[9px] h-fit md:py-[16px] rounded-[7px] md:rounded-[15px] rounded-tl-[0px] md:rounded-tl-[0px]">
            Read More   <span className="md:w-[18px] md:h-[18px] w-[15px] h-[15px]"><LeftArrow/></span>
          </button>
        </div>

        {/* others */}
        <div className="space-y-[40px]">
          {otherBlogs.map((item, i) => (
            <div className="flex gap-x-[20px]" key={i}>
             <div>
             <div className="w-[164px] h-full  md:w-[200px] md:h-[145px] overflow-hidden  rounded-[20px]">
                <Image
                  src={item.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
             </div>
              <div>
                <div className=" font-inter flex items-center w-fit md:w-[179px] text-heading-color font-semibold gap-x-[7px] justify-center  text-[10px] md:text-[14px] py-[8px] md:py-[10px] px-[20px] bg-[#040F16]/10 rounded-full">
                  <Calender />
                  <p className="whitespace-nowrap">24 October 2024</p>
                </div>
                <h2 className="text-[18px]  md:text-[24px] font-clashDisplay leading-[19px] md:leading-[24px] mt-[15px] md:mt-[20px] font-semibold text-heading-color pb-[10px]">
                  {item.title}
                </h2>
                <p className="text-[#767676] font-inter leading-[120%] text-[10px] md:text-[14px] font-medium ">
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
