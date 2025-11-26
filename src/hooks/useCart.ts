import { useState } from 'react';
import type { CartItem, Product } from '../types';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, qty: item.qty + 1, amount: (item.qty + 1) * item.price }
            : item
        );
      }
      return [...prev, { 
        ...product, 
        qty: 1, 
        unit: 'PCS',
        amount: product.price 
      }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQty: number) => {
    if (newQty < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, qty: newQty, amount: newQty * item.price }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.amount, 0);
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalAmount,
    totalQty
  };
};