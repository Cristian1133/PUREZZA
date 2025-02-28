import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Description from './components/Description';
import ProductsList from './components/ProductsList'; 
import RegalosAdmin from './components/RegalosAdmin';
import Crud from './components/Crud';
import CrudKits from "./components/CrudKits";

const CarApp = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentSection, setCurrentSection] = useState("inicio");
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/'); // Redirige a UserView
  };

  const handleViewAllProducts = () => {
    console.log("handleViewAllProducts called");
    setCurrentSection("productos");
  };

  const switchSection = (section) => {
    setCurrentSection(section);
  };

  const getMenuItemStyle = (section) => {
    return section === currentSection 
      ? { margin: "0 20px", cursor: "pointer", fontSize: "20px", textDecoration: "underline", color: "blue" }
      : { margin: "0 20px", cursor: "pointer", fontSize: "20px" };
  };

  return (
    <div className="container my-4">
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
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
            fontFamily: "Times New Roman, serif"
          }}
        >
          <span
            onClick={() => switchSection("inicio")}
            style={getMenuItemStyle("inicio")}
          >
            Inicio
          </span>
          <span
            onClick={() => switchSection("productos")}
            style={getMenuItemStyle("productos")}
          >
            Productos
          </span>
          <span
            onClick={() => switchSection("regalos")}
            style={getMenuItemStyle("regalos")}
          >
            Kits
          </span>
          <span
            onClick={() => switchSection("crud")}
            style={getMenuItemStyle("crud")}
          >
            CRUD Productos
          </span>
          <span
            onClick={() => switchSection("crudKits")}
            style={getMenuItemStyle("crudKits")}
          >
            CRUD Kits 
          </span>
        </div>
      </div>
      {loggedIn && currentSection === "crud" && <Crud />} 
      {loggedIn && currentSection === "inicio" && <Description onViewAllProducts={handleViewAllProducts} />}
      {loggedIn && currentSection === "productos" && <ProductsList />}
      {loggedIn && currentSection === "regalos" && <RegalosAdmin />}
      {loggedIn && currentSection === "crudKits" && <CrudKits />} 
      
      {/* BOTON EN LA ESQUINA login */}
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
            <button onClick={handleLogout} style={{backgroundColor: "#f6d5d2"}}>
              <img
                src="https://static.thenounproject.com/png/801387-200.png"
                alt=""
                width="30"
                height="30"
                style={{ cursor: "pointer" }}
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
    </div>
  );
};

export default CarApp;
