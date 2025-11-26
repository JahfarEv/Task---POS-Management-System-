import React from 'react';
import { useCart } from '../../hooks/useCart';
import { Trash2 } from 'lucide-react';

export const CartTable: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <>
      {/* Cart Table Header */}
      <div className="grid grid-cols-12 bg-blue-700 text-white text-xs py-1 px-2 mt-2 font-semibold">
        <div className="col-span-1">#</div>
        <div className="col-span-5">ITEM NAME</div>
        <div className="col-span-2 text-center">QTY</div>
        <div className="col-span-2 text-right">PRICE</div>
        <div className="col-span-2 text-right">AMOUNT</div>
      </div>

      {/* Cart Items (Scrollable) */}
      <div className="flex-1 overflow-y-auto border-b border-gray-200 max-h-64">
        {cart.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-400 italic">
            No items added yet
          </div>
        ) : (
          cart.map((item, idx) => (
            <div key={item.id} className="grid grid-cols-12 text-xs py-2 px-2 border-b hover:bg-blue-50 group">
              <div className="col-span-1">{idx + 1}</div>
              <div className="col-span-5 truncate flex items-center justify-between">
                {item.name}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 ml-2"
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="col-span-2 text-center">
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                  className="w-12 text-center border rounded"
                  min="1"
                />
              </div>
              <div className="col-span-2 text-right">{item.price.toFixed(3)}</div>
              <div className="col-span-2 text-right font-bold">{item.amount.toFixed(3)}</div>
            </div>
          ))
        )}
      </div>
    </>
  );
};