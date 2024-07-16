import React, { createContext, useState, useEffect, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      console.log('Loaded cart from localStorage:', parsedCart);
      setCart(parsedCart);
    }
  }, []);

  useEffect(() => {
    console.log('Saving cart to localStorage:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((item) => {
    setCart((prevCart) => {
      console.log('Adding to cart:', item);
      console.log('Previous cart:', prevCart);
      const newCart = [...prevCart, item];
      console.log('New cart:', newCart);
      return newCart;
    });
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCart((prevCart) => {
      console.log('Removing from cart:', itemId);
      console.log('Previous cart:', prevCart);
      const newCart = prevCart.filter((item) => item.id !== itemId);
      console.log('New cart:', newCart);
      return newCart;
    });
  }, []);

  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
