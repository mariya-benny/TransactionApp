import React from 'react';
import TransactionList from './components/TransactionList/TransactionList';
import './App.css';

const transactions = [
  { id: 1, name: 'Transaction 1', amount: '$10.00' },
  { id: 2, name: 'Transaction 2', amount: '$20.00' },
  { id: 3, name: 'Transaction 3', amount: '$30.00' },
  { id: 4, name: 'Transaction 4', amount: '$40.00' },
  { id: 5, name: 'Transaction 5', amount: '$50.00' },
  { id: 6, name: 'Transaction 6', amount: '$60.00' },
];

function App() {
  return (
    <div className="app">
      <h1>Transactions List</h1>
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
