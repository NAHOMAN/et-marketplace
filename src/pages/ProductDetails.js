import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold text-center">Product Details - {id}</h1>
      <p className="text-center text-gray-600 mt-4">More information about the product.</p>
    </div>
  );
};

export default ProductDetails;
