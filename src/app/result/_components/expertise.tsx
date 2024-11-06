import React from "react";

import TimeIcon from "@/assets/icons/TimeOptimisation.svg";
import Safety from "@/assets/icons/Safety.svg";
import LocalEvents from "@/assets/icons/LocalEvents.svg";
import Enviromental from "@/assets/icons/EnviromentImpact.svg";
import PracticalTips from "@/assets/icons/PracticalTips.svg";

const Expertise = () => {
  const data = [
    {
      icon: <TimeIcon />,
      title: "Time optimization",
      desc: "Book tickets in advance for popular sites like Lalbagh Fort Visit the markets early in the morning to avoid the crowds",
    },
    {
      icon: <Safety />,
      title: "Alternatives and safety",
      desc: "In case of rain, visit the Liberation War Museum in Dhaka. Stay vigilant in crowded areas Keep your valuables safe",
    },
    {
      icon: <LocalEvents />,
      title: "Local events",
      desc: "Attend the Dhaka Film Festival if it is taking place during your stay",
    },
    {
      icon: <Enviromental />,
      title: "Environmental Impact",
      desc: "Use a reusable water bottle and avoid single-use plastics.",
    },
    {
      icon: <PracticalTips />,
      title: "Practical Tips",
      desc: "Pack light and covering clothing that respects local customs, Bring a universal electrical adapter. ",
    },
  ];

  return (
    <div className="pb-[40px]">
      {" "}
      <div className="px-[16px] pb-[16px] md:pb-[60px] place-items-center place-content-center   w-full md:max-w-[1440px] mx-auto grid-cols-2 grid md:flex flex-wrap justify-center items-center gap-[16px] md:gap-[30px]">
        {data.map((item, i) => (
          <div
            className={`${data.length === (i+1) && 'col-span-2 mx-auto max-w-[190px] md:max-w-fit '} rounded-[10px] md:rounded-[20px] px-[10px] py-[15px] md:py-[30px] md:px-[30px] h-full  w-full md:h-fit md:w-[393px] flex flex-col justify-center items-center gap-y-[30px] bg-[#945600]/5`}
            key={i}
          >
            <div className="md:w-[70px] w-[40px] h-[40px] md:h-[70px]">{item.icon}</div>
            <div>
            <h3 className="text-[#040F16] font-clashDisplay text-center text-[14px] md:text-[24px] md:leading-normal leading-[14px] font-semibold">
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
