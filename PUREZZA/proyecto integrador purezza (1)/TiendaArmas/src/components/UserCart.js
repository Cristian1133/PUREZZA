// useCart.js
import { useState } from 'react';

function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const { addItemToCart } = useCart();

  function addItemToCart(item) {
    console.log('Agregando al carrito:', item); // Imprime por consola el ítem agregado
    setCartItems(prevItems => [...prevItems, item]);
  }

  return { addItemToCart };
}

export default useCart;
