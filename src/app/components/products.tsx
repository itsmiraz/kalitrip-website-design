import React from "react";
import CartIcon from "@/assets/icons/CartIcon.svg";
import Image from "next/image";
import Colors from "@/assets/icons/Colors.svg";
import LeftArrow from "@/assets/icons/LeftArrow.svg";
import { Productsdata } from "@/constant";

const Products = () => {
  return (
    <div className="pt-[60px] md:pt-[120px]">
      <h2 className="text-[#040F16] font-clashDisplay pb-[20px] md:pb-[40px] text-[22px] md:text-[48px] text-center  font-semibold">
        Trending products
      </h2>
      <div className="p-[3px] md:p-[5px] pr-6 md:pr-0 md:text-[14px] text-[8px] gap-x-[15px] md:gap-x-[40px] font-inter bg-[#14591D]/10 flex rounded-[25px] max-w-fit md:max-w-[484px]  mx-auto  border border-[#CECECE]">
        <button className="text-white bg-[#14591D] px-[10px] py-[8px] md:px-[25px] md:py-[13px] rounded-full font-semibold">
          All
        </button>
        <button className="text-[#14591D]">T-shirt</button>
        <button className="text-[#14591D]">Shoes</button>
        <button className="text-[#14591D] whitespace-nowrap">Sun glass</button>
        <button className="text-[#14591D] md:block hidden">Shirts</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-[16px] md:flex w-full flex-wrap pt-[30px] md:pt-[60px] gap-[16px] md:gap-[20px] justify-center items-center">
        {Productsdata.map((item, i) => (
          <div
            className="max-w-full md:max-w-[295px] border-[#CECECE] border bg-white rounded-[20px] p-[10px]"
            key={i}
          >
            <div className="relative">
              <Image src={item.img} alt=" " className="w-full" />
              <div className="absolute top-4 right-4">
                <CartIcon />
              </div>
            </div>
            <div className="pt-[20px] md:pt-[30px] px-[5px]">
              <div className="md:mx-0 mx-auto flex justify-center items-center md:justify-start">
                {" "}
                <Colors />
              </div>
              <h3 className="text-center  md:text-start text-[14px] md:text-[20px] font-clashDisplay pt-[20px] font-semibold text-heading-color">
                {item.title}
              </h3>
              <p className="text-[8px] md:text-start text-center md:text-[12px] leading-[140%] font-inter text-[#767676]">
                {item.desc}
              </p>
            </div>
            <div className="flex pt-[25px] gap-x-[10px] items-center">
              <p className="bg-black  whitespace-nowrap  font-clashDisplay h-fit text-white text-[8px] md:text-[14px] font-semibold px-[16px] py-[10px] rounded-full">
                {item.price}
              </p>
              <button className="py-[8px] md:text-[14px] font-clashDisplay h-fit  w-full ease-in-out duration-300 transition-all rounded-full font-medium hover:font-bold hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex text-[8px] justify-center items-center text-center bg-white hover:bg-[#14591D] text-heading-color ">
                Buy Now <LeftArrow />{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="px-[21px] md:px-[25px] font-clashDisplay flex justify-center mt-[60px] items-center mx-auto gap-x-2  bg-[#14591D]  text-white text-[12px] md:text-[18px] py-[9px] h-fit md:py-[16px] rounded-[15px] rounded-tl-[0px]">
          See More{" "}
          <span className="text-white">
            <LeftArrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Products;
