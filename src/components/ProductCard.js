import React, { useState } from 'react';

const ProductCard = ({ name, price, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
    // Implement actual add to cart functionality here
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={image} alt={name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 text-left w-full">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-md text-gray-600">£{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
