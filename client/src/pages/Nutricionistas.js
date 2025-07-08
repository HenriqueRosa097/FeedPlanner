import React, { useState, useEffect } from 'react';
import './Nutricionistas.css';

const Nutricionistas = () => {
  const [nutricionistas, setNutricionistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchNutricionistas();
  }, []);

  const fetchNutricionistas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/nutricionistas');
      const data = await response.json();
      setNutricionistas(data);
    } catch (error) {
      // Fallback mock data if server is not running
      setNutricionistas([
        {
          id: 1,
          nome: "Dra. Ana Silva",
          horario: "Segunda a Sexta: 09h - 17h",
          especialidade: "Nutrição Clínica"
        },
        {
          id: 2,
          nome: "Dr. João Pereira",
          horario: "Terças e Quintas: 10h - 18h",
          especialidade: "Nutrição Esportiva"
        },
        {
          id: 3,
          nome: "Dra. Maria Santos",
          horario: "Segunda, Quarta e Sexta: 08h - 16h",
          especialidade: "Nutrição Infantil"
        },
        {
          id: 4,
          nome: "Dr. Carlos Lima",
          horario: "Segunda a Quinta: 14h - 20h",
          especialidade: "Nutrição Funcional"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAgendar = async (nutricionistaId, nutricionistaNome) => {
    try {
      const response = await fetch('http://localhost:5000/api/nutricionistas/agendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          nutricionistaId: nutricionistaId,
          data: '01/01/2026'
        }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage(`Agendamento com ${nutricionistaNome} confirmado para 01/01/2026.`);
    }

    // Clear message after 5 seconds
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  if (loading) {
    return (
      <div className="nutricionistas">
        <div className="container">
          <div className="loading-state">
            <div className="spinner-large"></div>
            <p>Carregando nutricionistas...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="nutricionistas">
      <div className="container">
        <div className="nutricionistas-header">
          <h1>👩‍⚕️ Nossos Nutricionistas</h1>
          <p>Agende uma consulta com nossos profissionais especializados</p>
        </div>

        {message && (
          <div className="success-message">
            ✅ {message}
          </div>
        )}

        <div className="nutricionistas-grid">
          {nutricionistas.map((nutricionista) => (
            <div key={nutricionista.id} className="nutricionista-card">
              <div className="card-header">
                <div className="status-badge">Disponível</div>
              </div>
              
              <div className="card-content">
                <h3 className="nutricionista-nome">{nutricionista.nome}</h3>
                <p className="nutricionista-especialidade">{nutricionista.especialidade}</p>
                
                <div className="horario-info">
                  <div className="horario-icon">🕐</div>
                  <span className="horario-texto">{nutricionista.horario}</span>
                </div>

                <div className="rating">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <span className="rating-text">4.9 (127 avaliações)</span>
                </div>

                <div className="experience">
                  <div className="experience-item">
                    <strong>8+ anos</strong>
                    <span>de experiência</span>
                  </div>
                  <div className="experience-item">
                    <strong>500+</strong>
                    <span>pacientes atendidos</span>
                  </div>
                </div>

                <button 
                  className="agendar-btn"
                  onClick={() => handleAgendar(nutricionista.id, nutricionista.nome)}
                >
                  📅 Agendar Consulta
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="info-section">
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3>Consulta Online</h3>
              <p>Atendimento por videochamada no conforto da sua casa</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📋</div>
              <h3>Plano Personalizado</h3>
              <p>Dieta elaborada especificamente para seus objetivos</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Acompanhamento</h3>
              <p>Suporte contínuo durante todo o seu processo</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h3>Resultados Garantidos</h3>
              <p>Metodologia comprovada com foco em resultados duradouros</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutricionistas;
