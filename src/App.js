import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
