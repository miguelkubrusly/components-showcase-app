import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import Router from "./components/Router";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-6">
      <SideBar />
      <div className="col-span-5">
        <Router path={"/accordion"}>
          <AccordionPage />
        </Router>
        <Router path={"/dropdown"}>
          <DropdownPage />
        </Router>
        <Router path={"/button"}>
          <ButtonPage />
        </Router>
        <Router path={"/modal"}>
          <ModalPage />
        </Router>
        <Router path={"/table"}>
          <TablePage />
        </Router>
        <Router path={"/counter"}>
          <CounterPage />
        </Router>
      </div>
    </div>
  );
}

export default App;
