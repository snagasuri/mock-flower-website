import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import ShoppingCart from './ShoppingCart';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-pink-300 text-white">
    <nav className="flex space-x-4">
      <Link to="/" className="hover:underline">home</Link>
      <Link to="/shop" className="hover:underline">shop</Link>
      <Link to="/about" className="hover:underline">about</Link>
    </nav>
    <div className="text-xl font-bold lowercase absolute left-1/2 transform -translate-x-1/2">
      margaret's
    </div>
    <div className="flex items-center space-x-4">
      <Search className="h-6 w-6 cursor-pointer" />
      <ShoppingCart />
      <Menu className="h-6 w-6 cursor-pointer" />
    </div>
  </header>
);

export default Header;
