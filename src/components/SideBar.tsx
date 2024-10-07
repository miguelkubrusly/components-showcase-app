import Link from "./Link";

function SideBar() {
  const links = [
    { label: "Button", path: "/button" },
    { label: "Accordion", path: "/accordion" },
    { label: "Dropdown", path: "/dropdown" },
    { label: "Modal", path: "/modal" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <div key={link.label} className="mb-4">
        <Link
          to={link.path}
          activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
          {link.label}
        </Link>
      </div>
    );
  });

  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default SideBar;
