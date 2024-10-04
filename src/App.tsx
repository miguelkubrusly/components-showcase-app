import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [choice, setChoice] = useState<string | null>(null);

  const handleChoice = (newChoice: string) => {
    setChoice(newChoice);
  };

  const options = [
    { value: "firstLabel", label: "This is some label" },
    { value: "otherLabel", label: "This is some other label" },
    { value: "finalLabel", label: "Finally, this is the final label" },
  ];

  return (
    <div>
      <Dropdown options={options} value={choice} onChange={handleChoice} />
    </div>
  );
}

export default App;
