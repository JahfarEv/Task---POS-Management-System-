import React from 'react';
import { CustomerInfo } from './CustomerInfo';
import { CartTable } from './CartTable';
import { TotalsSection } from './TotalsSection';
import { useCart } from '../../hooks/useCart';

export const SalesPanel: React.FC = () => {
  const {  totalAmount, totalQty } = useCart();

  return (
    <div className="w-[35%] bg-white border-r border-gray-300 flex flex-col p-2 gap-2">
      <div className="font-bold text-lg text-center mb-2">Sales</div>
      
      <CustomerInfo />
      
      <CartTable />
      
      <div className="text-blue-600 font-semibold cursor-pointer text-sm hover:text-blue-800">
        + Add Row
      </div>

      <TotalsSection 
        totalQty={totalQty}
        totalAmount={totalAmount}
      />
    </div>
  );
};