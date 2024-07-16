import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ id, name, price, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, name: name + 's', price, image });
  };

  return (
    <div className="flex flex-col">
      <div 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={image} alt={name} className="w-full aspect-square object-cover" />
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
      <div className="mt-4 text-left">
        <h3 className="text-lg font-medium lowercase">{name + 's'}</h3>
        <p className="text-md text-gray-600">£{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
