import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Users } from "lucide-react";

export interface TravelersCount {
  adults: number;
  children: number;
  infants: number;
}

interface SelectTraverlProps {
  onChange?: (travelers: TravelersCount) => void;
}

const SelectTravelers: React.FC<SelectTraverlProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [travelers, setTravelers] = useState<TravelersCount>({
    adults: 1,
    children: 0,
    infants: 0
  });
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (type: keyof TravelersCount, action: 'increment' | 'decrement') => {
    const newTravelers = { ...travelers };
    
    if (action === 'increment') {
      if (type === 'adults' && newTravelers[type] < 9) {
        newTravelers[type] += 1;
      } else if ((type === 'children' || type === 'infants') && newTravelers[type] < 8) {
        newTravelers[type] += 1;
      }
    } else {
      if (type === 'adults' && newTravelers[type] > 1) {
        newTravelers[type] -= 1;
      } else if ((type === 'children' || type === 'infants') && newTravelers[type] > 0) {
        newTravelers[type] -= 1;
      }
    }

    setTravelers(newTravelers);
    onChange?.(newTravelers);
  };

  const totalTravelers = travelers.adults + travelers.children + travelers.infants;

  const formatTravelersText = () => {
    if (totalTravelers === 1) return '1 Adult';
    return `${totalTravelers} Travelers`;
  };

  return (
    <div className="relative w-[220px]" ref={dropdownRef}>
      <p className="text-[12px] pb-[12px] font-semibold text-[#080705]">
        Travelers
      </p>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative   font-inter text-[14px] leading-3 max-w-[240px] rounded-[13px] gap-x-[25px] border pr-4 py-[16px] pl-[15px] flex items-center justify-between text-[#080705] font-medium border-[#080705] cursor-pointer"
      >
        <div className="flex items-center gap-x-2">
          <Users size={20} />
          <span>{formatTravelersText()}</span>
        </div>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-[240px] bg-white border border-gray-200 rounded-lg shadow-lg">
          {/* Adults */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[#080705]">Adults</p>
                <p className="text-sm text-gray-500">Age 13+</p>
              </div>
              <div className="flex items-center gap-x-3">
                <button
                  onClick={() => handleChange('adults', 'decrement')}
                  disabled={travelers.adults <= 1}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                    travelers.adults <= 1 ? 'border-gray-200 text-gray-300' : 'border-[#080705] text-[#080705] hover:bg-gray-50'
                  }`}
                >
                  -
                </button>
                <span className="w-4 text-center">{travelers.adults}</span>
                <button
                  onClick={() => handleChange('adults', 'increment')}
                  disabled={travelers.adults >= 9}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                    travelers.adults >= 9 ? 'border-gray-200 text-gray-300' : 'border-[#080705] text-[#080705] hover:bg-gray-50'
                  }`}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Children */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[#080705]">Children</p>
                <p className="text-sm text-gray-500">Age 2-12</p>
              </div>
              <div className="flex items-center gap-x-3">
                <button
                  onClick={() => handleChange('children', 'decrement')}
                  disabled={travelers.children <= 0}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                    travelers.children <= 0 ? 'border-gray-200 text-gray-300' : 'border-[#080705] text-[#080705] hover:bg-gray-50'
                  }`}
                >
                  -
                </button>
                <span className="w-4 text-center">{travelers.children}</span>
                <button
                  onClick={() => handleChange('children', 'increment')}
                  disabled={travelers.children >= 8}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                    travelers.children >= 8 ? 'border-gray-200 text-gray-300' : 'border-[#080705] text-[#080705] hover:bg-gray-50'
                  }`}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Infants */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[#080705]">Infants</p>
                <p className="text-sm text-gray-500">Under 2</p>
              </div>
              <div className="flex items-center gap-x-3">
                <button
                  onClick={() => handleChange('infants', 'decrement')}
                  disabled={travelers.infants <= 0}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                    travelers.infants <= 0 ? 'border-gray-200 text-gray-300' : 'border-[#080705] text-[#080705] hover:bg-gray-50'
                  }`}
                >
                  -
                </button>
                <span className="w-4 text-center">{travelers.infants}</span>
                <button
                  onClick={() => handleChange('infants', 'increment')}
                  disabled={travelers.infants >= 8}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                    travelers.infants >= 8 ? 'border-gray-200 text-gray-300' : 'border-[#080705] text-[#080705] hover:bg-gray-50'
                  }`}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectTravelers;