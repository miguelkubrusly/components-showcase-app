import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { value: "firstLabel", label: "This is some label" },
    { value: "otherLabel", label: "This is some other label" },
    { value: "finalLabel", label: "Finally, this is the final label" },
  ];

  return (
    <div>
      <Dropdown
        options={options}
        isOpen={isOpen}
        toggleDropdown={handleClick}
      />
    </div>
  );
}

export default App;
