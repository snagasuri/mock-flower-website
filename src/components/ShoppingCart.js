import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ShoppingCart as CartIcon } from 'lucide-react';

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    console.log('Cart contents:', cart);
  }, [cart]);

  const handleMouseEnter = () => {
    console.log('Mouse entered');
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log('Mouse left');
    setIsHovered(false);
  };

  console.log('Render - isHovered:', isHovered, 'cart length:', cart.length);

  return (
    <div className="relative"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
      <Link to="/cart">
        <CartIcon className="h-6 w-6 cursor-pointer" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </Link>
      {isHovered && cart.length > 0 && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-10">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 lowercase">your cart</h3>
            <ul className="list-none">
              {cart.map((item, index) => (
                <li key={index} className="mb-1 text-sm flex justify-between">
                  <span className="lowercase">{item.name}</span>
                  <span>£{item.price}</span>
                </li>
              ))}
            </ul>
            <Link to="/cart">
              <button className="mt-4 w-full px-4 py-2 bg-pink-300 text-white rounded-full hover:bg-pink-400 transition-colors lowercase">
                View Cart
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
