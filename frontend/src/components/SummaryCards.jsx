import React from 'react';
import { TrendingUp, TrendingDown, IndianRupee } from 'lucide-react';

const SummaryCards = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="summary-grid">
      <div className="card balance-card">
        <div className="card-header">
          <span>Net Balance</span>
          <IndianRupee size={20} />
        </div>
        <h3>?{balance.toLocaleString('en-IN')}</h3>
      </div>
      <div className="card income-card">
        <div className="card-header">
          <span>Total Income</span>
          <TrendingUp size={20} />
        </div>
        <h3>+ ?{income.toLocaleString('en-IN')}</h3>
      </div>
      <div className="card expense-card">
        <div className="card-header">
          <span>Total Expense</span>
          <TrendingDown size={20} />
        </div>
        <h3>- ?{expense.toLocaleString('en-IN')}</h3>
      </div>
    </div>
  );
};

export default SummaryCards;
