// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600 mt-4">Your cart is empty.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-white p-4 shadow rounded-md">
              <span>{item.name} - ${item.price}</span>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;