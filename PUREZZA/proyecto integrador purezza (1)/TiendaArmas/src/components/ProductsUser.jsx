import React, { useState, useEffect } from "react";
import { useCarrito } from './CartContext'; 

const ProductsUser = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({  
    id: "",
    name: "",
    description: "",
    price: "",
    imagen: "",
  });
  const [mensajeAgregado, setMensajeAgregado] = useState(false); // Estado para el mensaje de añadido

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/consultar');
      const data = await response.json();
      setProducts(data); 
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
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

  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:4000/productos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const deleteProducts = products.filter((product) => product.id !== id);
        setProducts(deleteProducts);
      })
      .catch((error) => console.error("Error al eliminar el producto:", error));
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
        const updatedProducts = products.map((product) =>
          product.id === id ? data : product
        );
        setProducts(updatedProducts);
      })
      .catch((error) =>
        console.error("Error al actualizar el producto:", error)
      );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const { addItemToCart } = useCarrito(); 

  const handleAddToCart = (product) => {
    addItemToCart(product);
    setMensajeAgregado(true);
    setTimeout(() => {
      setMensajeAgregado(false);
    }, 2000);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      {mensajeAgregado && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            fontWeight: "bold",
          }}
        >
          ¡Añadido correctamente!
        </div>
      )}
      <div
        style={{
          marginBottom: "20px",
          display: "inline-block",
          textAlign: "left",
          
        }}
      >
        <input
         maxLength="20"
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
            backgroundColor:" #f6d5d2",
            
          }}
        />
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", }}
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
              textAlign: "center", // Center the text content
            }}
          >
        
            
            {/* Imagen del Producto */}
            <div style={{ width: "100%" }}>
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
            
            {/* Nombre del Producto */}
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              {product.name}
            </h3>
            
            {/* Descripción del Producto */}
            <p style={{ fontSize: "16px", color: "#c4544a" }}>{product.description}</p>
            
            {/* Precio del Producto */}
            <p
              style={{
                fontSize: "16px",
                marginTop: "10px",
                fontFamily: "Georgia, serif",
                color: "#c4544a",
              }}
            >
              Precio: ${product.price} COP
            </p>
            
             {/* Botón de Agregar al Carrito */}
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                padding: "15px 20px",
                fontSize: "15px",
                backgroundColor: "#f6d5d2",
                color: "#c4544a",
                border: "none",
                borderRadius: "40px",
                cursor: "pointer",
                width: "200px",
                marginTop: "20px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              AGREGAR A CARRITO
            </button>
          </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsUser;
