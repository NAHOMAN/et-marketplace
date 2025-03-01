import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">E-Commerce</Link>
        <div className="space-x-4">
          <Link to="/shop" className="text-white hover:text-gray-300">Shop</Link>
          <Link to="/cart" className="text-white hover:text-gray-300">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;