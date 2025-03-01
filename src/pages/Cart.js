import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="border-b py-2">
          <p>{item.name}</p>
          <p>${item.price} x {item.quantity}</p>
        </div>
      ))}
      <p className="mt-4 font-bold">Total: ${total}</p>
      <button className="bg-green-500 text-white px-4 py-2 mt-4">Checkout</button>
    </div>
  );
};

export default Cart;