import { useContext, useState, useEffect } from "react";
import NavigationContext from "./context/NavigationContext";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import Navigation from "./components/Navigation";

function App() {
  const [currentPage, setCurrentPage] = useState(null);

  const { currentPath }: any = useContext(NavigationContext);

  const loadPage = (page: any) => setCurrentPage(page);

  useEffect(() => {
    const pages: any = {
      "/button": <ButtonPage />,
      "/accordion": <AccordionPage />,
      "/dropdown": <DropdownPage />,
    };

    loadPage(pages[currentPath]);
  }, [currentPath]);

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>{currentPage}</div>
    </div>
  );
}

export default App;
