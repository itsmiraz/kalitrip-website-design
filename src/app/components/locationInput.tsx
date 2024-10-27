import { ChangeEvent, useState } from "react";
import Location from "@/assets/icons/Location.svg";
import { Airport, AirportSuggestions, Region } from "@/index";

const LocationInput = ({ label }: {  label: string }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<Airport[]>([]);
  const [showSuggestion, setshowSuggestion] = useState(false);
  const region: Region = "Asia";
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 1) {
      const suggestions = AirportSuggestions[region].filter((airport) =>
        airport.name.toLowerCase().includes(value.toLowerCase())
      );
      setshowSuggestion(true);
      setFilteredSuggestions(suggestions);
    } else {
      setFilteredSuggestions([]);
    }
  };

  return (
    <div className="relative">
      <p className="text-[12px]  font-clashDisplay pb-[12px] font-semibold text-[#080705]">
        {label}
      </p>
      <div className="max-w-[240px] font-inter rounded-[13px] gap-x-[5px] border pr-4 py-[17px] pl-[15px] flex items-center justify-start text-[#080705] font-medium border-[#080705]">
        <div>
          <Location />
        </div>
        <div className="relative">
          <input
            className="border-none truncate  placeholder:text-[#080705] font-medium text-[14px] leading-3 focus:outline-none decoration-none"
            type="text"
            placeholder="Enter Your Location..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {showSuggestion && filteredSuggestions.length > 0 && (
        <div className="absolute left-0 bg-white border border-gray-300 rounded-md mt-1 max-h-[200px] overflow-y-auto ">
          {filteredSuggestions.map((airport) => (
            <div
              key={airport.iata_code}
              onClick={() => {
                setInputValue(`${airport.name} (${airport.iata_code})`);
                setshowSuggestion(false);
              }}
              className="cursor-pointer text-[#080705] font-medium border-[#080705] px-3 py-2 hover:bg-gray-200"
            >
              {airport.name} ({airport.iata_code})
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationInput;
