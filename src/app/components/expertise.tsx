import { HomeExpertiseData } from "@/constant";
import React from "react";

const Expertise = () => {
  return (
    <div className="pt-[1px] md:pt-[60px] px-[10px] md:px-10">
      <h2 className="font-semibold font-clashDisplay leading-[110%] text-center text-[22px] md:text-[48px] ">
        But the fault of these <br className="md:block hidden" /> parties is their <span className="text-[#14591D]">KaliTrip</span>
      </h2>
      <div className="pt-[30px] md:pt-[60px] md:max-w-[1240px] mx-auto justify-center items-center grid grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[30px]">
        {HomeExpertiseData.map((item, i) => (
          <div

            className={` ${HomeExpertiseData.length === (i+1) && 'col-span-2 md:col-span-1  mx-auto md:max-w-full max-w-[183px]'}  rounded-[10px]  h-fit md:h-[259px] md:w-fit md:rounded-[20px] px-[10px] py-[15px] md:py-[30px] md:px-[20px] flex flex-col justify-center items-center gap-[20px] md:gap-y-[30px] bg-[#945600]/5`}
            key={i}
          >
            <div className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]" >{item.icon}</div>
            <div>
              <h3 className="text-[#040F16] font-clashDisplay text-center text-[14px] md:text-[24px] md:leading-[24px] leading-[14px] font-semibold">
                {item.title}
              </h3>
              <p className="pt-[7px] md:pt-[15px] font-inter text-[#767676] font-medium text-[8px] md:text-[14px] text-center ">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
