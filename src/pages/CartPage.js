import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-white-300 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 lowercase">your shopping cart</h1>
          {cart.length === 0 ? (
            <p className="text-xl">your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-4 border-b">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                  <h3 className="text-lg font-medium lowercase">{item.name}</h3>
                  <p className="text-md text-gray-600">£{item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-md"
                  >
                    remove
                  </button>
                </div>
              ))}
              <div className="mt-8">
                <p className="text-xl font-bold lowercase">
                  total: £{cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}
                </p>
                <Link to="/checkout">
                  <button className="mt-6 px-8 py-3 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition-colors lowercase text-lg">
                    proceed to checkout
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default CartPage;
