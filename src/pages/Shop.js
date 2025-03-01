import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
];

const Shop = () => {
  return (
    <div className="container mt-5">
      <h1>Shop</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;