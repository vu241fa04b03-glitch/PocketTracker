import React from 'react';
import { Trash2 } from 'lucide-react';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="list-card">
      <h3>Recent Transactions</h3>
      {transactions.length === 0 ? (
        <p className="empty-state">No transactions recorded yet.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((t) => (
            <li key={t._id} className={\list-item \\}>
              <div className="item-details">
                <span className="item-title">{t.title}</span>
                <span className="item-meta">{t.category} • {new Date(t.date).toLocaleDateString('en-IN')}</span>
              </div>
              <div className="item-actions">
                <span className="item-amount">
                  {t.type === 'income' ? '+' : '-'} ?{Number(t.amount).toLocaleString('en-IN')}
                </span>
                <button
                  onClick={() => onDelete(t._id)}
                  className="btn-delete"
                  title="Delete Entry"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
