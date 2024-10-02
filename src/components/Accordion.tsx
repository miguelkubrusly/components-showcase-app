import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }: AccordionItemsProp) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (newIndex: number) => setExpandedIndex(newIndex);

  const renderedItems = items.map((item: any, index: number) => {
    const isExpanded = index === expandedIndex;
    const icon: JSX.Element = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={item.id}>
        {icon}
        <div onClick={() => handleClick(index)}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
