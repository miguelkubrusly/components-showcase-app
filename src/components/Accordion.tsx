import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }: AccordionItemsProp) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (newIndex: number) => {
    setExpandedIndex((expandedIndex) => {
      if (newIndex === expandedIndex) {
        return -1;
      } else {
        return newIndex;
      }
    });
  };

  const renderedItems: JSX.Element = items.map(
    (item: AccordionItem, index: number) => {
      const isExpanded = index === expandedIndex;
      const icon: JSX.Element = (
        <span className="text-xl">
          {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>
      );

      return (
        <div key={item.id} className="w-1/5">
          <div
            className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
            onClick={() => handleClick(index)}
          >
            {item.label}
            {icon}
          </div>
          {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
      );
    }
  );

  return <div>{renderedItems}</div>;
}

export default Accordion;
