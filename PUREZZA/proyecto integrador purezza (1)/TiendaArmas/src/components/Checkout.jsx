import React from "react";

const Checkout = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/002/270/053/non_2x/abstract-blur-bokeh-light-background-free-photo.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
    boxSizing: "border-box",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#a23c33", 
  };

  const messageStyle = {
    fontSize: "1.2r em",
    color: "#d6675d",
    textAlign: "center",
    maxWidth: "600px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>COMPRA FINALIZADA</h1>
      <p style={messageStyle}>
        Muchas gracias por su compra. El pago se realizará contra entrega.
      </p>
    </div>
  );
};

export default Checkout;
