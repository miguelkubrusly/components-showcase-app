import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }: AccordionItemsProp) {
  const [expandedItem, setExpandedItem] = useState(-1);

  const handleClick = (newIndex: number) => {
    if (newIndex === expandedItem) {
      setExpandedItem(-1)
    } else {
      setExpandedItem(newIndex)
    }
  };

  const renderedItems = items.map((item: any, index: number) => {
    const isExpanded = index === expandedItem;
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
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
