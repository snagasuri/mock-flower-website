import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ShoppingCart as CartIcon } from 'lucide-react';

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="relative">
      <Link to="/cart">
        <CartIcon className="h-6 w-6 cursor-pointer" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </Link>
    </div>
  );
};

export default ShoppingCart;
