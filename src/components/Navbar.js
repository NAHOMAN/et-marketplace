import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">ET Marketplace</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/products" className="hover:underline" activeClassName="text-yellow-300">
            Products
          </NavLink>
          <NavLink to="/cart" className="hover:underline" activeClassName="text-yellow-300">
            Cart
          </NavLink>
          <NavLink to="/login" className="hover:underline" activeClassName="text-yellow-300">
            Login
          </NavLink>
          <NavLink to="/signup" className="hover:underline" activeClassName="text-yellow-300">
            Signup
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-blue-700">
          <NavLink to="/products" className="hover:underline" onClick={() => setIsOpen(false)}>
            Products
          </NavLink>
          <NavLink to="/cart" className="hover:underline" onClick={() => setIsOpen(false)}>
            Cart
          </NavLink>
          <NavLink to="/login" className="hover:underline" onClick={() => setIsOpen(false)}>
            Login
          </NavLink>
          <NavLink to="/signup" className="hover:underline" onClick={() => setIsOpen(false)}>
            Signup
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
