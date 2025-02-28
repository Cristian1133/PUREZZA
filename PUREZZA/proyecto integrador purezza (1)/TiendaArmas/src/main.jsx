import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CarApp from "./CarApp";
import UserView from "./UserView";
import ProductsUser from "./components/ProductsUser";
import CartProvider from "./components/CartContext";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import UserLogin from "./UserLogin"
import Regalitos from "./components/Regalitos";
import RegalosAdmin from "./components/RegalosAdmin";
import Contacto from "./components/Contacto";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/carapp" element={<CarApp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/UserLogin" element={< UserLogin />} />
          <Route path="/" element={<UserView />} />
          <Route path="/productsuser" element={<ProductsUser />} />
          <Route path="/cartprovider" element={<CartProvider />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/regalos" element={<Regalitos />} />
          <Route path="/regalos" element={<RegalosAdmin />} />
          <Route path="/regalos" element={<Contacto />} />
        </Routes>
      </Router>
    </CartProvider>
  </React.StrictMode>
);
