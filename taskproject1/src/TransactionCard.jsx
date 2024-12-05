const TransactionCard = ({ transaction, onUpdate, onDelete }) => {
    return (
      <div className="transfer-card">
        <h3>Transaction ID: {transaction.id}</h3>
        <p><span>Amount:</span> <span className="amount">{transaction.amount}</span></p>
        <p><span>From:</span> {transaction.from}</p>
        <p><span>To:</span> {transaction.to}</p>
        <div className="card-buttons">
          <button
            className="update-btn"
            onClick={() => {
              const updatedAmount = prompt("Enter new amount:", transaction.amount);
              const updatedFrom = prompt("Enter new sender:", transaction.from);
              const updatedTo = prompt("Enter new receiver:", transaction.to);
              if (updatedAmount && updatedFrom && updatedTo) {
                onUpdate(transaction.id, { amount: updatedAmount, from: updatedFrom, to: updatedTo });
              }
            }}
          >
            Update
          </button>
          <button
            className="delete-btn"
            onClick={() => {
              if (window.confirm(`Are you sure you want to delete transaction ID: ${transaction.id}?`)) {
                onDelete(transaction.id);
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default TransactionCard;
  