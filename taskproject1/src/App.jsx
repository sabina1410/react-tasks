import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Header';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [createResult, setCreateResult] = useState('');

  useEffect(() => {
    fetchAllTransactions();
  }, []);

  const fetchAllTransactions = async () => {
    const url = 'https://acb-api.algoritmika.org/api/transaction';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch transactions.');
      }
      const data = await response.json();
      setTransactions(data.reverse());
    } catch (err) {
      console.error(err);
      setCreateResult('Failed to fetch transactions.');
    }
  };

  const handleAddTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
    setCreateResult('Data added.');
  };

  const handleUpdateTransaction = async (id, updatedData) => {
    const url = `https://acb-api.algoritmika.org/api/transaction/${id}`;
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error('Update failed!');
      }
      fetchAllTransactions();
      alert(`Update successful for transaction ID: ${id}`);
    } catch (err) {
      console.error(err);
      alert('Update failed!');
    }
  };

  const handleDeleteTransaction = async (id) => {
    const url = `https://acb-api.algoritmika.org/api/transaction/${id}`;
    try {
      const response = await fetch(url, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Deletion failed!');
      }
      fetchAllTransactions();
      alert(`Transaction ID: ${id} deleted!`);
    } catch (err) {
      console.error(err);
      alert('Deletion failed!');
    }
  };

  return (
    <div className="app">
      <Header />
      <TransactionList 
        transactions={transactions}
        onUpdate={handleUpdateTransaction}
        onDelete={handleDeleteTransaction}
      />
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
};

export default App;
