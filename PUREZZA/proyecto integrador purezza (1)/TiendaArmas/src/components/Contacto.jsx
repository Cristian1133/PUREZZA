import React, { useState } from "react";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comentario, setComentario] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el número de teléfono
    if (!/^3\d{9}$/.test(telefono)) {
      alert(
        "El número de teléfono debe tener 10 caracteres y comenzar con el número 3."
      );
      return;
    }

    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log("Formulario enviado:", {
      nombre,
      correo,
      telefono,
      comentario,
    });
    setMensajeEnviado(true);

    // Limpiar los campos del formulario después de 5 segundos
    setTimeout(() => {
      setMensajeEnviado(false);
      setNombre("");
      setCorreo("");
      setTelefono("");
      setComentario("");
    }, 2000);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Georgia, serif" }}>
      <h1>Contáctanos</h1>
      <p>Maneras fáciles de ponerte en contacto</p>
      <p>
        Llámanos, (316)740-0801, escríbenos por Whatsapp o envíanos un correo
        electrónico a{" "}
        <a href="mailto:contacto@purezzanatural.com">
          contacto@purezzanatural.com
        </a>
      </p>
      <p>
        O si tienes alguna pregunta relacionada con los productos, pedidos o
        simplemente deseas decir "Hola", completa nuestro formulario de contacto
        y nos pondremos en contacto contigo o escríbenos por el chat de WhatsApp
        <a href="https://wa.me/573157073836">aquí</a>.
      </p>

      <p>
        Cualquier cosa que necesites de nosotros; Realmente, cualquier cosa, no
        lo dudes y escríbenos. Sería un placer atenderte.
      </p>

      <h2>Formulario de contacto</h2>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="nombre"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            maxLength="50"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#fae8e6",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="correo"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            maxLength="50"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#fae8e6",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="telefono"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Número de teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            maxLength="10"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#fae8e6",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="comentario"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Comentario
          </label>
          <textarea
            id="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            maxLength="100"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "15px 20px",
            fontSize: "20px",
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
          Enviar
        </button>
      </form>
      {mensajeEnviado && (
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
          ¡Mensaje enviado con éxito!
        </div>
      )}
    </div>
  );
};

export default Contacto;
