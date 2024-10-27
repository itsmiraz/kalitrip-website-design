import PlanIcon from "@/assets/icons/PlanIcon.svg";
import Check from "@/assets/icons/CheckMark.svg";
import LeftArrow from "@/assets/icons/LeftArrow.svg";
import { plansData } from "@/constant";
const PricingPlan = () => {


  return (
    <div className="px-[20px] py-[60px] pt-[120px]">
   <div className="max-w-[310px] md:max-w-[500px] mx-auto"> 
   <h2 className="text-[#040F16] font-clashDisplay text-[22px] md:text-[48px] text-center  font-semibold">
        Pick Your Pricing Plan
      </h2>
      <p className="text-center pb-[50px] font-inter font-medium text-[10px] md:text-[18px] text-[#767676] leading-[140%]">
        Our Pricing Plan provides a selection of tailored options to suit
        various needs and budgets. <br className="md:block hidden" /> Whether you are an individual, small
        business, or large enterprise, each plan offers
      </p>
   </div>
      <div className="p-[3px] md:p-[5px] h-fit bg-[#14591D]/10 flex gap-x-[17px] md:gap-x-[27px] rounded-[25px] max-w-[189px] md:max-w-[298px]  mx-auto  border border-[#CECECE]">
        <button className="text-white  whitespace-nowrap text-[8px]  md:text-[14px] bg-[#14591D] px-[20px] py-[13px] rounded-full font-semibold">
          Monthly billing
        </button>
        <button className="md:text-[14px]  whitespace-nowrap text-[8px]">Annual billing</button>
      </div>
      <div className="pt-[60px] gap-y-[20px] flex md:flex-row flex-col justify-center gap-x-[30px]">
        {plansData.map((item, i) => (
          <div
            className="max-w-[393px] rounded-[20px] p-[20px] bg-[#FFFFFF]"
            key={i}
          >
            <div className="flex pb-[25px] items-center gap-x-[15px]">
              <div>
                <PlanIcon />
              </div>
              <h3 className="text-[24px] font-inter font-bold text-[#040F16]">
                {item.name}
              </h3>
            </div>
            <div className="pb-[40px]">
              <div
                className="text-heading-color  font-clashDisplay pb-[16px] font-semibold text-[24px]"
                dangerouslySetInnerHTML={{ __html: item.price }}
              ></div>
              <p className="text-[16px] font-inter text-[#767676]">{item.price_note}</p>
            </div>
            <div className="bg-[#FBF8F5] font-inter w-full rounded-[12px] py-[28px] px-[24px] ">
              <p className="text-[16px] font-bold">Includes:</p>
              <ul className="pt-[12px] space-y-[12px]">
                {item.includes.map((include, i) => (
                  <li className="gap-x-[15px] items-center flex" key={i}>
                <div>
                <Check />
                </div>
                    <p className="text-[#767676] text-[16px] leading-[150%] ">
                      {include}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-[24px] font-clashDisplay py-[16px]  w-full ease-in-out duration-300 transition-all rounded-full font-medium hover:font-bold hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center bg-white hover:bg-[#14591D] text-heading-color ">
              Get Started <LeftArrow />{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
