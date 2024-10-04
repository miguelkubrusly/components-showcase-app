import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [choice, setChoice] = useState<string | null>(null);

  const handleChoice = (newChoice: string) => {
    setChoice(newChoice);
  };

  const options = [
    { value: "firstLabel", label: "This is a label" },
    { value: "otherLabel", label: "Yeah! Another label" },
    { value: "finalLabel", label: "Finally, a final label" },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={choice} onChange={handleChoice} />
    </div>
  );
}

export default App;
