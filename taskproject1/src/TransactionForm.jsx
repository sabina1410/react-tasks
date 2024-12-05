import { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    amount: ''
  });
  const [createResult, setCreateResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { from, to, amount } = formData;
    if (!from || !to || !amount) {
      setCreateResult('All fields are required.');
      return;
    }

    try {
      const response = await fetch('https://acb-api.algoritmika.org/api/transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ from, to, amount }),
      });

      if (!response.ok) {
        throw new Error('Failed to add transaction.');
      }

      const newTransaction = await response.json();
      onAddTransaction(newTransaction);
      setCreateResult('Data added.');
      setFormData({ from: '', to: '', amount: '' });
    } catch (err) {
      console.error(err);
      setCreateResult('Failed to add transaction.');
    }
  };

  return (
    <section className="create-container">
      <h2>Add New Transaction</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="from-input"
          placeholder="Sender"
          value={formData.from}
          onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          required
        />
        <input
          type="text"
          className="to-input"
          placeholder="Receiver"
          value={formData.to}
          onChange={(e) => setFormData({ ...formData, to: e.target.value })}
          required
        />
        <input
          type="number"
          className="amount-input"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
        />
        <button type="submit" className="btn primary-btn">Add</button>
      </form>
      <div className="create-result">{createResult}</div>
    </section>
  );
};

export default TransactionForm;
