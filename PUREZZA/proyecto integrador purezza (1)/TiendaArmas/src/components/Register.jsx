import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Register.css";

const Register = () => {
  const [cedulaNumero, setCedulaNumero] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [alias, setAlias] = useState("");
  const [password, setPassword] = useState("");
  const [correo, setCorreo] = useState("");
  const [numerocelular, setNumeroCelular] = useState("");
  const [direccion, setDireccion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cedulaNumero,
          nombre,
          apellido,
          alias,
          password,
          correo,
          rol: "Usuario",
          numerocelular,
          direccion,
        }),
      });

      if (response.ok) {
        alert("Usuario registrado exitosamente");
        navigate("/login");
      } else {
        alert("Error al registrar el usuario. Por favor, inténtelo nuevamente.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error inesperado en el cliente.");
    }
  };

  return (
    <div className="register">
      <div className="form-containera">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={5}>
              <Form.Group controlId="cedulaNumero">
                <Form.Label>Cédula Número</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su cédula"
                  value={cedulaNumero}
                  onChange={(e) => setCedulaNumero(e.target.value)}
                  maxLength={10}
                  pattern="[0-9]*" // Patrón para permitir solo números
                  required
                />
              </Form.Group>
              <Form.Group controlId="apellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su apellido"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  maxLength={12}
                  required
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  maxLength={10}
                  required
                />
              </Form.Group>
              <Form.Group controlId="numerocelular">
                <Form.Label>Número Celular</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su número celular"
                  value={numerocelular}
                  onChange={(e) => setNumeroCelular(e.target.value)}
                  maxLength={10}
                  pattern="3[0-9]{9}"  // Condición para empezar con 3 y tener 10 dígitos
                  required
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  maxLength={12}
                  required
                />
              </Form.Group>
              <Form.Group controlId="alias">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su alias"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  maxLength={10}
                  required
                />
              </Form.Group>
              <Form.Group controlId="correo">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  maxLength={50}
                  required
                />
              </Form.Group>
              <Form.Group controlId="direccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su dirección"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  maxLength={12}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="bn29">
            Registrar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
