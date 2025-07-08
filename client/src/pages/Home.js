import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Bem-vindo ao FeedPlanner</h1>
          <p className="hero-description">
            Organize sua alimentação, planeje suas compras e cuide da sua saúde de forma inteligente.
          </p>
          <div className="hero-buttons">
            <Link to="/cadastro" className="btn btn-primary">
              Começar Agora
            </Link>
            <Link to="/sobre" className="btn btn-secondary">
              Saiba Mais
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="food-emoji">🥗</div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2>Funcionalidades</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Planejamento de Refeições</h3>
              <p>Organize suas refeições semanais com sugestões personalizadas</p>
              <Link to="/planner" className="feature-link">Ver Planner →</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🧮</div>
              <h3>Cálculo de TMB</h3>
              <p>Calcule sua Taxa Metabólica Basal e receba orientações personalizadas</p>
              <Link to="/cadastro" className="feature-link">Calcular →</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Orçamento Inteligente</h3>
              <p>Planeje suas compras de acordo com seu orçamento mensal</p>
              <Link to="/planner" className="feature-link">Organizar →</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👩‍⚕️</div>
              <h3>Nutricionistas</h3>
              <p>Agende consultas com profissionais especializados</p>
              <Link to="/nutricionistas" className="feature-link">Agendar →</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Pronto para transformar sua alimentação?</h2>
          <p>Comece agora mesmo e descubra como o planejamento pode melhorar sua qualidade de vida.</p>
          <Link to="/login" className="btn btn-primary">
            Fazer Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
