import React, { useState, useEffect } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    imagen: "",
  });

  // Función para obtener los productos
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:4000/consultar");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

  // Función para agregar un nuevo producto
  const handleAddProduct = () => {
    fetch("http://localhost:4000/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, data]);
        setFormData({
          name: "",
          description: "",
          price: "",
          imagen: "",
        });
      })
      .catch((error) => console.error("Error al agregar el producto:", error));
  };

  // Función para eliminar un producto
  const handleDeleteProduct = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      fetch(`http://localhost:4000/productos/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          const updatedProducts = products.filter((product) => product.id !== id);
          setProducts(updatedProducts);
        })
        .catch((error) => console.error("Error al eliminar el producto:", error));
    }
  };

  // Función para actualizar un producto
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
        const updatedProducts = products.map((product) =>
          product.id === id ? data : product
        );
        setProducts(updatedProducts);
      })
      .catch((error) =>
        console.error("Error al actualizar el producto:", error)
      );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <div
        style={{
          marginBottom: "20px",
          display: "inline-block",
          textAlign: "left",
        }}
      >
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "40px",
            width: "300px",
            fontFamily: "Georgia, serif",
            backgroundColor:" #f6d5d2",
          }}
        />
        <h1 style={{ color: "#000000", fontFamily: "Times New Roman, serif" }}>
          Cuidado Natural
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            fontFamily: "Times New Roman, serif",
          }}
        ></div>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products
          .filter(
            (product) =>
              product.name &&
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "40px",
                padding: "10px",
                margin: "10px",
                maxWidth: "400px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <div>
                <label>ID: {product.id}</label>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ width: "50%" }}>
                  <img
                    src={product.imagen}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "40px",
                    }}
                  />
                </div>
                <div style={{ width: "50%", paddingLeft: "10px" }}>
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      fontFamily: "Nunito, sans-serif",
                    }}
                  >
                    {product.description}
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      marginTop: "10px",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    Precio: ${product.price} COP
                  </p>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    style={{
                      padding: "5px 10px",
                      fontSize: "12px",
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      border: "none",
                      borderRadius: "40px",
                      cursor: "pointer",
                    }}
                  >
                    ELIMINAR
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
