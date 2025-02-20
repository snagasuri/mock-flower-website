import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import SetupPage from './pages/SetupPage';
import ChatbotForm from './components/ChatbotForm';
import ChatbotSuccessPage from './pages/ChatbotSuccessPage';
import { CartProvider } from './contexts/CartContext';
import PageTransition from './components/PageTransition';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/setup" element={<SetupPage />} />
            <Route path="/chatbot-setup" element={<ChatbotForm />} />
            <Route path="/chatbot-success" element={<ChatbotSuccessPage />} />
          </Routes>
        </PageTransition>
      </CartProvider>
    </Router>
  );
};

export default App;
