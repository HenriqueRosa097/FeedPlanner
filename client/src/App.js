import React, { useState } from 'react';
import './App.css';

function App() {
  const [feedPlans] = useState([
    { 
      id: 1, 
      name: 'Plano Semanal', 
      description: 'Plano alimentar para 7 dias',
      duration: '7 dias',
      meals: ['Café da manhã', 'Almoço', 'Jantar'],
      status: 'ativo'
    },
    { 
      id: 2, 
      name: 'Plano Mensal', 
      description: 'Plano alimentar para 30 dias',
      duration: '30 dias',
      meals: ['Café da manhã', 'Lanche', 'Almoço', 'Lanche da tarde', 'Jantar'],
      status: 'ativo'
    },
    { 
      id: 3, 
      name: 'Plano Personalizado', 
      description: 'Plano alimentar customizado',
      duration: 'Flexível',
      meals: ['Personalizável'],
      status: 'em_desenvolvimento'
    }
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
