import React from 'react';
import { CustomerInfo } from './CustomerInfo';
import { CartTable } from './CartTable';
import { TotalsSection } from './TotalsSection';
import { useCart } from '../../hooks/useCart';
import { Plus } from 'lucide-react';

export const SalesPanel: React.FC = () => {
  const {  totalAmount, totalQty } = useCart();

  return (
    <div className="w-[35%] bg-white border-r border-gray-300 flex flex-col p-2 gap-2">
      
      <CustomerInfo />
      
      <CartTable />
      
      <div className="flex px-3 gap-2 text-blue-600 font-bold cursor-pointer  hover:text-blue-800 text-lg">
  <span className="text-xl"><Plus/></span>
  Add Row
</div>

      <TotalsSection 
        totalQty={totalQty}
        totalAmount={totalAmount}
      />
    </div>
  );
};