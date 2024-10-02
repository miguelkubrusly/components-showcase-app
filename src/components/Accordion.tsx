import { useState } from "react";
import Button from "./Button";

function Accordion({ items }: any) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const parsedIndex = parseInt((event.target as HTMLDivElement).id);
    setExpandedIndex(parsedIndex);
  };

  const renderedAccordions = items.map((item: any, index: number) => {
    if (index === expandedIndex) {
      return (
        <div>
          <Button>
            <h3>{item.label}</h3>
          </Button>
          <p>{item.content}</p>
        </div>
      );
    } else {
      return (
        <div id={"accordion" + String(index)}>
          <Button onClick={handleClick}>
            <h3>{item.label}</h3>
          </Button>
        </div>
      );
    }
  });
  return <div>{renderedAccordions}</div>;
}

export default Accordion;
