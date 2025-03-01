import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold">E-Commerce</Link>
        <div>
          <Link to="/shop" className="mr-4">Shop</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;