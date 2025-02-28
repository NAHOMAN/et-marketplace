import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">ET Marketplace</Link>
        <div className="space-x-4">
          <Link to="/shop" className="hover:text-gray-300">Shop</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
          <Link to="/profile" className="hover:text-gray-300">Profile</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
