import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState } from "react";
import Panel from "./Panel";

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

  const icon = (
    <span className="text-lg">
      {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
  );

  return (
    <div className="w-48 relative">
      <Panel
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer"
        {...rest}
      >
        {value || "Select..."}
        {icon}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
