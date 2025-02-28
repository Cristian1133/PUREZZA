import React, { useState, useEffect } from "react";

const Crud = () => {
  const [regalos, setRegalos] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    imagen: "",
  });
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/regalos")
      .then((response) => response.json())
      .then((data) => setRegalos(data))
      .catch((error) => console.error("Error al obtener los regalos:", error));
  }, []);

  const showMessage = (message) => {
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

  const showError = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
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
        showMessage("Regalo agregado correctamente");
      })
      .catch((error) => showError("Error al agregar el regalo"));
  };

  const handleDeleteRegalo = (id) => {
    fetch(`http://localhost:4000/regalos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const deleteRegalos = regalos.filter((regalo) => regalo.id !== id);
        setRegalos(deleteRegalos);
        showMessage("Regalo eliminado correctamente");
      })
      .catch((error) => showError("Error al eliminar el regalo"));
  };

  const handleUpdateRegalos = (id) => {
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
        showMessage("Regalo actualizado correctamente");
      })
      .catch((error) => showError("Error al actualizar el regalo"));
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
        CRUD KITS
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
      {errorMessage && (
        <div
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid red",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            borderRadius: "5px",
          }}
        >
          {errorMessage}
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
          type="text"
          name="id"
          value={formData.id}
          placeholder="Id del Kit"
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
          placeholder="Precio "
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
          type="text"
          name="imagen"
          value={formData.imagen}
          placeholder="URL de la imagen "
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
        onClick={handleAddRegalo}
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
        onClick={() => handleUpdateRegalos(formData.id)}
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
        onClick={() => handleDeleteRegalo(formData.id)}
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
