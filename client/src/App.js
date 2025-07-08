import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || '/api';

function App() {
  const [feedPlans, setFeedPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeedPlans();
  }, []);

  const fetchFeedPlans = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/feed-plans`);
      setFeedPlans(response.data.data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar planos alimentares');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const checkApiHealth = async () => {
    try {
      const response = await axios.get(`${API_URL}/health`);
      alert(`API Status: ${response.data.status} - ${response.data.message}`);
    } catch (err) {
      alert('Erro ao conectar com a API');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🍽️ FeedPlanner</h1>
        <p>Sistema de Planejamento de Alimentação</p>
        
        <div className="actions">
          <button onClick={checkApiHealth} className="btn-primary">
            Verificar API
          </button>
          <button onClick={fetchFeedPlans} className="btn-secondary">
            Recarregar Planos
          </button>
        </div>

        <div className="content">
          <h2>Planos Alimentares</h2>
          
          {loading && <p className="loading">Carregando...</p>}
          
          {error && <p className="error">{error}</p>}
          
          {!loading && !error && (
            <div className="feed-plans">
              {feedPlans.length === 0 ? (
                <p>Nenhum plano alimentar encontrado.</p>
              ) : (
                <ul>
                  {feedPlans.map(plan => (
                    <li key={plan.id} className="plan-item">
                      <strong>{plan.name}</strong>
                      <p>{plan.description}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
