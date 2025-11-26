import React from 'react';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div 
      onClick={() => onAddToCart(product)}
      className="bg-yellow-100 shadow-md border border-amber-200  rounded-xl flex flex-col items-center justify-between h-52 relative cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 hover:bg-yellow-100"
    >
      {/* Price Tag - Larger */}
    <div className="absolute -top-2 left-2 bg-green-600 text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-md rotate-355">
  ${product.price.toFixed(3)}
</div>

      {/* Shopping Cart Icon - Larger */}
      <div className="flex flex-col items-center justify-center flex-1">
        <ShoppingCart className="text-orange-700 mb-3" size={32} />
        
        {/* Product Name - Larger and Better Styled */}
        <div className="text-center">
          <div className="text-sm font-bold text-gray-900 leading-snug mb-1 line-clamp-2">
            {product.name}
          </div>
          <div className="text-xs text-gray-600 font-medium">
            {product.category}
          </div>
        </div>
      </div>

      {/* Low Stock Warning - Larger */}
      {product.lowStock && (
        <div className="w-full bg-red-500 text-white text-xs font-bold py-2 rounded-b-xl mt-2 shadow-sm flex items-center justify-center gap-1">
          <span className="text-base">⚠</span>
          LOW STOCK
        </div>
      )}

      {/* Add subtle hover effect indicator */}
      <div className="absolute bottom-2 right-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-xs font-semibold">Click to Add</div>
      </div>
    </div>
  );
};