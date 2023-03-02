import React from 'react';
import './transactionList.css';

const TransactionList = ({ transactions }) => {
  return (
    <ul className="transaction-list">
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <div className="transaction-name">{transaction.name}</div>
          <div className="transaction-amount">{transaction.amount}</div>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
