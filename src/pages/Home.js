import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-20 bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to ET Marketplace</h1>
      <p className="mt-4">Find the best deals on top products.</p>
      <Link to="/products" className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
        Shop Now
      </Link>
    </div>
  );
};

export default Home;
