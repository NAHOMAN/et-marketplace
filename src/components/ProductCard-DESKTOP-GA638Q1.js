import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;