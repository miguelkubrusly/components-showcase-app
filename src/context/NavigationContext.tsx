import { createContext, useState } from "react";

const NavigationContext = createContext<any>(null);

function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState<string>("/");

  window.addEventListener(
    "popstate",
    (event) => {
      // event.preventDefault();
      const component = event.target as HTMLAnchorElement;
      const componentName = component.children[0].textContent;
      setCurrentPath(componentName!.toLowerCase);
    },
    true
  );

  const handleNavigation = (event: MouseEvent, path: string) => {
    // event.preventDefault();
    window.history.pushState({}, "", `/${path}`);
  };

  const value = {
    handleNavigation,
    currentPath,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
