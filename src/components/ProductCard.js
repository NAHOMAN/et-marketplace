// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full rounded-md" />
      <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add to Cart</button>
    </div>
  );
};

export default ProductCard;