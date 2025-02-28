const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "18sep200498",
  database: "carrito",
});

// Ruta para autenticar usuarios
app.post("/usuarios", (req, res) => {
  const { username, password } = req.body;

  const sql = `SELECT NombreCompletoNombre, NombreCompletoApellido, Rol FROM usuarios WHERE Alias = ? AND Contraseña = ?`;

  db.query(sql, [username, password], (err, data) => {
    if (err) {
      console.error("Error al ejecutar la consulta SQL:", err);
      return res
        .status(500)
        .json({
          success: false,
          message: "Error interno, intentelo mas tarde",
        });
    }
    if (data.length > 0) {
      const { NombreCompletoNombre, NombreCompletoApellido, Rol } = data[0];
      return res.status(200).json({
        success: true,
        username: username,
        nombreCompleto: `${NombreCompletoNombre} ${NombreCompletoApellido}`,
        rol: Rol,
        message: "Login successful",
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Usuario o COntrasena Incorrecta" });
    }
  });
});

// Ruta para mostrar los productos
app.get("/consultar", (req, res) => {
  const sql = "SELECT * FROM productos";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al ejecutar la consulta SQL:", err);
      return res
        .status(500)
        .json({ success: false, message: "Error interno del servidor" });
    }
    return res.status(200).json(results);
  });
});

// Ruta para registrar nuevos usuarios
app.post("/register", (req, res) => {
  const { cedulaNumero, nombre, apellido, alias, password, correo, rol, numerocelular, direccion } = req.body;

  const sql = `
    INSERT INTO usuarios (CedulaNumero, NombreCompletoNombre, NombreCompletoApellido, Alias, Contraseña, Correo, Rol, NumeroCelular, Direccion) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [cedulaNumero, nombre, apellido, alias, password, correo, rol, numerocelular, direccion],
    (err, result) => {
      if (err) {
        console.error("Error al registrar el usuario:", err);
        return res.status(500).json({
          success: false,
          message: "Error interno, inténtelo más tarde",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Usuario registrado exitosamente",
      });
    }
  );
});

// Ruta para añadir los productos
app.post("/productos", (req, res) => {
  const { name, description, price, imagen } = req.body;

  const sql = `INSERT INTO productos (name, description, price, imagen) VALUES (?, ?, ?, ?)`;

  db.query(sql, [name, description, price, imagen], (err, result) => {
    if (err) {
      console.error("Error al insertar el producto:", err);
      return res.status(500).json({
        success: false,
        message: "Error interno, intentelo mas tarde",
      });
    }
    return res
      .status(200)
      .json({ success: true, message: "Producto agregado exitosamente" });
  });
});

// Ruta para eliminar los productos
app.delete("/productos/:id", (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM productos WHERE id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al eliminar el producto:", err);
      return res.status(500).json({
        success: false,
        message: "Error interno, intentelo mas tarde",
      });
    }
    return res
      .status(200)
      .json({ success: true, message: "Producto eliminado exitosamente" });
  });
});

// Ruta para actualizar un producto
app.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, price, imagen } = req.body;

  const sql = `UPDATE productos SET name = ?, description = ?, price = ?, imagen = ? WHERE id = ?`;

  db.query(sql, [name, description, price, imagen, id], (err, result) => {
    if (err) {
      console.error("Error al actualizar el producto:", err);
      return res.status(500).json({
        success: false,
        message: "Error interno, intentelo mas tarde",
      });
    }
    return res
      .status(200)
      .json({ success: true, message: "Producto actualizado exitosamente" });
  });
});

// Ruta para mostrar los regalos
app.get("/regalos", (req, res) => {
  const sql = "SELECT * FROM regalos";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al ejecutar la consulta SQL:", err);
      return res
        .status(500)
        .json({ success: false, message: "Error interno del servidor" });
    }
    return res.status(200).json(results);
  });
});

// Ruta para eliminar regalos
app.delete("/regalos/:id", (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM regalos WHERE id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al eliminar el regalo:", err);
      return res.status(500).json({
        success: false,
        message: "Error interno, intentelo mas tarde",
      });
    }
    return res
      .status(200)
      .json({ success: true, message: "Regalo eliminado exitosamente" });
  });
});

// Ruta para añadir regalos
app.post("/regalos", (req, res) => {
  const { name, description, price, imagen } = req.body;

  const sql = `INSERT INTO regalos (name, description, price, imagen) VALUES (?, ?, ?, ?)`;

  db.query(sql, [name, description, price, imagen], (err, result) => {
    if (err) {
      console.error("Error al insertar el regalo:", err);
      return res.status(500).json({
        success: false,
        message: "Error interno, intentelo mas tarde",
      });
    }
    return res
      .status(200)
      .json({ success: true, message: "Regalo agregado exitosamente" });
  });
});

// Ruta para actualizar un regalo
app.put("/regalos/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, price, imagen } = req.body;

  const sql = `UPDATE regalos SET name = ?, description = ?, price = ?, imagen = ? WHERE id = ?`;

  db.query(sql, [name, description, price, imagen, id], (err, result) => {
    if (err) {
      console.error("Error al actualizar el regalo:", err);
      return res.status(500).json({
        success: false,
        message: "Error interno, intentelo mas tarde",
      });
    }
    return res
      .status(200)
      .json({ success: true, message: "Regalo actualizado exitosamente" });
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
