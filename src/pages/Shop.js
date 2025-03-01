import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
];

const Shop = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;