import PlanIcon from "@/assets/icons/PlanIcon.svg";
import Check from "@/assets/icons/CheckMark.svg";
import LeftArrow from "@/assets/icons/LeftArrow.svg";
const PricingPlan = () => {
  const plans = [
    {
      name: "Basic Plan",
      price:
        "<span class='text-[#040F16] text-[38px]  font-semibold'>$1,600/</span>Monthly",
      price_note:
        "The price can vary widely depending on factors like the destination.",
      includes: [
        "One video short request/week",
        "All social media platform formats for each video (4+ videos/short)",
        "Storyboards and video flows",
        "Dynamic subtitles",
        "Animations",
        "Unlimited stock footage",
        "Pause or cancel at any time",
        "Simple credit card payments",
      ],
      cta: "Get Started",
    },
    {
      name: "Premium Plan",
      price:
        "<span class='text-[#040F16] text-[38px]  font-semibold'>$2,200/</span>Monthly",
      price_note:
        "The price can vary widely depending on factors like the destination.",
      includes: [
        "One video short request/week",
        "All social media platform formats for each video (4+ videos/short)",
        "Storyboards and video flows",
        "Dynamic subtitles",
        "Animations",
        "Unlimited stock footage",
        "Pause or cancel at any time",
        "Simple credit card payments",
      ],
      cta: "Get Started",
    },
    {
      name: "Business Plan",
      price:
        "<span class='text-[#040F16] text-[38px]  font-semibold'>$3,500/</span>Monthly",
      price_note:
        "The price can vary widely depending on factors like the destination.",
      includes: [
        "One video short request/week",
        "All social media platform formats for each video (4+ videos/short)",
        "Storyboards and video flows",
        "Dynamic subtitles",
        "Animations",
        "Unlimited stock footage",
        "Pause or cancel at any time",
        "Simple credit card payments",
      ],
      cta: "Get Started",
      badge: "POPULAR",
    },
  ];

  return (
    <div className="pt-[120px]">
      <h2 className="text-[#040F16] text-[48px] text-center  font-semibold">
        Pick Your Pricing Plan
      </h2>
      <p className="text-center pb-[50px] font-medium text-[18px] text-[#767676] leading-[140%]">
        Our Pricing Plan provides a selection of tailored options to suit
        various needs and budgets. <br /> Whether you are an individual, small
        business, or large enterprise, each plan offers
      </p>
      <div className="p-[5px] bg-[#14591D]/10 flex gap-x-[27px] rounded-[25px] max-w-[298px]  mx-auto  border border-[#CECECE]">
        <button className="text-white bg-[#14591D] px-[20px] py-[13px] rounded-full font-semibold">
          Monthly billing
        </button>
        <button>Annual billing</button>
      </div>
      <div className="pt-[60px] flex justify-center gap-x-[30px]">
        {plans.map((item, i) => (
          <div
            className="max-w-[393px] rounded-[20px] p-[20px] bg-[#FFFFFF]"
            key={i}
          >
            <div className="flex pb-[25px] items-center gap-x-[15px]">
              <div>
                <PlanIcon />
              </div>
              <h3 className="text-[24px] font-bold text-[#040F16]">
                {item.name}
              </h3>
            </div>
            <div className="pb-[40px]">
              <div
                className="text-heading-color pb-[16px] font-semibold text-[24px]"
                dangerouslySetInnerHTML={{ __html: item.price }}
              ></div>
              <p className="text-[16px] text-[#767676]">{item.price_note}</p>
            </div>
            <div className="bg-[#FBF8F5] w-full rounded-[12px] py-[28px] px-[24px] ">
              <p className="text-[16px] font-bold">Includes:</p>
              <ul className="pt-[12px] space-y-[12px]">
                {item.includes.map((include, i) => (
                  <li className="gap-x-[15px] items-center flex" key={i}>
                    <Check />
                    <p className="text-[#767676] text-[16px] leading-[150%] ">
                      {include}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-[24px] py-[16px]  w-full ease-in-out duration-300 transition-all rounded-full font-medium hover:font-bold hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center bg-white hover:bg-[#14591D] text-heading-color ">
              Get Started <LeftArrow />{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
