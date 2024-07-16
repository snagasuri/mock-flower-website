import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

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
      <button
        onClick={toggleExpand}
        className="w-full bg-green-500 text-white py-2 hover:bg-green-600 transition-colors"
      >
        View Full Cart
      </button>
    </div>
  );

  const FullCart = () => (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-4/5 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Shopping Cart</h3>
          <div className="mt-2 px-7 py-3">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-md text-gray-600">£{item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={toggleExpand}
              className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <button
        onClick={toggleExpand}
        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        🛒 ({cart.length})
      </button>
      {!isExpanded && cart.length > 0 && <MiniCart />}
      {isExpanded && <FullCart />}
    </div>
  );
};

export default ShoppingCart;
