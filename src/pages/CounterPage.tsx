import { useState } from "react";
import CounterOne from "../components/CounterOne";
import Dropdown from "../components/Dropdown";
import CounterTwo from "../components/CounterTwo";

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
    counterSelect = <CounterOne />;
  } else if (currentCounter === options[1].label) {
    counterSelect = <CounterTwo />;
  }

  return (
    <div>
      <div>
        <Dropdown
          options={options}
          value={currentCounter}
          onChange={handleChoice}
        />
      </div>
      <div className="mt-3">{counterSelect}</div>
    </div>
  );
}

export default CounterPage;
