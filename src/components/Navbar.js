import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa'; // Icons for cart and search

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              E-Commerce
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-gray-900">
              Shop
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Cart Icon */}
            <Link to="/cart" className="text-gray-700 hover:text-gray-900 relative">
              <FaShoppingCart className="text-2xl" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                3 {/* Replace with dynamic cart count */}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="flex items-center md:hidden">
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link to="/shop" className="block text-gray-700 hover:text-gray-900">
            Shop
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link to="/contact" className="block text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;