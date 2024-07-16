import React from 'react';
import Header from '../components/Header';
import testImage from './test.png';

const HomePage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center h-[calc(100vh-80px)]">
      <div className="relative w-full max-w-2xl aspect-square">
        <img src={testImage} alt="Beautiful flower arrangement" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <p className="text-xl mb-6">fresh flowers for every occasion</p>
          <button className="bg-white text-pink-500 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
            shop now
          </button>
        </div>
      </div>
    </main>
  </div>
);

export default HomePage;
