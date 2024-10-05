import Link from "./Link";

function Navigation() {
  return (
    <div>
      <Link path={"./button"}>Button</Link>
      <Link path={"./accordion"}>Accordion</Link>
      <Link path={"./dropdown"}>Dropdown</Link>
    </div>
  );
}

export default Navigation;
