import { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';

export const useProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Items');

  const filteredProducts = selectedCategory === 'All Items' 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.category === selectedCategory);

  return {
    categories: CATEGORIES,
    selectedCategory,
    setSelectedCategory,
    filteredProducts
  };
};