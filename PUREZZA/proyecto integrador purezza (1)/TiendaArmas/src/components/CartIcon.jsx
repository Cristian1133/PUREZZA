import React from 'react';
import { useCarrito } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './CartIcon.css'; 

const CartIcon = () => {
  const { getTotalItems } = useCarrito();
  const totalItems = getTotalItems();
  const navigate = useNavigate();

  return (
    <div className="cart-icon-container" onClick={() => navigate('/cart')}>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" 
        alt="Carrito" 
        className="cart-icon"
      />
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </div>
  );
};

export default CartIcon;
