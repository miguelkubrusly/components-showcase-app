import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState } from "react";

function Dropdown({ options, value, onChange, ...rest }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNewValue = (newValue: string) => {
    onChange(newValue);
    setIsOpen(false);
  };

  const renderedOptions = options.map((option: Option) => {
    return (
      <div
        key={option.value}
        onClick={() => handleNewValue(option.label)}
        className="hover:bg-sky-100 rounded cursor-pointer p-1 text-left border-b last:border-b-0"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer border rounded p-2 shadow bg-white w-full"
        {...rest}
      >
        {value || "Select..."}
        <span className="text-lg">
          {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
