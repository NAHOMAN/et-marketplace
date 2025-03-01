import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Destructure `id` from URL params

  // Example: Fetch product details using `id`
  const product = {
    id: 1,
    name: 'Product 1',
    price: 10,
    image: 'https://via.placeholder.com/150',
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="my-4 w-full h-64 object-cover" />
      <p className="text-gray-700">Price: ${product.price}</p>
      <p className="text-gray-700">Product ID: {id}</p> {/* Use the `id` variable here */}
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;