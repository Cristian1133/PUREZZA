import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const [loginMessage, setLoginMessage] = useState(""); // Estado para el mensaje de éxito
  const navigate = useNavigate();

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setStartTyping(true);
    }, 1000);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setLoginMessage("Bienvenido"); // Establece el mensaje de éxito
          setTimeout(() => {
            if (data.rol === "Administrador") {
              navigate("/carapp");
            } else if (data.rol === "Usuario") {
              navigate("/userlogin");
            } else {
              alert("Rol inválido");
            }
          }, 2000); // Retrasa la navegación para mostrar el mensaje
        } else {
          alert(data.message);
        }
      } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error inesperado en el lado del cliente.");
    }
  };

  const title = "BIENVENIDO";
  const titleLetters = title.split("").map((letter, index) => (
    <span key={index} className="letter">
      {letter}
    </span>
  ));

  return (
    <div className="login">
      <div className="left-section">
        <h1 className="titulo">{titleLetters}</h1>
        <img
          src="https://www.purezzanatural.com/cdn/shop/products/FI7A6578.jpg?v=1680194977&width=600"
          alt="Logo"
          className="logo"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "40px",
          }}
        />
      </div>
      <div className="right-section">
        <div className="image-user">
          <img
            src="https://www.certifiedfinancialguardian.com/images/blog-wp-login.png"
            alt="user"
            className="user"
          />
        </div>
        <div className="form-container">
          <Form onSubmit={handleSubmit}>
            <div className="form-group">
              <Form.Group controlId="username">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  maxLength={10}  // Limitar a 10 caracteres
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  maxLength={13}  
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="bn29">
                Iniciar sesión
              </Button>
              
              <Button
                variant="secondary"
                onClick={() => navigate("/register")}
                className="bn29"
              >
                Registrar
              </Button>
            </div>
          </Form>
          {loginMessage && <p className="success-message">{loginMessage}</p>} {/* Mostrar el mensaje de éxito */}
        </div>
      </div>
    </div>
  );
};

export default Login;
