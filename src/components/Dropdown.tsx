import { MouseEvent, useState } from "react";

function Dropdown({ options, isOpen, toggleDropdown, ...rest }: DropdownProps) {
  const [choice, setChoice] = useState<string | null>(null);

  const handleClick = (click: MouseEvent<HTMLDivElement>) => {
    const target = click.currentTarget;
    setChoice(target.getAttribute("data-value"));
    toggleDropdown();
  };

  const renderedOptions = options.map((option: Option) => {
    return (
      <div key={option.value} data-value={option.value} onClick={handleClick}>
        {option.label}
      </div>
    );
  });

  const currentChoice = choice
    ? options.find((option: Option) => option.value === choice).label
    : "Select...";

  return (
    <div>
      <div onClick={toggleDropdown} {...rest}>
        {currentChoice}
      </div>
      {isOpen && renderedOptions}
    </div>
  );
}

export default Dropdown;
