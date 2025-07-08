import React from 'react';
import './Sobre.css';
import henriquePhoto from '../images/henrique-rosa.jpg';

const Sobre = () => {
  return (
    <div className="sobre">
      <div className="container">
        <div className="sobre-header">
          <h1>Sobre o FeedPlanner</h1>
          <div className="header-icon">🌱</div>
        </div>
        
        <div className="sobre-content">
          <div className="content-box">
            <p className="main-description">
              O FeedPlanner é uma plataforma completa que revoluciona a forma como você 
              organiza sua alimentação e suas compras. Nossa aplicação oferece ferramentas 
              práticas para planejar refeições balanceadas, gerar listas de compras automáticas 
              e controlar seu orçamento alimentar de forma eficiente.
            </p>
            
            <p className="benefits-description">
              <strong>Vantagens para você:</strong> Economize tempo no planejamento das refeições, 
              reduza desperdícios de alimentos, mantenha uma alimentação mais equilibrada e 
              tenha controle total sobre seus gastos. Com nosso sistema de cálculo de TMB 
              (Taxa Metabólica Basal), você ainda recebe orientações personalizadas sobre 
              suas necessidades calóricas diárias.
            </p>
            
            <p className="premium-description">
              Para quem busca ainda mais recursos, o <strong>Plano Plus</strong> oferece acesso 
              a consultas com nutricionistas qualificados, relatórios nutricionais detalhados, 
              receitas exclusivas e ferramentas avançadas de controle orçamentário. Tudo isso 
              em uma interface intuitiva e acessível em qualquer dispositivo.
            </p>
          </div>

          <div className="features-showcase">
            <h2>Nossos Objetivos</h2>
            <div className="objectives-grid">
              <div className="objective-item">
                <div className="objective-icon">🎯</div>
                <h3>Otimização do Planejamento</h3>
                <p>Facilitar o planejamento alimentar e financeiro através de tecnologia intuitiva</p>
              </div>
              
              <div className="objective-item">
                <div className="objective-icon">♻️</div>
                <h3>Redução de Desperdício</h3>
                <p>Contribuir para a diminuição do desperdício de alimentos através de planejamento eficiente</p>
              </div>
              
              <div className="objective-item">
                <div className="objective-icon">💚</div>
                <h3>Hábitos Saudáveis</h3>
                <p>Incentivar a adoção de hábitos alimentares mais saudáveis e equilibrados</p>
              </div>
              
              <div className="objective-item">
                <div className="objective-icon">⏰</div>
                <h3>Otimização do Tempo</h3>
                <p>Promover o melhor aproveitamento do tempo através de organização eficiente</p>
              </div>
              
              <div className="objective-item">
                <div className="objective-icon">📱</div>
                <h3>Plataforma Acessível</h3>
                <p>Oferecer uma plataforma acessível e personalizável para todos os usuários</p>
              </div>
              
              <div className="objective-item">
                <div className="objective-icon">🔮</div>
                <h3>Expansão Futura</h3>
                <p>Potencial para expansão com serviços complementares e acompanhamento profissional</p>
              </div>
            </div>
          </div>

          <div className="developer-section">
            <h2>Sobre o Desenvolvedor</h2>
            <div className="developer-info">
              <div className="developer-photo">
                <img 
                  src={henriquePhoto} 
                  alt="Henrique Silva da Rosa" 
                  className="developer-image"
                />
              </div>
              
              <div className="developer-details">
                <h3>Henrique Silva da Rosa</h3>
                <p className="developer-title">Criador do FeedPlanner</p>
                
                <div className="developer-bio">
                  <p>
                    Henrique é Analista de Sistemas de Negócio no Sicredi, com sólida experiência em gestão de produtos, 
                    automação de processos e aplicação de inteligência artificial para ganhos de eficiência operacional. 
                    Com uma formação técnica robusta e vivência prática em desenvolvimento de software, 
                    ele atua na interface entre tecnologia e negócio, identificando oportunidades de melhoria e traduzindo 
                    necessidades em soluções ágeis e funcionais. É entusiasta de novas ferramentas, metodologias ágeis e 
                    integrações inteligentes — sempre com uma abordagem colaborativa e espírito explorador.
                  </p>
                </div>
                
                <div className="developer-education">
                  <h4>Formação Acadêmica</h4>
                  <div className="education-item">
                    <div className="education-icon">🎓</div>
                    <div className="education-info">
                      <strong>Graduação</strong>
                      <p>Formado pela Uniritter</p>
                    </div>
                  </div>
                  
                  <div className="education-item">
                    <div className="education-icon">📚</div>
                    <div className="education-info">
                      <strong>Pós-Graduação</strong>
                      <p>Desenvolvimento Full Stack - PUCRS</p>
                      <span className="education-status">Em andamento</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
