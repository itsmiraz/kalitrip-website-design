import BudgetBreakDownImage from "@/assets/images/budgetBreakDownImage.png";
import Image from "next/image";

const BudgetBreakDown = () => {
  return (
    <div className="bg-[#EEF8F0] mx-auto rounded-[20px] max-w-[1240px] my-[30px] p-[30px]">
      <h2 className="font-clashDisplay font-semibold text-heading-color text-[24px]">
        Budget breakdown
      </h2>
      <div className="max-w-[670px] gap-y-[40px] flex flex-col justify-center items-center mx-auto">
        <div>
          <Image src={BudgetBreakDownImage} alt="" />
        </div>
        <div className="flex items-center gap-x-[20px]">
          <div className="flex gap-x-[10px] items-center">
            <div className="w-[16px] h-[16px] bg-[#478FFD] rounded-full"></div>{" "}
            <p className="font-inter text-[#478FFD]  font-semibold text-[16px]">
              {" "}
              Accommodation
            </p>
          </div>
          <div className="flex gap-x-[10px] items-center">
            <div className="w-[16px] h-[16px] bg-[#8927FA] rounded-full"></div>{" "}
            <p className="font-inter  text-[#8927FA] font-semibold text-[16px]">
              {" "}
              Transportation
            </p>
          </div>
          <div className="flex gap-x-[10px] items-center">
            <div className="w-[16px] h-[16px] bg-[#54C58D] rounded-full"></div>{" "}
            <p className="font-inter  text-[#54C58D] font-semibold text-[16px]">
              {" "}
              Activities
            </p>
          </div>
          <div className="flex gap-x-[10px] items-center">
            <div className="w-[16px] h-[16px] bg-[#F2BC14] rounded-full"></div>{" "}
            <p className="font-inter text-[#F2BC14] font-semibold text-[16px]">
              {" "}
              Food and Contingencies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetBreakDown;
