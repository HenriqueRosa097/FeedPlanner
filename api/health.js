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
    status: 'OK',
    message: 'API Health Check',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production'
  });
};
