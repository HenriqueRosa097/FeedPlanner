import React, { useState, useEffect } from 'react';
import './Planner.css';

const Planner = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [shoppingList, setShoppingList] = useState([]);
  const [mealPlan, setMealPlan] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [budget, setBudget] = useState('');
  const [budgetPlan, setBudgetPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlannerData();
  }, []);

  const fetchPlannerData = async () => {
    try {
      // Fetch shopping list
      const shoppingResponse = await fetch('http://localhost:5000/api/planner/shopping-list');
      const shoppingData = await shoppingResponse.json();
      setShoppingList(shoppingData);

      // Fetch meal plan
      const mealsResponse = await fetch('http://localhost:5000/api/planner/meals');
      const mealsData = await mealsResponse.json();
      setMealPlan(mealsData);

      // Fetch suggestions
      const suggestionsResponse = await fetch('http://localhost:5000/api/planner/suggestions');
      const suggestionsData = await suggestionsResponse.json();
      setSuggestions(suggestionsData);

    } catch (error) {
      // Fallback mock data
      setShoppingList([
        "Arroz integral (1kg)",
        "Peito de frango (500g)",
        "Brócolis (1 unidade)",
        "Frutas variadas (1kg)",
        "Ovos (12 unidades)",
        "Salmão (300g)",
        "Legumes diversos (500g)",
        "Torradas integrais (1 pacote)",
        "Azeite de oliva (500ml)",
        "Iogurte natural (500ml)"
      ]);

      setMealPlan({
        segunda: {
          cafe: "Ovos mexidos com torradas integrais",
          almoco: "Salmão grelhado com legumes",
          jantar: "Peito de frango com arroz integral"
        },
        terca: {
          cafe: "Iogurte natural com frutas",
          almoco: "Salada completa com proteína",
          jantar: "Peixe assado com brócolis"
        },
        quarta: {
          cafe: "Smoothie de frutas com aveia",
          almoco: "Frango grelhado com salada",
          jantar: "Omelete com legumes"
        },
        quinta: {
          cafe: "Torradas integrais com abacate",
          almoco: "Salmão com quinoa",
          jantar: "Peito de frango com purê de batata doce"
        },
        sexta: {
          cafe: "Iogurte com granola caseira",
          almoco: "Salada de atum com grãos",
          jantar: "Peixe grelhado com arroz integral"
        },
        sabado: {
          cafe: "Panqueca integral com frutas",
          almoco: "Frango refogado com legumes",
          jantar: "Sopa nutritiva com proteína"
        },
        domingo: {
          cafe: "Ovos beneditinos integrais",
          almoco: "Assado especial do domingo",
          jantar: "Refeição leve com saladas"
        }
      });

      setSuggestions([
        "Quinoa com legumes refogados",
        "Salada de grão-de-bico com vegetais",
        "Smoothie verde com espinafre e frutas",
        "Peito de peru com batata doce",
        "Sopa de lentilha com temperos naturais",
        "Wrap integral com frango e vegetais"
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleBudgetChange = async (e) => {
    const value = e.target.value;
    setBudget(value);

    if (value && !isNaN(value) && parseFloat(value) > 0) {
      try {
        const response = await fetch('http://localhost:5000/api/planner/budget', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ renda: value }),
        });

        const data = await response.json();
        setBudgetPlan(data);
      } catch (error) {
        // Fallback calculation
        const rendaNum = parseFloat(value);
        const weeklyBudget = rendaNum / 4;
        setBudgetPlan({
          total: rendaNum,
          semanal: weeklyBudget,
          semanas: [
            { semana: 1, valor: weeklyBudget, itens: ["Proteínas", "Carboidratos", "Vegetais"] },
            { semana: 2, valor: weeklyBudget, itens: ["Frutas", "Laticínios", "Grãos"] },
            { semana: 3, valor: weeklyBudget, itens: ["Peixes", "Verduras", "Temperos"] },
            { semana: 4, valor: weeklyBudget, itens: ["Diversos", "Snacks saudáveis", "Bebidas"] }
          ]
        });
      }
    } else {
      setBudgetPlan(null);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'shopping':
        return (
          <div className="tab-content">
            <h2>🛒 Lista de Compras</h2>
            <div className="shopping-list">
              {shoppingList.map((item, index) => (
                <div key={index} className="shopping-item">
                  <input type="checkbox" id={`item-${index}`} />
                  <label htmlFor={`item-${index}`}>{item}</label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'meals':
        return (
          <div className="tab-content">
            <h2>📅 Planejamento Semanal</h2>
            <div className="meal-plan">
              {Object.entries(mealPlan).map(([dia, refeicoes]) => (
                <div key={dia} className="day-card">
                  <h3>{dia.charAt(0).toUpperCase() + dia.slice(1)}</h3>
                  <div className="meals">
                    <div className="meal">
                      <strong>☕ Café da manhã:</strong> {refeicoes.cafe}
                    </div>
                    <div className="meal">
                      <strong>🍽️ Almoço:</strong> {refeicoes.almoco}
                    </div>
                    <div className="meal">
                      <strong>🌙 Jantar:</strong> {refeicoes.jantar}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'budget':
        return (
          <div className="tab-content">
            <h2>💰 Orçamento Mensal</h2>
            <div className="budget-section">
              <div className="budget-input-group">
                <label htmlFor="budget">Renda disponível para o mercado (R$):</label>
                <input
                  type="number"
                  id="budget"
                  value={budget}
                  onChange={handleBudgetChange}
                  placeholder="Ex: 800"
                  min="0"
                  step="0.01"
                />
                <p className="budget-guidance">
                  Baseado na sua renda, montaremos um plano de compras eficiente!
                </p>
              </div>

              {budgetPlan && (
                <div className="budget-plan">
                  <div className="budget-summary">
                    <h3>📊 Resumo do Orçamento</h3>
                    <div className="summary-item">
                      <span>Total Mensal:</span>
                      <span className="value">R$ {budgetPlan.total.toFixed(2)}</span>
                    </div>
                    <div className="summary-item">
                      <span>Valor Semanal:</span>
                      <span className="value">R$ {budgetPlan.semanal.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="weekly-breakdown">
                    <h3>🗓️ Planejamento Semanal</h3>
                    <div className="weeks-grid">
                      {budgetPlan.semanas.map((semana) => (
                        <div key={semana.semana} className="week-card">
                          <h4>Semana {semana.semana}</h4>
                          <div className="week-budget">R$ {semana.valor.toFixed(2)}</div>
                          <div className="week-items">
                            {semana.itens.map((item, index) => (
                              <span key={index} className="item-tag">{item}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="tab-content">
            <h2>🏠 Dashboard</h2>
            <div className="dashboard-grid">
              <div className="dashboard-card">
                <h3>📝 Resumo da Semana</h3>
                <div className="summary-stats">
                  <div className="stat">
                    <span className="stat-number">{shoppingList.length}</span>
                    <span className="stat-label">Itens na lista</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">7</span>
                    <span className="stat-label">Dias planejados</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">21</span>
                    <span className="stat-label">Refeições programadas</span>
                  </div>
                </div>
              </div>

              <div className="dashboard-card">
                <h3>🔥 Sugestões Saudáveis</h3>
                <div className="suggestions-list">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="suggestion-item">
                      <span className="suggestion-icon">✨</span>
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>

              <div className="dashboard-card">
                <h3>📈 Integração com Agenda</h3>
                <div className="integration-notice">
                  <div className="notice-icon">⚠️</div>
                  <p>Integração com agenda em andamento...</p>
                  <div className="mock-suggestions">
                    <h4>Sugestões baseadas no TMB calculado:</h4>
                    <ul>
                      <li>Café da manhã: 400-500 calorias</li>
                      <li>Almoço: 600-700 calorias</li>
                      <li>Jantar: 500-600 calorias</li>
                      <li>Lanches: 200-300 calorias</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="planner">
        <div className="container">
          <div className="loading-state">
            <div className="spinner-large"></div>
            <p>Carregando seu planner...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="planner">
      <div className="container">
        <div className="planner-header">
          <h1>📋 Meu FeedPlanner</h1>
          <p>Organize suas refeições, compras e orçamento em um só lugar</p>
        </div>

        <div className="planner-tabs">
          <button 
            className={`tab-button ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            🏠 Dashboard
          </button>
          <button 
            className={`tab-button ${activeTab === 'shopping' ? 'active' : ''}`}
            onClick={() => setActiveTab('shopping')}
          >
            🛒 Lista de Compras
          </button>
          <button 
            className={`tab-button ${activeTab === 'meals' ? 'active' : ''}`}
            onClick={() => setActiveTab('meals')}
          >
            🍽️ Refeições
          </button>
          <button 
            className={`tab-button ${activeTab === 'budget' ? 'active' : ''}`}
            onClick={() => setActiveTab('budget')}
          >
            💰 Orçamento
          </button>
        </div>

        <div className="planner-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Planner;
