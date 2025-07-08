const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas básicas
app.get('/', (req, res) => {
  res.json({ 
    message: 'FeedPlanner API está funcionando!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    message: 'API Health Check',
    timestamp: new Date().toISOString()
  });
});

// Rota de exemplo para planos alimentares
app.get('/api/feed-plans', (req, res) => {
  res.json({
    message: 'Lista de planos alimentares',
    data: [
      { id: 1, name: 'Plano Semanal', description: 'Plano alimentar para 7 dias' },
      { id: 2, name: 'Plano Mensal', description: 'Plano alimentar para 30 dias' }
    ]
  });
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Algo deu errado!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Erro interno do servidor'
  });
});

// Middleware para rotas não encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    message: `A rota ${req.originalUrl} não existe`
  });
});

// Para desenvolvimento local
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`🌐 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  });
}

// Para o Vercel (serverless)
module.exports = app;
