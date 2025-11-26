export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  lowStock?: boolean;
  barcode?: string;
}

export interface CartItem extends Product {
  qty: number;
  unit?: string;
  amount: number;
}

export interface Customer {
  name: string;
  phone: string;
  paymentMethod: 'Cash' | 'Card' | 'Digital';
}

export interface Invoice {
  id: string;
  date: string;
  customer: Customer;
  items: CartItem[];
  subtotal: number;
  tax: number;
  discount: number;
  adjustment: number;
  total: number;
}