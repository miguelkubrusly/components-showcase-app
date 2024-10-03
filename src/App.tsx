import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div>
      <Dropdown options={[
        { value: "firstLabel", label: "This is some label" },
        { value: "otherLabel", label: "This is some other label" },
        { value: "finalLabel", label: "Finnaly, this is the final label" }
      ]} />
    </div>
  );
}

export default App;
