import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Router({ path, children }: RouterProps) {
  const currentPath = useContext(NavigationContext)?.currentPath;

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Router;
