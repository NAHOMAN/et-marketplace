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
    <div className="container mt-5">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="img-fluid" />
      <p>Price: ${product.price}</p>
      <p>Product ID: {id}</p> {/* Use the `id` variable here */}
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;