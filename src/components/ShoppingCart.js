import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ShoppingCart as CartIcon } from 'lucide-react';

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
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
            <h3 className="text-lg font-semibold mb-2">Cart Items</h3>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <span>{item.name}</span>
                <span>£{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
