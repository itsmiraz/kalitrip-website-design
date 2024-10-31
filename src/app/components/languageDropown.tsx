import React, { useState } from "react";
import Earth from "@/assets/icons/Earth.svg";
import ArrowDown from "@/assets/icons/ArrowDown.svg";

function LanguageDropdown({variant}:{variant?:string}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("En");

  // Language options with both full names and abbreviations
  const languages = [
    { name: "English", short: "En" },
    { name: "Spanish", short: "Es" },
    { name: "French", short: "Fr" },
    { name: "German", short: "De" },
    { name: "Chinese", short: "Zh" }
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (language: { name: string; short: string }) => {
    setSelectedLanguage(language.short);
    setIsDropdownOpen(false);
    // Add logic to update the app language if needed
  };

  const GetClassName = ()=>{
    return variant === 'dark' ? 'text-[#040F16] border-[#FDF7FA]/40 bg-[#040F16]/10':"bg-[#FDF7FA]/10 border-[#FDF7FA]/40  text-[#FDF7FA]"
  }

  return (
    <div className="relative inline-block">
      <div
        className={`flex ${GetClassName()} h-fit border  rounded-full items-center gap-x-[10px] px-[25px] py-4 cursor-pointer`}
        onClick={toggleDropdown}
      >
        <Earth />
        <p className="text-[18px] md:leading-[18px] font-medium font-clashDisplay ">
          {selectedLanguage}
        </p>
        <ArrowDown/>
      </div>

      {isDropdownOpen && (
        <div className="absolute  pt-2  mt-2 w-32 bg-gray-200 backdrop-blur text-gray-800 rounded-[12px] shadow-lg">
          {languages.map((language) => (
            <div
              key={language.short}
              onClick={() => handleLanguageSelect(language)}
              className="px-4 py-1 font-clashDisplay text-gray-800 cursor-pointer "
            >
              {language.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
