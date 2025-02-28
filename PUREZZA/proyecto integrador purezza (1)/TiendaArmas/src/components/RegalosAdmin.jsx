import React, { useState, useEffect } from "react";

const RegalosAdmin = () => {
  const [regalos, setRegalos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    imagen: "",
  });

  const fetchRegalos = async () => {
    try {
      const response = await fetch("http://localhost:4000/regalos");
      const data = await response.json();
      setRegalos(data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
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

  const handleAddRegalo = () => {
    fetch("http://localhost:4000/regalos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setRegalos([...regalos, data]);
        setFormData({
          name: "",
          description: "",
          price: "",
          imagen: "",
        });
      })
      .catch((error) => console.error("Error al agregar el producto:", error));
  };

  const handleDeleteRegalo = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      fetch(`http://localhost:4000/regalos/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          const deleteRegalos = regalos.filter((regalo) => regalo.id !== id);
          setRegalos(deleteRegalos);
        })
        .catch((error) => console.error("Error al eliminar el producto:", error));
    }
  };

  const handleUpdateRegalo = (id) => {
    fetch(`http://localhost:4000/regalos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedRegalos = regalos.map((regalo) =>
          regalo.id === id ? data : regalo
        );
        setRegalos(updatedRegalos);
      })
      .catch((error) =>
        console.error("Error al actualizar el producto:", error)
      );
  };

  useEffect(() => {
    fetchRegalos();
  }, []);

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
            backgroundColor:" #f6d5d2",
            fontFamily: "Georgia, serif",
          }}
        />
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {regalos
          .filter(
            (regalo) =>
              regalo.name &&
              regalo.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((regalo) => (
            <div
              key={regalo.id}
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
                <label>ID: {regalo.id}</label>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ width: "50%" }}>
                  <img
                    src={regalo.imagen}
                    alt={regalo.name}
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
                    }}
                  >
                    {regalo.name}
                  </h3>
                  <p style={{ fontSize: "16px" }}>{regalo.description}</p>
                  <p
                    style={{
                      fontSize: "16px",
                      marginTop: "10px",
                      marginRight: "10px",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    Precio: ${regalo.price} COP
                  </p>
                  <button
                    onClick={() => handleDeleteRegalo(regalo.id)}
                    style={{
                      padding: "5px 10px",
                      fontSize: "12px",
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      border: "none",
                      borderRadius: "40px",
                      cursor: "pointer",
                      marginTop: "10px",
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

export default RegalosAdmin;
