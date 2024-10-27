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
    <div>
      {" "}
      <div className="pt-[60px] max-w-[1240px] mx-auto flex flex-wrap justify-center items-center gap-[30px]">
        {data.map((item, i) => (
          <div
            className="rounded-[20px] p-[30px] md:w-[393px] flex flex-col justify-center items-center gap-y-[30px] bg-[#945600]/5"
            key={i}
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="text-[#040F16] font-clashDisplay text-center text-[24px] font-semibold">
                {item.title}
              </h3>
              <p className="pt-[15px] font-inter text-[#767676] font-medium text-[14px] text-center ">
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
