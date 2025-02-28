import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-20 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to ET Marketplace</h1>
      <p className="mt-4 text-lg text-gray-700">Find the best deals on top products.</p>
      <Link 
        to="/shop" 
        className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default Home;
