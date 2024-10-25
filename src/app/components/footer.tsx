import Image from "next/image";
import React from "react";
import CTA from "@/assets/images/ctaImage.png";

const Footer = () => {
  return (
    <div className="mt-[120px]">
      <div className="max-w-[1240px] gap-x-[128px] items-center flex justify-between py-[30px] px-[80px] rounded-[30px] bg-[#945600] mx-auto">
        <Image src={CTA} alt="" />

        <div>
          <h2 className="text-[48px] pb-[15px] font-semibold  leading-[110%] text-[#FDF7FA]">
            Subscribe To The <br /> Newsletter
          </h2>
          <p className="text-[#D8D8D8] pb-[50px] text-[18px] font-medium leading-[140%] ">
            Surround yourself with the community and resources to help bring
            your vision to life.
          </p>
          <div className="bg-white pl-4 flex items-center h-[60px] p-[5px] relative rounded-[12px] ">
            <input placeholder="info@twintone.ai" type="text" className="placeholder:text-[#767676] border-none focus:outline-none " />
            <button className="absolute leading-[100%] font-bold text-[18px] px-[36px] rounded-[10px] bg-[#14591D] h-[50px] text-white right-1 top-1 ">
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
