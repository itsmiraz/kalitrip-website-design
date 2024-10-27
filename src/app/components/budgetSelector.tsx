import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, DollarSign } from "lucide-react";

interface BudgetSelectorProps {
  onChange?: (budget: number) => void;
}

const BudgetSelector: React.FC<BudgetSelectorProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<number>(500);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const budgetOptions = [
    500, 1000, 2000, 3000, 4000, 5000, 
    6000, 7000, 8000, 9000, 10000, 15000, 20000
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleBudgetSelect = (budget: number) => {
    setSelectedBudget(budget);
    onChange?.(budget);
    setIsOpen(false);
  };

  const formatBudget = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="relative w-[200px]" ref={dropdownRef}>
      <p className="text-[12px] font-clashDisplay pb-[12px] font-semibold text-[#080705]">
        Budget
      </p>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative  font-inter text-[14px] leading-3 max-w-[240px] rounded-[13px] gap-x-[25px] border pr-4 py-[16px] pl-[15px] flex items-center justify-between text-[#080705] font-medium border-[#080705] cursor-pointer"
      >
        <div className="flex items-center gap-x-2">
          <DollarSign size={20} />
          <span>Up to {formatBudget(selectedBudget)}</span>
        </div>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-[240px] max-h-[300px] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg">
          {budgetOptions.map((budget) => (
            <div
              key={budget}
              onClick={() => handleBudgetSelect(budget)}
              className={`p-4 hover:bg-gray-50 cursor-pointer ${
                selectedBudget === budget ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-[#080705]">
                  {formatBudget(budget)}
                </span>
                {selectedBudget === budget && (
                  <div className="w-2 h-2 rounded-full bg-[#080705]" />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BudgetSelector;