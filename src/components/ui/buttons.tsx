import LeftArrow from "@/assets/icons/LeftArrow.svg";

export const RoundedButton = () => {
  return (
    <button className=" text-[8px] md:text-[14px] font-clashDisplay px-[20px] py-[7px] md:py-[8px] leading-[8px]  ease-in-out duration-300 transition-all rounded-full font-medium  hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center  hover:bg-[#14591D] h-fit whitespace-nowrap md:h-[34px] md:leading-[14px] text-heading-color ">
      Book Now{" "}
      <div className="w-[8px] h-[8px] md:w-[18px] md:h-[18px] ">
        <LeftArrow />
      </div>{" "}
    </button>
  );
};
