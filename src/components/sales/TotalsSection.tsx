import React from 'react';

interface TotalsSectionProps {
  totalQty: number;
  totalAmount: number;
}

export const TotalsSection: React.FC<TotalsSectionProps> = ({
  totalQty,
  totalAmount
}) => {
  return (
    <>
      {/* Totals Section */}
      <div className="bg-blue-800 text-white flex justify-between px-4 py-2  font-bold">
        <span>TOTAL QTY: {totalQty}</span>
        <span>TOTAL AMOUNT: {totalAmount.toFixed(3)}</span>
      </div>

     <div className="grid grid-cols-2 gap-4 text-sm my-3">
  <div className="relative">
    <span className="absolute -top-2 left-3 bg-white px-2 text-gray-600 font-medium text-xs">
      Total Tax
    </span>
    <input className="w-full border border-gray-300 rounded-md p-2 text-right" defaultValue="0.000" />
  </div>
  <div className="relative">
    <span className="absolute -top-2 left-3 bg-white px-2 text-gray-600 font-medium text-xs">
      Total Taxable
    </span>
    <input className="w-full border border-gray-300 rounded-md p-2 text-right" defaultValue="0.000" />
  </div>
  <div className="relative">
    <span className="absolute -top-2 left-3 bg-white px-2 text-gray-600 font-medium text-xs">
      Total Discount
    </span>
    <input className="w-full border border-gray-300 rounded-md p-2 text-right" defaultValue="0.000" />
  </div>
  <div className="relative">
    <span className="absolute -top-2 left-3 bg-white px-2 text-gray-600 font-medium text-xs">
      Adjustment
    </span>
    <input className="w-full border border-gray-300 rounded-md p-2 text-right" defaultValue="0" />
  </div>
</div>

    <div className="bg-yellow-200 text-right p-2 text-2xl font-bold border border-yellow-300 rounded w-fit ml-auto px-6">
  {totalAmount.toFixed(3)}
</div>
    </>
  );
};