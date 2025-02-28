
import React, { createContext, useContext, useState, useEffect } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addItemToCart = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find(
        (item) => item.id === producto.id
      );

      if (productoExistente) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: Math.min(item.cantidad + 1, 10) }
            : item
        );
      } else {
        return [
          ...prevCarrito,
          {
            ...producto,
            cantidad: 1,
          },
        ];
      }
    });
  };

  const removeItemFromCart = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  const incrementItemQuantity = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id ? { ...item, cantidad: Math.min(item.cantidad + 1, 10) } : item
      )
    );
  };

  const decrementItemQuantity = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        addItemToCart,
        removeItemFromCart,
        incrementItemQuantity,
        decrementItemQuantity,
        getTotalItems,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CartProvider;

