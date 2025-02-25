import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import provider
import ProductProvider from "./contexts/ProductContext";
// sidebar provider
import SidebarProvider from "./contexts/SidebarContext";
// cart provider
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </React.StrictMode>
);
