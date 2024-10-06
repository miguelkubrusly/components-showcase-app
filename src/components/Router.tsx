import useNavigation from "../hooks/use-navigation";

function Router({ path, children }: RouterProps) {
  const currentPath = useNavigation()?.currentPath;

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Router;
