import React, { useEffect, useState } from "react";
import { useCarrito } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./Carrito.css";

const Carrito = ({ onClose }) => {
  const {
    carrito,
    removeItemFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
  } = useCarrito();
  const [total, setTotal] = useState(0);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setTotal(calculeTotal(carrito));
    sessionStorage.setItem("cart", JSON.stringify(carrito));
  }, [carrito]);

  const navigate = useNavigate();

  const onDeleteProduct = (id) => {
    removeItemFromCart(id);
    const updatedCarrito = carrito.filter((item) => item.id !== id);
    const newTotal = calculeTotal(updatedCarrito);
    setTotal(newTotal);
    sessionStorage.setItem("cart", JSON.stringify(updatedCarrito));
  };

  const calculeTotal = (items) => {
    let total = 0;
    if (items && items.length > 0) {
      items.forEach((item) => {
        total += item.cantidad * item.price;
      });
    }
    return total;
  };

  const handleCheckout = () => {
    if (carrito.length > 0) {
      navigate("/checkout");
      onClose();
    } else {
      setMensaje("¡Debes agregar productos al carrito!");
    }
  };

  return (
    <div
      className="cart-overlay"
      style={{ color: "#c4544a", backgroundColor: "#efb7b2" }}
    >
      <div
        className="cart-container"
        style={{ color: "#c4544a", backgroundColor: "#fae8e6", fontFamily: "Georgia, serif" }}
      >
        <button className="close-button" onClick={onClose}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
            alt="Cerrar"
          />
        </button>
        <h3>Carrito de Compras</h3>
        <table
          className="table table-hover table-striped"
          style={{
            color: "blue",
            backgroundColor: "#fae8e6",
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  borderBottom: "2px solid #c4544a",
                  padding: "8px 0",
                  textAlign: "center",
                  backgroundColor: "#fae8e6",
                  color: "#86352e",
                }}
              >
                Nombre
              </th>
              <th
                style={{
                  borderBottom: "2px solid #c4544a",
                  padding: "8px 0",
                  textAlign: "center",
                  backgroundColor: "#fae8e6",
                  color: "#86352e",
                }}
              >
                Precio
              </th>
              <th
                style={{
                  borderBottom: "2px solid #c4544a",
                  padding: "8px 0",
                  textAlign: "center",
                  backgroundColor: "#fae8e6",
                  color: "#86352e",
                }}
              >
                Cantidad
              </th>
              <th
                style={{
                  borderBottom: "2px solid #c4544a",
                  padding: "8px 0",
                  textAlign: "center",
                  backgroundColor: "#fae8e6",
                  color: "#86352e",
                }}
              >
                Total{" "}
              </th>
              <th
                style={{
                  borderBottom: "2px solid #c4544a",
                  padding: "8px 0",
                  textAlign: "center",
                  backgroundColor: "#fae8e6",
                  color: "#86352e",
                }}
              >
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
            {carrito &&
              carrito.map((item) => (
                <tr key={item.id}>
                  <td
                    style={{
                      borderBottom: "1px solid #c4544a",
                      padding: "8px 0",
                      textAlign: "center",
                      backgroundColor: "#fae8e6",
                      color: "#c4544a",
                      fontSize: "20px",
                    }}
                  >
                    {item.name}
                  </td>
                  <td
                    style={{
                      borderBottom: "1px solid #c4544a",
                      padding: "8px 0",
                      textAlign: "center",
                      backgroundColor: "#fae8e6",
                      color: "#c4544a",
                      fontSize: "17px",
                    }}
                  >
                    {item.price}
                  </td>
                  <td
                    style={{
                      borderBottom: "1px solid #c4544a",
                      padding: "8px 0",
                      textAlign: "center",
                      backgroundColor: "#fae8e6",
                      color: "#c4544a",
                      fontSize: "20px",
                      
                    }}
                  >
                    <button
                      className="btn btn-secondary"
                      style={{
                        width: "50px",
                        height: "30px",
                        marginRight: "10px",
                        backgroundColor: "#f6d5d2",
                        color: "#c4544a",
                        fontSize: "30px",
                        lineHeight: "18px",
                        verticalAlign: "middle",
                        marginBottom: "20px",
                      }}
                      onClick={() => decrementItemQuantity(item.id)}
                    >
                      -
                    </button >
                    {item.cantidad} 
                    <button
                      className="btn btn-secondary"
                      style={{  
                        width: "50px",
                        height: "30px",
                        marginLeft: "10px",
                        color: "#c4544a",
                        backgroundColor: "#f6d5d2",
                        fontSize: "20px",
                        lineHeight: "18px",
                        verticalAlign: "middle",
                        marginBottom: "20px",
                      }}
                      onClick={() => incrementItemQuantity(item.id)}
                    >
                      +
                    </button>
                  </td>
                  <td
                    style={{
                      borderBottom: "1px solid #c4544a",
                      padding: "8px 0",
                      textAlign: "center",
                      backgroundColor: "#fae8e6",
                      color: "#c4544a",
                      fontSize: "17px",
                    }}
                  >
                    {(item.price * item.cantidad).toFixed(3)}
                  </td>
                  <td
                    style={{
                      borderBottom: "1px solid #c4544a",
                      padding: "8px 0",
                      textAlign: "center",
                      backgroundColor: "#fae8e6",
                      color: "#c4544a",
                    }}
                  >
                    <button
                      className="btn btn-danger"
                      onClick={() => onDeleteProduct(item.id)}
                      style={{
                        padding: "15px 20px",
                        fontSize: "20px",
                        backgroundColor: "#f6d5d2",
                        color: "#c4544a",
                        border: "none",
                        borderRadius: "40px",
                        cursor: "pointer",
                        width: "100px",
                        marginTop: "1px",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div
          className="cart-footer"
          style={{ color: "#c4544a", textAlign: "center" }}
        >
          <h4
            className="cart-total"
            style={{ color: "#c4544a", textAlign: "center" }}
          >
            Total: ${total.toFixed(3)} COP
          </h4>
          {mensaje && (
            <p style={{ color: "#c4544a", marginBottom: "10px",
            fontSize: "20px", }}>{mensaje}</p>
          )}
          <button
            className="btn btn-primary"
            onClick={handleCheckout}
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
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
