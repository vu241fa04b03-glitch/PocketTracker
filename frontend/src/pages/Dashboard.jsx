import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { API_URL } from '../config';
import SummaryCards from '../components/SummaryCards';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    try {
      const config = { headers: { Authorization: \Bearer \\ } };
      const { data } = await axios.get(\\/transactions\, config);
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleAddTransaction = async (txData) => {
    try {
      const config = { headers: { Authorization: \Bearer \\ } };
      const { data } = await axios.post(\\/transactions\, txData, config);
      setTransactions([data, ...transactions]);
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to add entry');
    }
  };

  const handleDeleteTransaction = async (id) => {
    try {
      const config = { headers: { Authorization: \Bearer \\ } };
      await axios.delete(\\/transactions/\\, config);
      setTransactions(transactions.filter((t) => t._id !== id));
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to delete entry');
    }
  };

  if (loading) {
    return <div className="loader">Loading your dashboard...</div>;
  }

  return (
    <main className="dashboard-container">
      <SummaryCards transactions={transactions} />
      <div className="main-content-grid">
        <TransactionForm onAdd={handleAddTransaction} />
        <TransactionList
          transactions={transactions}
          onDelete={handleDeleteTransaction}
        />
      </div>
    </main>
  );
};

export default Dashboard;
