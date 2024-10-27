import React, { useState, } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import FaCalendarAlt from "@/assets/icons/CalendeIcon.svg";
interface DateValueType {
  startDate: Date | null;
  endDate: Date | null;
}


const SelectDateRange = () => {
  const [value, setValue] = useState<DateValueType | null>({
    startDate: null,
    endDate: null
  });

  const handleValueChange = (newValue: DateValueType | null): void => {
    setValue(newValue);
 
  };





  const formatDateRange = (): string => {
    if (!value?.startDate || !value?.endDate) return "Select journey date";
    const start = new Date(value.startDate).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    const end = new Date(value.endDate).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    return `${start} - ${end}`;
  };

  return (
    <div className="relative">
      <p className="text-[12px]  font-clashDisplay pb-[12px] font-semibold text-[#080705]">
        Select Dates
      </p>
      <div className="relative">
        {/* Custom UI */}
        <div
          className="relative  font-inter h-[59px] text-[14px] leading-3 max-w-[240px] rounded-[13px] gap-x-[25px] border pr-4 py-[10px] pl-[15px] flex items-center justify-between text-[#080705] font-medium border-[#080705] cursor-pointer"
        >
          <p className="truncate w-[120px]">{formatDateRange()}</p>
          <FaCalendarAlt />
        </div>
        
        {/* Actual Datepicker with absolute positioning */}
        <div className="absolute w-full h-full   top-0">
          <Datepicker
            containerClassName="relative"
            inputClassName="h-full pt-4 py-6 opacity-0 cursor-pointer"
            toggleClassName="absolute opacity-0 inset-0 w-full h-full "
            value={value}
            onChange={handleValueChange}
            popoverDirection="down"
            showShortcuts={false}
            primaryColor="amber"
         
            useRange={true}
            asSingle={false}
            displayFormat="MMM DD, YYYY"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectDateRange;