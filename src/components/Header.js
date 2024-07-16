import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import ShoppingCart from './ShoppingCart';

const Header = () => (
  <header className="flex justify-between items-center p-6 bg-pink-300 text-white">
    <nav className="flex space-x-6">
      <Link to="/" className="hover:underline text-lg">home</Link>
      <Link to="/shop" className="hover:underline text-lg">shop</Link>
      <Link to="/about" className="hover:underline text-lg">about</Link>
    </nav>
    <div className="text-3xl font-bold lowercase absolute left-1/2 transform -translate-x-1/2">
      margaret's
    </div>
    <div className="flex items-center space-x-6">
      <Search className="h-8 w-8 cursor-pointer" />
      <ShoppingCart />
      <Menu className="h-8 w-8 cursor-pointer" />
    </div>
  </header>
);

export default Header;
