import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-800 text-white p-2 flex justify-between items-center shadow-md z-10">
      <div className="font-bold text-lg w-[35%] text-center">Sales</div>
      <div className="font-bold text-lg w-[20%] text-center border-l border-blue-600">Item Category</div>
      <div className="font-bold text-lg w-[45%] text-center border-l border-blue-600 flex justify-between px-4">
        <span>Item Details</span>
        <div className="flex gap-2">
          <span>⚙️</span>
          <span>👤</span>
        </div>
      </div>
    </header>
  );
};