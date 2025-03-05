// src/pages/Products.js
import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const sampleProducts = [
    { id: 1, name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 79.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 59.99, image: 'https://via.placeholder.com/150' }
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {sampleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;