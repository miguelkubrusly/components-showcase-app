import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ children, to }: any) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event: any) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <div>
      <a onClick={handleClick}>{children}</a>
    </div>
  );
}

export default Link;
