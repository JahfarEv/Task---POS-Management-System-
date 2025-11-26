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
      <div className="bg-blue-800 text-white flex justify-between px-4 py-1 text-sm font-bold">
        <span>TOTAL QTY: {totalQty}</span>
        <span>TOTAL AMOUNT: {totalAmount.toFixed(3)}</span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
        <div className="flex justify-between items-center">
          <span>Total Tax</span>
          <input className="w-20 text-right border rounded p-1" defaultValue="0.000" />
        </div>
        <div className="flex justify-between items-center">
          <span>Total Taxable</span>
          <input className="w-20 text-right border rounded p-1" defaultValue="0.000" />
        </div>
        <div className="flex justify-between items-center">
          <span>Total Discount</span>
          <input className="w-20 text-right border rounded p-1" defaultValue="0.000" />
        </div>
        <div className="flex justify-between items-center">
          <span>Adjustment</span>
          <input className="w-20 text-right border rounded p-1" defaultValue="0" />
        </div>
      </div>

      <div className="bg-yellow-200 text-right p-2 text-2xl font-bold border border-yellow-300 rounded">
        {totalAmount.toFixed(3)}
      </div>
    </>
  );
};