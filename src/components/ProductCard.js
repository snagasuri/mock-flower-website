import React, { useState } from 'react';

const ProductCard = ({ name, price, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log(`Added ${name} to cart`);
    // Implement actual add to cart functionality here
  };

  return (
    <div className="flex flex-col">
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleAddToCart}
      >
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <button 
              className="px-2 py-1 text-xs bg-white text-black rounded hover:bg-gray-200 transition-colors"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
      <div className="mt-2">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-sm text-gray-500">£{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;