import React from "react";
import {
  RotateCcw,
  Trash2,
  Printer,
  FileText,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  User,
  BarChart3,
  Receipt,
  Undo,
  Calculator,
  Package,
} from "lucide-react";
import { useCart } from "../../hooks/useCart";

export const ActionBar: React.FC = () => {
  const { clearCart } = useCart();

  return (
    <div className="h-auto bg-white border-t p-2">
      {/* First Row - 6 buttons */}
      <div className="grid grid-cols-6 gap-2 mb-2">
        <button className="bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-lg flex flex-col items-center justify-center py-4 text-sm font-bold transition-all hover:shadow-md h-16">
          <span className="text-xl mb-1">⏸</span> Hold
        </button>
        <button className="bg-blue-100 hover:bg-blue-200 border border-blue-300 rounded-lg flex flex-col items-center justify-center py-4 text-sm font-bold transition-all hover:shadow-md h-16">
          <RotateCcw size={18} className="mb-1" /> Recall
        </button>
        <button className="bg-green-100 hover:bg-green-200 border border-green-300 rounded-lg flex flex-col items-center justify-center py-4 text-sm font-bold transition-all hover:shadow-md h-16">
          <Plus size={18} className="mb-1" /> QTY
        </button>
        <button
          onClick={clearCart}
          className="bg-red-100 hover:bg-red-200 border border-red-300 rounded-lg flex flex-col items-center justify-center py-4 text-sm font-bold text-red-800 transition-all hover:shadow-md h-16"
        >
          <Trash2 size={18} className="mb-1" /> Del All
        </button>
        <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold rounded-lg text-sm flex flex-col items-center justify-center py-4 shadow-md transition-all hover:scale-105 h-16">
          <FileText size={18} className="mb-1" />
          PREVIEW & SAVE
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-sm flex flex-col items-center justify-center py-4 shadow-md transition-all hover:scale-105 h-16">
          <Printer size={18} className="mb-1" />
          SAVE & PRINT
        </button>
      </div>

      {/* Second Row - 7 buttons */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center py-3 text-xs font-bold transition-all h-12">
          <ChevronLeft size={14} className="mr-1" /> Prev
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center py-3 text-xs font-bold transition-all h-12">
          Next <ChevronRight size={14} className="ml-1" />
        </button>
        <button className="bg-orange-100 hover:bg-orange-200 border border-orange-300 rounded-lg flex items-center justify-center py-3 text-xs font-bold transition-all h-12">
          <Minus size={14} className="mr-1" /> QTY
        </button>
        <button className="bg-red-100 hover:bg-red-200 border border-red-300 rounded-lg flex items-center justify-center py-3 text-xs font-bold text-red-800 transition-all h-12">
          <Trash2 size={14} className="mr-1" /> Del Row
        </button>

        <button className="bg-cyan-100 hover:bg-cyan-200 border border-cyan-300 rounded-lg flex items-center justify-center py-3 text-xs font-bold transition-all h-12">
          <BarChart3 size={14} className="mr-1" /> Report
        </button>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between px-3 text-xs h-12">
          <span className="text-gray-600">Cash:</span>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between px-3 text-xs h-12">
          <span className="text-gray-600">0:00</span>
        </div>
      </div>

      {/* Third Row - 7 buttons: Re Print, S Return, Clear, Price, Accounts, Item, Balance 0.00 */}
      <div className="grid grid-cols-7 gap-2">
        {/* Re Print */}
        <button className="bg-blue-100 hover:bg-blue-200 border border-blue-300 rounded-lg flex items-center justify-center py-3 text-xs font-bold transition-all h-12">
          <Receipt size={14} className="mr-1" /> Re Print
        </button>

        {/* S Return */}
        <button className="bg-orange-100 hover:bg-orange-200 border border-orange-300 rounded-lg flex items-center justify-center py-3 text-xs font-bold transition-all h-12">
          <Undo size={14} className="mr-1" /> S Return
        </button>

        {/* Clear */}
        <button className="bg-red-100 hover:bg-red-200 border border-red-300 rounded-lg flex items-center justify-center py-3 text-xs font-bold text-red-800 transition-all h-12">
          <Trash2 size={14} className="mr-1" /> Clear
        </button>

        {/* Price */}
        <button className="bg-green-100 hover:bg-green-200 border border-green-300 rounded-lg flex items-center justify-center py-3 text-xs font-bold transition-all h-12">
          <Calculator size={14} className="mr-1" /> Price
        </button>

        {/* Accounts */}
        <button className="bg-purple-100 hover:bg-purple-200 border border-purple-300 rounded-lg flex items-center justify-center py-3 text-xs font-bold transition-all h-12">
          <User size={14} className="mr-1" /> Accounts
        </button>

        {/* Item */}
        <button className="bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-lg flex items-center justify-center py-3 text-xs font-bold transition-all h-12">
          <Package size={14} className="mr-1" /> Item
        </button>

        {/* Balance 0.00 */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg flex items-center justify-between px-3 text-xs h-12">
          <span className="text-gray-600 font-bold">Balance:</span>
          <span className="font-bold text-green-700 text-sm">0.00</span>
        </div>
      </div>
    </div>
  );
};
