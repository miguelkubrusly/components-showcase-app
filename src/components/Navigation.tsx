import { useContext, useEffect } from "react";
import NavigationContext from "../context/NavigationContext";
import Link from "./Link";

function Navigation() {
  const { currentPath, setCurrentPath, handleNavigation } =
    useContext(NavigationContext);

  useEffect(() => {
    handleNavigation();
  }, [currentPath]);

  const handleClick = (newPath: string) => {
    setCurrentPath(newPath);
  };

  return (
    <div>
      <Link onClick={handleClick}>Dropdown</Link>
    </div>
  );
}

export default Navigation;
