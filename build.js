const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Iniciando build do FeedPlanner...');

try {
  // Build do cliente
  console.log('📦 Fazendo build do cliente...');
  execSync('cd client && npm install && npm run build', { stdio: 'inherit' });
  
  // Instalar dependências do servidor
  console.log('📦 Instalando dependências do servidor...');
  execSync('cd server && npm install', { stdio: 'inherit' });
  
  console.log('✅ Build concluído com sucesso!');
} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  process.exit(1);
}
