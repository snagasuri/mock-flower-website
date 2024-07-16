import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Header from '../components/Header';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-white-300 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
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
            <div className="mt-8">
              <p className="text-xl font-bold">
                Total: £{cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}
              </p>
              <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CartPage;
