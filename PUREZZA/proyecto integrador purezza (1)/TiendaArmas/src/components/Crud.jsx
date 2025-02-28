import React, { useState, useEffect } from "react";

const Crud = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    imagen: "",
  });
  const [confirmationMessage, setConfirmationMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/consultar")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Error al obtener los productos:", error)
      );
  }, []);

  const showConfirmation = (message) => {
    setConfirmationMessage(message);
    setTimeout(() => {
      setConfirmationMessage("");
      setFormData({
        id: "",
        name: "",
        description: "",
        price: "",
        imagen: "",
      });
    }, 2000);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
  if (formData.name.trim() === "" || formData.price.trim() === "") {
    alert("Por favor ingresa el nombre y el precio del producto.");
    return;
  }

  if (!/^\d{1,7}$/.test(formData.price.trim())) {
    alert("El precio debe ser entero sin . o , ");
    return;
  }

  fetch("http://localhost:4000/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      setProducts((prevProducts) => [...prevProducts, data]);
      showConfirmation("Producto agregado correctamente");
    })
    .catch((error) => console.error("Error al agregar el producto:", error));
};

const handleDeleteProduct = (id) => {
  fetch(`http://localhost:4000/productos/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
      showConfirmation("Producto eliminado correctamente");
    })
    .catch((error) => console.error("Error al eliminar productos:", error));
};

const handleUpdateProduct = (id) => {
  fetch(`http://localhost:4000/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? data : product
        )
      );
      showConfirmation("Producto actualizado correctamente");
    })
    .catch((error) =>
      console.error("Error al actualizar el producto:", error)
    );
};

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <h2
        style={{
          marginBottom: "20px",
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "Georgia, serif",
        }}
      >
        CRUD PRODUCTOS
      </h2>
      {confirmationMessage && (
        <div
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid green",
            backgroundColor: "#d4edda",
            color: "#155724",
            borderRadius: "5px",
          }}
        >
          {confirmationMessage}
        </div>
      )}
      <div
        style={{
          fontFamily: "Georgia, serif",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <input
          maxLength="5"
          type="text"
          name="id"
          value={formData.id}
          placeholder="Id"
          onChange={handleInputChange}
          style={{
            marginBottom: "20px",
            padding: "5px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "40px",
            display: "block",
            width: "300px",
            textAlign: "center",
            fontFamily: "Georgia, serif",
            margin: "0 auto",
            backgroundColor: "#f6d5d2",
            color: "#c4544a",
          }}
        />
      </div>
      <div
        style={{
          fontFamily: "Georgia, serif",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <input
          maxLength="50"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Nombre "
          onChange={handleInputChange}
          style={{
            marginBottom: "20px",
            padding: "5px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "40px",
            display: "block",
            width: "300px",
            textAlign: "center",
            fontFamily: "Georgia, serif",
            margin: "0 auto",
            backgroundColor: "#f6d5d2",
            color: "#c4544a",
          }}
        />
      </div>
      <div
        style={{
          fontFamily: "Georgia, serif",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <input
          maxLength="400"
          type="text"
          name="description"
          value={formData.description}
          placeholder="Descripción "
          onChange={handleInputChange}
          style={{
            marginBottom: "20px",
            padding: "5px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "40px",
            display: "block",
            width: "300px",
            textAlign: "center",
            fontFamily: "Georgia, serif",
            margin: "0 auto",
            backgroundColor: "#f6d5d2",
            color: "#c4544a",
          }}
        />
      </div>
      <div
        style={{
          fontFamily: "Georgia, serif",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          name="price"
          value={formData.price}
          placeholder="Precio"
          onChange={handleInputChange}
          maxLength={7}
          style={{
            marginBottom: "20px",
            padding: "5px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "40px",
            display: "block",
            width: "300px",
            textAlign: "center",
            fontFamily: "Georgia, serif",
            margin: "0 auto",
            backgroundColor: "#f6d5d2",
            color: "#c4544a",
          }}
        />
    
      </div>
      <div
        style={{
          fontFamily: "Georgia, serif",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <input
          maxLength="300"
          type="text"
          name="imagen"
          value={formData.imagen}
          placeholder="URL de la imagen"
          onChange={handleInputChange}
          style={{
            marginBottom: "20px",
            padding: "5px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "40px",
            display: "block",
            width: "300px",
            textAlign: "center",
            fontFamily: "Georgia, serif",
            margin: "0 auto",
            backgroundColor: "#f6d5d2",
            color: "#c4544a",
          }}
        />
      </div>
      <button
        onClick={handleAddProduct}
        style={{
          marginRight: "20px",
          padding: "8px 16px",
          fontSize: "14px",
          backgroundColor: "#f6d5d2",
          color: "#c4544a",
          border: "none",
          borderRadius: "40px",
          cursor: "pointer",
          width: "300px",
          fontFamily: "Georgia, serif",
        }}
      >
        Agregar 
      </button>
      <button
        onClick={() => handleUpdateProduct(formData.id)}
        style={{
          marginRight: "10px",
          padding: "8px 16px",
          fontSize: "14px",
          backgroundColor: "#f6d5d2",
          color: "#c4544a",
          border: "none",
          borderRadius: "40px",
          cursor: "pointer",
          width: "300px",
          fontFamily: "Georgia, serif",
        }}
      >
        Actualizar
      </button>
      <button
        onClick={() => handleDeleteProduct(formData.id)}
        style={{
          padding: "8px 16px",
          fontSize: "14px",
          backgroundColor: "#f6d5d2",
          color: "#c4544a",
          border: "none",
          borderRadius: "40px",
          cursor: "pointer",
          width: "300px",
          fontFamily: "Georgia, serif",
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default Crud;
