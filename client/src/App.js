import React, { useState } from 'react';
import './App.css';

function App() {
  const [feedPlans] = useState([
    { id: 1, name: 'Plano Semanal', description: 'Plano alimentar para 7 dias' },
    { id: 2, name: 'Plano Mensal', description: 'Plano alimentar para 30 dias' }
  ]);

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
