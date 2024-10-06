import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import Link from "./components/Link";
import Router from "./components/Router";

function App() {
  return (
    <div>
      <Link to={"/accordion"}>Go to accordion</Link>
      <Link to={"/dropdown"}>Go to dropdown</Link>
      <div>
        <Router path={"/accordion"}>
          <AccordionPage />
        </Router>
      </div>
      <Router path={"/dropdown"}>
        <DropdownPage />
      </Router>
    </div>
  );
}

export default App;
