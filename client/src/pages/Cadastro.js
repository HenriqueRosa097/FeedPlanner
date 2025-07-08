import React, { useState, useEffect } from 'react';
import './Cadastro.css';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    peso: '',
    altura: '',
    sexo: ''
  });
  const [tmb, setTmb] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateTMB = () => {
    const { peso, altura, idade, sexo } = formData;
    
    if (peso && altura && idade && sexo) {
      let tmbValue;
      const pesoNum = parseFloat(peso);
      const alturaNum = parseFloat(altura);
      const idadeNum = parseInt(idade);
      
      if (sexo === 'homem') {
        tmbValue = 88.36 + (13.4 * pesoNum) + (4.8 * alturaNum) - (5.7 * idadeNum);
      } else {
        tmbValue = 447.6 + (9.2 * pesoNum) + (3.1 * alturaNum) - (4.3 * idadeNum);
      }
      
      setTmb(Math.round(tmbValue));
    } else {
      setTmb(null);
    }
  };

  useEffect(() => {
    calculateTMB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Dados de cadastro atualizados com sucesso.');
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div className="cadastro">
      <div className="container">
        <div className="cadastro-header">
          <h1>📊 Cadastro e Cálculo de TMB</h1>
          <p>Preencha seus dados para calcular sua Taxa Metabólica Basal</p>
        </div>

        <div className="cadastro-content">
          <div className="form-section">
            <form onSubmit={handleSubmit} className="cadastro-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nome">Nome Completo</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="idade">Idade (anos)</label>
                  <input
                    type="number"
                    id="idade"
                    name="idade"
                    value={formData.idade}
                    onChange={handleChange}
                    placeholder="Ex: 25"
                    min="10"
                    max="120"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="peso">Peso (kg)</label>
                  <input
                    type="number"
                    id="peso"
                    name="peso"
                    value={formData.peso}
                    onChange={handleChange}
                    placeholder="Ex: 70.5"
                    min="30"
                    max="300"
                    step="0.1"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="altura">Altura (cm)</label>
                  <input
                    type="number"
                    id="altura"
                    name="altura"
                    value={formData.altura}
                    onChange={handleChange}
                    placeholder="Ex: 175"
                    min="100"
                    max="250"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Sexo</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="sexo"
                      value="homem"
                      checked={formData.sexo === 'homem'}
                      onChange={handleChange}
                      required
                    />
                    <span className="radio-custom"></span>
                    Homem
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="sexo"
                      value="mulher"
                      checked={formData.sexo === 'mulher'}
                      onChange={handleChange}
                      required
                    />
                    <span className="radio-custom"></span>
                    Mulher
                  </label>
                </div>
              </div>

              {message && (
                <div className="success-message">
                  ✅ {message}
                </div>
              )}

              <button type="submit" className="save-btn">
                💾 Salvar Dados
              </button>
            </form>
          </div>

          <div className="tmb-section">
            <div className="tmb-card">
              <h2>🔥 Taxa Metabólica Basal (TMB)</h2>
              {tmb ? (
                <div className="tmb-result">
                  <div className="tmb-value">{tmb}</div>
                  <div className="tmb-unit">calorias/dia</div>
                  <p className="tmb-description">
                    Sua Taxa Metabólica Basal estimada é: <strong>{tmb} calorias/dia</strong>
                  </p>
                  <div className="tmb-info">
                    <small>
                      A TMB representa o número mínimo de calorias que seu corpo 
                      precisa para manter as funções vitais em repouso.
                    </small>
                  </div>
                </div>
              ) : (
                <div className="tmb-placeholder">
                  <div className="placeholder-icon">📊</div>
                  <p>Preencha todos os campos para calcular sua TMB automaticamente</p>
                </div>
              )}
            </div>

            <div className="formula-card">
              <h3>📚 Fórmula Harris-Benedict</h3>
              <div className="formula-content">
                <div className="formula-item">
                  <strong>Homens:</strong>
                  <code>TMB = 88.36 + (13.4 × peso) + (4.8 × altura) - (5.7 × idade)</code>
                </div>
                <div className="formula-item">
                  <strong>Mulheres:</strong>
                  <code>TMB = 447.6 + (9.2 × peso) + (3.1 × altura) - (4.3 × idade)</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="disclaimer-section">
          <div className="disclaimer-box">
            <h3>⚠️ Importante</h3>
            <p>
              Os cálculos apresentados são estimativas baseadas na fórmula Harris-Benedict. 
              Para uma avaliação mais precisa, consulte um profissional de nutrição.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
