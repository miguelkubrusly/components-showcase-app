import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ children, to }: LinkProps) {
  const navigate = useContext(NavigationContext)?.navigate;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate!(to);
  };

  return (
    <div>
      <a href={to} onClick={handleClick}>
        {children}
      </a>
    </div>
  );
}

export default Link;
