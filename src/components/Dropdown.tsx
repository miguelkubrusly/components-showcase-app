import { useState } from "react";

function Dropdown({ options, value, onChange, ...rest }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNewValue = (newValue: string) => {
    onChange(newValue);
    setIsOpen(false);
  };

  const renderedOptions = options.map((option: Option) => {
    return (
      <div key={option.value} onClick={() => handleNewValue(option.label)}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} {...rest}>
        {value ? value : "Select..."}
      </div>
      {isOpen && renderedOptions}
    </div>
  );
}

export default Dropdown;
