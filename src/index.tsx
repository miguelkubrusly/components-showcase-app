import "./index.css";
import ReactDOM, { Root } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { NavigationProvider } from "./context/navigation";

const el: HTMLElement = document.getElementById("root")!;
const root: Root = ReactDOM.createRoot(el);

root.render(
  <StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </StrictMode>
);
