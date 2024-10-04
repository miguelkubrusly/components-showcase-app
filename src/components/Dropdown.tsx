import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState, useEffect, useRef, RefObject } from "react";
import Panel from "./Panel";

function Dropdown({ options, value, onChange, ...rest }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNewValue = (newValue: string) => {
    onChange(newValue);
    setIsOpen(false);
  };

  const divEl: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: Event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target as Node | null)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const renderedOptions = options.map((option: Option) => {
    return (
      <div
        key={option.value}
        onClick={() => handleNewValue(option.label)}
        className="hover:bg-sky-100 rounded cursor-pointer p-1 text-left border-b last:border-b-0 font-medium text-sm"
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
    <div ref={divEl} className="w-48 relative">
      <Panel
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer font-medium text-sm"
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
