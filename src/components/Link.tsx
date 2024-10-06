import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ children, to }: LinkProps) {
  const navigate = useContext(NavigationContext)?.navigate;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate!(to);
  };

  return (
    <div>
      <a onClick={handleClick}>{children}</a>
    </div>
  );
}

export default Link;
