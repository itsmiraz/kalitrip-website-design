import React from "react";
import Customization from "@/assets/icons/expertise/customization.svg";
import EaseOfUse from "@/assets/icons/expertise/EaseOfUse.svg";
import Ecofriendly from "@/assets/icons/expertise/EcoFriendly.svg";
import SaveTime from "@/assets/icons/expertise/SaveTime.svg";
import Budget from "@/assets/icons/expertise/Budget.svg";
import Random from "@/assets/icons/expertise/Random.svg";
import Filter from "@/assets/icons/expertise/SpecelizedFilter.svg";
import DirectLink from "@/assets/icons/expertise/DirectLink.svg";
import Trending from "@/assets/icons/expertise/Trending.svg";

const Expertise = () => {
  const data = [
    {
      icon: <Customization />,
      title: "Full customization",
      desc: "The bot offers tailor-made itineraries based on your preferences, whether for cultural, nature or adventure trips.",
    },
    {
      icon: <EaseOfUse />,
      title: "Ease of use",
      desc: "With an intuitive interface, no technical skills are required to create a suitable route.",
    },
    {
      icon: <Ecofriendly />,
      title: "Eco-friendly",
      desc: "Eco-friendly travel options for sustainable and eco-responsible itineraries.",
    },
    {
      icon: <SaveTime />,
      title: "Save time",
      desc: "The bot makes planning your trip easier by instantly providing you with route suggestions without lengthy research.",
    },
    {
      icon: <Budget />,
      title: "Budget flexibility",
      desc: "Tailor your trips to your budget, with recommendations optimized for each price range.",
    },
    {
      icon: <Random />,
      title: "Random discovery",
      desc: "Let yourself be surprised with random destinations that fit your budget, for unexpected and exciting trips.",
    },
    {
      icon: <Filter />,
      title: "Specialized filters",
      desc: "Personalize your trips even more with filters like “eco-friendly,” “nature,” or “cultural discovery” for a unique experience.",
    },
    {
      icon: <DirectLink />,
      title: "Direct links to book",
      desc: "After choosing an itinerary, you receive direct links to make your reservations, making every step of the preparation easier.",
    },
    {
      icon: <Trending />,
      title: "Trending recommendations",
      desc: "The bot suggests the hottest destinations of the moment to inspire you in choosing your next adventure.",
    },
  ];

  return (
    <div className="pt-[100px] px-10">
      <h2 className="font-semibold font-clashDisplay leading-[110%] text-center text-[48px] ">
        But the fault of these <br /> parties is their KaliTrip
      </h2>
      <div className="pt-[60px] max-w-[1240px] mx-auto grid grid-cols-3 gap-[30px]">
        {data.map((item, i) => (
          <div
            className="rounded-[20px] p-[30px] flex flex-col justify-center items-center gap-y-[30px] bg-[#945600]/5"
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
