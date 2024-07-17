import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import testImage from './hii.png';

const HomePage = () => (
  <div className="min-h-screen bg-pink-300 flex flex-col" style={{ overflow: 'hidden' }}>
    <Header />
    <main className="flex-grow container mx-auto px-6 py-12 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-4xl aspect-square">
        <img src={testImage} alt="Beautiful flower arrangement" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <p className="text-3xl mb-8">fresh flowers for every occasion</p>
          <Link to="/shop" className="bg-white text-pink-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-xl no-underline">
            shop now
          </Link>
        </div>
      </div>
    </main>
  </div>
);

export default HomePage;
