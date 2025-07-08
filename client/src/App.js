import React, { useState, useEffect } from 'react';
import './App.css';

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
      const response = await fetch('/api/feed-plans');
      if (!response.ok) {
        throw new Error('Erro ao buscar planos alimentares');
      }
      const data = await response.json();
      setFeedPlans(data.data || []);
    } catch (err) {
      setError(err.message);
      console.error('Erro ao buscar planos:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>🍽️ FeedPlanner</h1>
          <p>Carregando...</p>
        </header>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>🍽️ FeedPlanner</h1>
          <p>Erro: {error}</p>
          <button onClick={fetchFeedPlans}>Tentar novamente</button>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>🍽️ FeedPlanner</h1>
        <p>Sistema de Planejamento de Alimentação</p>
        
        <div className="content">
          <h2>Planos Alimentares</h2>
          
          <div className="feed-plans">
            {feedPlans.length === 0 ? (
              <p>Nenhum plano alimentar encontrado.</p>
            ) : (
              <ul>
                {feedPlans.map(plan => (
                  <li key={plan.id} className="plan-item">
                    <strong>{plan.name}</strong>
                    <p>{plan.description}</p>
                    <div className="plan-details">
                      <span className="duration">📅 {plan.duration}</span>
                      <span className="status">🔄 {plan.status}</span>
                    </div>
                    {plan.meals && (
                      <div className="meals">
                        <small>Refeições: {plan.meals.join(', ')}</small>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
