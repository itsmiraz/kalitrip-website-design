import React from "react";

const PricingPlan = () => {
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
    </div>
  );
};

export default PricingPlan;
