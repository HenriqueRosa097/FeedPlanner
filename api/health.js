module.exports = (req, res) => {
  res.json({ 
    status: 'OK',
    message: 'API Health Check',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production'
  });
};
