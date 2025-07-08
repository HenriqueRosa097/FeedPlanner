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

  // Rota principal da API
  res.json({ 
    message: 'FeedPlanner API está funcionando!',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: [
      'GET /api/health - Health check',
      'GET /api/feed-plans - Lista de planos alimentares'
    ]
  });
};
