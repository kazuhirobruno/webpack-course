import React from "react";
import { createRoot } from "react-dom/client";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);
