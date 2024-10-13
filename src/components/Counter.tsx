import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import useCounter from "../hooks/use-counter";
import Button from "./Button";

function Counter() {
  const { count, incrementCount, currentIncrement, adjustIncrement } =
    useCounter(10, 1);

  const stableButtonSize = "w-[95px] h-[35px]";

  const dynamicButton =
    currentIncrement < 0 ? (
      <Button
        danger
        outline
        onClick={() => incrementCount(currentIncrement)}
        className={stableButtonSize}
      >
        Decrement
      </Button>
    ) : currentIncrement > 0 ? (
      <Button
        success
        outline
        onClick={() => incrementCount(currentIncrement)}
        className={stableButtonSize}
      >
        Increment
      </Button>
    ) : (
      <Button
        outline
        onClick={() => incrementCount(currentIncrement)}
        className={stableButtonSize}
      >
        {" "}
      </Button>
    );

  return (
    <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center space-y-6">
      <span className={`font-sans text text-3xl`}>{count}</span>
      {dynamicButton}
      <div className="flex flex-col items-center space-y-2">
        <FaChevronUp
          className="cursor-pointer text-green-500 hover:text-green-800"
          size={18}
          onClick={() => adjustIncrement(1)}
          aria-label="Increase increment"
          title="Increase increment"
        />
        <span className={`font-sans text-xl`}>{currentIncrement}</span>
        <FaChevronDown
          className="cursor-pointer text-red-500 hover:text-red-800"
          size={18}
          onClick={() => adjustIncrement(-1)}
          aria-label="Decrease increment"
          title="Decrease increment"
        />
      </div>
    </div>
  );
}

export default Counter;
