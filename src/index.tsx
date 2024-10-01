import "./index.css";
import ReactDOM, { Root } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";

const el: HTMLElement = document.getElementById("root")!;
const root: Root = ReactDOM.createRoot(el);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
