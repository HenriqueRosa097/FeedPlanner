module.exports = (req, res) => {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Responder a preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.json({
    message: 'Lista de planos alimentares',
    data: [
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
    ],
    total: 3,
    timestamp: new Date().toISOString()
  });
};
