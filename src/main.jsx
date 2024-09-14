import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routs from "./Routs/Routs";
import ShopContextProvider from "./context/ShopContext";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <Routs></Routs>
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>
);
