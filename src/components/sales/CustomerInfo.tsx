import React, { useState } from 'react';
import { getCurrentDate, generateInvoiceNumber } from '../../utils/helpers';

export const CustomerInfo: React.FC = () => {
  const [invoiceNo] = useState(generateInvoiceNumber());
  const [date] = useState(getCurrentDate());
  const [customerName, setCustomerName] = useState('Cash');
  const [phone, setPhone] = useState('');

  return (
    <>
      {/* Inputs Row 1 */}
      <div className="flex gap-2">
        <div className="w-1/3">
          <label className="text-gray-500 text-xs">Invoice No</label>
          <input 
            type="text" 
            value={invoiceNo}
            className="w-full border rounded px-2 py-1 bg-gray-50" 
            readOnly 
          />
        </div>
        <div className="w-1/3">
          <label className="text-gray-500 text-xs">User</label>
          <input 
            type="text" 
            value="7034753806" 
            className="w-full border rounded px-2 py-1 bg-gray-50" 
            readOnly 
          />
        </div>
        <div className="w-1/3">
          <label className="text-gray-500 text-xs">Date</label>
          <input 
            type="date" 
            value={date}
            className="w-full border rounded px-2 py-1" 
            readOnly
          />
        </div>
      </div>

      {/* Inputs Row 2 */}
      <div className="flex gap-2">
        <input 
          placeholder="Customer Name" 
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="flex-1 border rounded px-2 py-1" 
        />
        <select 
          className="border rounded px-2 py-1 w-24"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        >
          <option>Cash</option>
          <option>Card</option>
          <option>Digital</option>
        </select>
      </div>
      
      <input 
        placeholder="Phone" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border rounded px-2 py-1" 
      />
      
      <div className="flex gap-2">
        <input placeholder="Bar Code" className="flex-1 border rounded px-2 py-1" />
        <input placeholder="Item" className="flex-1 border rounded px-2 py-1" />
      </div>
    </>
  );
};