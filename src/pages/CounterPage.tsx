import { useState } from "react";
import Counter from "../components/Counter";
import Dropdown from "../components/Dropdown";
import ReducerCounter from "../components/ReducerCounter";

function CounterPage() {
  const [currentCounter, setNewCounter] = useState<string | null>(null);

  const handleChoice = (newCounter: string) => {
    setNewCounter(newCounter);
  };

  const options = [
    { value: "CounterOne", label: "Counter One" },
    { value: "CounterTwo", label: "Counter Two" },
  ];

  let counterSelect;
  if (currentCounter === options[0].label) {
    counterSelect = <Counter />;
  } else if (currentCounter === options[1].label) {
    counterSelect = <ReducerCounter />;
  }

  return (
    <div>
      <Dropdown
        options={options}
        value={currentCounter}
        onChange={handleChoice}
      />
      <div className="mt-3">{counterSelect}</div>
    </div>
  );
}

export default CounterPage;
