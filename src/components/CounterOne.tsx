import { GoTrash } from "react-icons/go";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import useCounter from "../hooks/use-counter";
import Button from "./Button";
import Panel from "./Panel";

function Counter() {
  const { count, adjustCount, currentIncrement, adjustIncrement } = useCounter(
    10,
    1
  );

  const stableButtonSize = "w-[95px] h-[35px]";

  const reset = () => {
    adjustIncrement(1, true);
    adjustCount(10, true);
  };

  const dynamicButton =
    currentIncrement < 0 ? (
      <Button
        danger
        outline
        onClick={() => adjustCount(currentIncrement)}
        className={stableButtonSize}
      >
        Decrement
      </Button>
    ) : currentIncrement > 0 ? (
      <Button
        success
        outline
        onClick={() => adjustCount(currentIncrement)}
        className={stableButtonSize}
      >
        Increment
      </Button>
    ) : (
      <Button
        outline
        onClick={() => adjustCount(currentIncrement)}
        className={stableButtonSize}
      >
        {" "}
      </Button>
    );

  console.log(count, currentIncrement);
  return (
    <Panel className="max-w-xs p-6 flex flex-col items-center space-y-6">
      <span className={`font-sans text-5xl`}>{count}</span>
      <div className="container flex flex-row justify-center text-center">
        {dynamicButton}
        <Button outline onClick={reset}>
          Reset
          <GoTrash />
        </Button>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <FaChevronUp
          className="cursor-pointer text-green-500 hover:text-green-800"
          size={15}
          onClick={() => adjustIncrement(1)}
          aria-label="Increase increment"
          title="Increase increment"
        />
        <span className={`font-sans text-xl`}>{currentIncrement}</span>
        <FaChevronDown
          className="cursor-pointer text-red-500 hover:text-red-800"
          size={15}
          onClick={() => adjustIncrement(-1)}
          aria-label="Decrease increment"
          title="Decrease increment"
        />
      </div>
    </Panel>
  );
}

export default Counter;
