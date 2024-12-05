import TransactionCard from './TransactionCard';

const TransactionList = ({ transactions, onUpdate, onDelete }) => {
  return (
    <section className="transactions-container">
      <h2>Transactions</h2>
      <div className="fetch-result">
        {transactions.length === 0 ? (
          <p>No transactions available.</p>
        ) : (
          transactions.map((item) => (
            <TransactionCard 
              key={item.id} 
              transaction={item} 
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default TransactionList;
