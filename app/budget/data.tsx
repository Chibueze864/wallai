export interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: string;
  category: string;
  status: 'Completed' | 'Pending';
}

export const transactionData: Transaction[] = [
  {
    id: '#IN12345',
    name: 'ABC Company',
    date: '10 Sep 2018',
    amount: '₹12,000.00',
    category: 'Income',
    status: 'Completed',
  },
  {
    id: '#IN12344',
    name: 'XYZ Company',
    date: '8 Sep 2018',
    amount: '₹10,000.00',
    category: 'Income',
    status: 'Pending',
  },
  // Add more transactions as needed
];