// src/components/CategoryCard.js
import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="p-6 bg-gray-200 rounded-lg text-center font-semibold text-gray-700 hover:bg-gray-300 cursor-pointer">
      {category}
    </div>
  );
};

export default CategoryCard;