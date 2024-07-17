import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ChatbotForm from './components/ChatbotForm';
import { CartProvider } from './contexts/CartContext';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <Router>
      <CartProvider>
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/chatbot-setup" element={<ChatbotForm />} />
          </Routes>
        </PageTransition>
      </CartProvider>
    </Router>
  );
}

export default App;
