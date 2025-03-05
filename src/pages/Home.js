import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to ET Marketplace</h1>
        <p className="mt-4 text-lg md:text-xl">Your one-stop shop for the best Ethiopian products</p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200">Shop Now</button>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Example Product Card */}
          {[1, 2, 3].map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <img src="https://via.placeholder.com/300" alt="Product" className="w-full rounded-md" />
              <h3 className="text-lg font-semibold mt-4">Product Name</h3>
              <p className="text-gray-600">$99.99</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {["Electronics", "Clothing", "Home & Kitchen", "Beauty"].map((category, index) => (
            <div key={index} className="p-6 bg-gray-200 rounded-lg text-center font-semibold text-gray-700 hover:bg-gray-300 cursor-pointer">
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-500 text-white mt-12 px-6">
        <h2 className="text-3xl font-bold">Join Our Marketplace</h2>
        <p className="mt-4 text-lg">Start selling your products today and reach thousands of customers</p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200">Get Started</button>
      </section>
    </div>
  );
};

export default Home;