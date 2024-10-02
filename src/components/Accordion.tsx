import { useState } from "react";

function Accordion({ items }: AccordionItemsProp) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item: any, index: number) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id}>
        <div onClick={() => setExpandedIndex(index)}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
