import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from "./components/Login";
import Description from "./components/Description";
import ProductsUser from "./components/ProductsUser";
import Regalitos from "./components/Regalitos";
import Carrito from "./components/Carrito";
import Contacto from "./components/Contacto";

const CarApp = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentSection, setCurrentSection] = useState("inicio");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
    navigate('/');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/');
  };

  const toggleSection = (section) => {
    setCurrentSection(section);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  const handleViewAllProducts = () => {
    console.log("handleViewAllProducts called");
    setCurrentSection("productos");
  };

  const getMenuItemStyle = (section) => {
    return section === currentSection
      ? {
          margin: "0 20px",
          cursor: "pointer",
          fontFamily: "Georgia, serif",
          fontSize: "20px",
          textDecoration: "underline",
          color: "blue",
        }
      : {
          margin: "0 20px",
          cursor: "pointer",
          fontFamily: "Georgia, serif",
          fontSize: "20px",
        };
  };

  console.log("Current section:", currentSection);

  return (
    <div className="container my-4" style={{ color: "#c4544a", backgroundColor: "" }}>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontFamily: "Georgia, serif",
        }}
      >
        <h1>
          <img
            src="http://usa.purezzanatural.com/cdn/shop/files/LOGO_PUREZZA_squarespace-01.png?height=628&pad_color=ffffff&v=1675177624&width=1200"
            alt=""
            style={{
              width: "200px",
              height: "auto",
              objectFit: "cover",
              borderRadius: "40px",
            }}
          />
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <span
            onClick={() => toggleSection("inicio")}
            style={getMenuItemStyle("inicio")}
          >
            Inicio
          </span>
          <span
            onClick={() => toggleSection("productos")}
            style={getMenuItemStyle("productos")}
          >
            Productos
          </span>
          <span
            onClick={() => toggleSection("regalos")}
            style={getMenuItemStyle("regalos")}
          >
            Kits para regalos
          </span>
          <span
            onClick={() => toggleSection("contacto")}
            style={getMenuItemStyle("contacto")}
          >
            Contáctanos
          </span>
        </div>
      </div>

      {loggedIn && currentSection === "inicio" && <Description onViewAllProducts={handleViewAllProducts} />}
      {loggedIn && currentSection === "regalos" && <Regalitos />}
      {loggedIn && currentSection === "contacto" && <Contacto />}
      {loggedIn && currentSection === "productos" && <ProductsUser addToCart={addToCart} />}

      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "250px",
          textAlign: "right",
        }}
      >
        {loggedIn ? (
          <>
            <button onClick={handleLogout} style={{ backgroundColor: "#f6d5d2" }}>
              <img
                src="https://static.thenounproject.com/png/801387-200.png"
                alt=""
                width="25"
                height="25"
                style={{ cursor: "pointer"}}
              />
            </button>
          </>
        ) : (
          <>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Y3UB7EHgEcbevi1Nd8tQMAHaHa&pid=Api&P=0&h=180"
              alt=""
              width="30"
              height="30"
              onClick={handleLogin}
              style={{ cursor: "pointer" }}
            />
            {!loggedIn && <Login />}
          </>
        )}
      </div>

      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "350px",
          textAlign: "right",
        }}
      >
        <img
          src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
          alt=""
          width="35"
          height="45"
          onClick={handleToggleCart}
          style={{
            cursor: "pointer",
            backgroundColor: "#f6d5d2",
            color: "var(--bahama-blue-900)",
            border: "none",
            padding: "10px 20px",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            width: "100%",
            marginTop: "20px",
          }}
        />
        {showCart && <Carrito items={cart} onClose={handleToggleCart} />}
      </div>
    </div>
  );
};

export default CarApp;
