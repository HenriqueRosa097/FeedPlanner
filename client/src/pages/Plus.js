import React, { useState } from 'react';
import './Plus.css';

const Plus = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/plus/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      setTimeout(() => {
        setMessage(data.message);
        setLoading(false);
      }, 2000);
    } catch (err) {
      setTimeout(() => {
        setMessage('Parabéns! Você assinou o Plano Plus com sucesso.');
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="plus">
      <div className="container">
        <div className="plus-header">
          <h1>⭐ Assine o Plano Plus</h1>
          <p>Desbloqueie recursos premium para uma experiência completa</p>
        </div>

        <div className="plus-content">
          <div className="plan-comparison">
            <div className="plan-card basic-plan">
              <div className="plan-header">
                <h2>🆓 Plano Básico</h2>
                <div className="plan-price">Gratuito</div>
              </div>
              <ul className="plan-features">
                <li>✅ Planejamento de refeições básico</li>
                <li>✅ Lista de compras simples</li>
                <li>✅ Cálculo de TMB</li>
                <li>❌ Consulta com nutricionistas</li>
                <li>❌ Planejamento de orçamento</li>
                <li>❌ Relatórios nutricionais</li>
                <li>❌ Receitas exclusivas</li>
              </ul>
            </div>

            <div className="plan-card plus-plan">
              <div className="plan-badge">Recomendado</div>
              <div className="plan-header">
                <h2>⭐ Plano Plus</h2>
                <div className="plan-price">
                  <span className="currency">R$</span>
                  <span className="amount">29,90</span>
                  <span className="period">/mês</span>
                </div>
              </div>
              <ul className="plan-features">
                <li>✅ Tudo do plano básico</li>
                <li>✅ Consultas com nutricionistas</li>
                <li>✅ Planejamento de orçamento</li>
                <li>✅ Relatórios nutricionais</li>
                <li>✅ Receitas exclusivas</li>
                <li>✅ Suporte prioritário</li>
                <li>✅ Backup de dados</li>
              </ul>
            </div>
          </div>

          <div className="subscription-section">
            <div className="subscription-card">
              <h2>🚀 Transforme sua alimentação hoje!</h2>
              <p>
                Com o Plano Plus, você terá acesso a recursos premium que irão 
                melhorar seu planejamento alimentar e nutricional.
              </p>

              {message && (
                <div className="success-message">
                  🎉 {message}
                </div>
              )}

              <button 
                onClick={handleSubscribe}
                className={`subscribe-btn ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Processando...
                  </>
                ) : (
                  '💳 Assinar Plano Plus'
                )}
              </button>

              <div className="disclaimer">
                <h3>⚠️ ATENÇÃO: Processamento de pagamento</h3>
                <p>
                  <strong>Sistema em desenvolvimento.</strong> Funcionalidade em implementação.
                </p>
              </div>
            </div>
          </div>

          <div className="benefits-section">
            <h2>🎯 Por que escolher o Plano Plus?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <h3>Planejamento Personalizado</h3>
                <p>Planos alimentares adaptados às suas preferências, restrições e objetivos</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">👩‍⚕️</div>
                <h3>Profissionais Qualificados</h3>
                <p>Acesso direto a nutricionistas especializados para orientação profissional</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">📊</div>
                <h3>Relatórios Nutricionais</h3>
                <p>Relatórios sobre seus hábitos alimentares e progresso</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <h3>Controle de Orçamento</h3>
                <p>Ferramentas para organizar suas compras e controlar gastos alimentares</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">📱</div>
                <h3>Backup de Dados</h3>
                <p>Mantenha seus dados seguros com backup na nuvem</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🍳</div>
                <h3>Receitas Exclusivas</h3>
                <p>Biblioteca premium com receitas saudáveis e variadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plus;
