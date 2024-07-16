import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      console.log('Adding to cart:', item);
      console.log('Previous cart:', prevCart);
      return [...prevCart, item];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      console.log('Removing from cart:', itemId);
      console.log('Previous cart:', prevCart);
      return prevCart.filter((item) => item.id !== itemId);
    });
  };

  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
