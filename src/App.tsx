import { useContext } from "react";
import NavigationContext from "./context/NavigationContext";
import Navigation from "./components/Navigation";

function App() {
  // const { currentPath } = useContext(NavigationContext);

  return (
    <div>
      <Navigation />
    </div>
  );
}

export default App;
