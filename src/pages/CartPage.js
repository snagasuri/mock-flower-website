import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Header from '../components/Header';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-white-300 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 lowercase">your shopping cart</h1>
          {cart.length === 0 ? (
            <p>your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2 border-b">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
                  <h3 className="text-md font-medium lowercase">{item.name}</h3>
                  <p className="text-sm text-gray-600">£{item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    remove
                  </button>
                </div>
              ))}
              <div className="mt-6">
                <p className="text-lg font-bold lowercase">
                  total: £{cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}
                </p>
                <button className="mt-4 px-6 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition-colors lowercase">
                  proceed to checkout
                </button>
              </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CartPage;
