import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";
import Button from "./Button";

function Link({ children, path }: any) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div>
      <Button onClick={handleClick} outline>
        {children}
      </Button>
    </div>
  );
}

export default Link;
