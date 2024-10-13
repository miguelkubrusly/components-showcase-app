import { useState } from "react";

function useCounter(initialCount: number, initialIncrement: number) {
  const [count, setCount] = useState(initialCount);
  const [currentIncrement, setCurrentIncrement] = useState(initialIncrement);

  const adjustCount = (increment: number, replace = false) => {
    if (replace) {
      setCount(increment);
    } else {
      setCount(count + increment);
    }
  };

  const adjustIncrement = (adjustment: number, replace = false) => {
    if (replace) {
      setCurrentIncrement(adjustment);
    } else {
      setCurrentIncrement(currentIncrement + adjustment);
    }
  };

  return {
    count,
    adjustCount,
    currentIncrement,
    adjustIncrement,
  };
}

export default useCounter;
