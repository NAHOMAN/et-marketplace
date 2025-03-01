import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const product = { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="my-4" />
      <p>Price: ${product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;