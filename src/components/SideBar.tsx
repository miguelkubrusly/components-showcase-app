import AccordionPage from "../pages/AccordionPage";
import ButtonPage from "../pages/ButtonPage";
import DropdownPage from "../pages/DropdownPage";
import Link from "./Link";
import Router from "./Router";

function SideBar() {
  const links = [
    { label: "Button", path: "/button", page: ButtonPage },
    { label: "Accordion", path: "/accordion", page: AccordionPage },
    { label: "Dropdown", path: "/dropdown", page: DropdownPage },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <div key={link.label}>
        <Link to={link.path}>{link.label}</Link>
        <Router path={link.path}>
          <link.page />
        </Router>
      </div>
    );
  });

  return <div>{renderedLinks}</div>;
}

export default SideBar;
