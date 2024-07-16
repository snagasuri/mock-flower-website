import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ShoppingCart as CartIcon } from 'lucide-react';

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);

  const MiniCart = () => (
    <div className="absolute right-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="p-4 max-h-48 overflow-y-auto">
        {cart.slice(0, 3).map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">{item.name}</span>
            <span className="text-sm text-gray-600">£{item.price}</span>
          </div>
        ))}
        {cart.length > 3 && (
          <div className="text-sm text-gray-500 text-center">
            {cart.length - 3} more item(s)
          </div>
        )}
      </div>
      <Link to="/cart">
        <button className="w-full bg-green-500 text-white py-2 hover:bg-green-600 transition-colors">
          View Full Cart
        </button>
      </Link>
    </div>
  );

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to="/cart">
        <CartIcon className="h-6 w-6 cursor-pointer" />
      </Link>
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
          {cart.length}
        </span>
      )}
      {isHovered && cart.length > 0 && <MiniCart />}
    </div>
  );
};

export default ShoppingCart;
