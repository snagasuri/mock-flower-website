import React from 'react';
import Header from '../components/Header';
import testImage from './test.png';

const CheckoutPage = () => (
  <div className="min-h-screen bg-white-300 flex flex-col">
    <Header />
    <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <img src={testImage} alt="Checkout confirmation" className="w-64 h-64 object-cover mb-8" />
      <p className="text-center text-xl lowercase">
        your order is confirmed. thank you for shopping at margaret's!
      </p>
    </main>
  </div>
);

export default CheckoutPage;
