import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/route.jsx";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext.jsx";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
    <CartProvider>
      <RouterProvider router={route} />
    </CartProvider>
    </AuthProvider>
);