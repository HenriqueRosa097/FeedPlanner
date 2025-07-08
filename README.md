# FeedPlanner

Sistema de planejamento de alimentação.

## Estrutura do Projeto

```
FeedPlanner/
├── client/          # Frontend da aplicação
├── server/          # Backend da aplicação
├── FeedPlanner/     # Aplicação principal
└── README.md        # Este arquivo
```

## Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm

### Instalação
```bash
# Instalar dependências de todos os projetos
npm run install:all

# Ou instalar manualmente
npm install
cd client && npm install
cd ../server && npm install
```

### Execução Local
```bash
# Executar em desenvolvimento (client + server)
npm run dev

# Executar apenas o frontend
npm run client:dev

# Executar apenas o backend
npm run server:dev
```

### Build para Produção
```bash
npm run build
```

## Deploy no Vercel

Este projeto está configurado para deploy automático no Vercel:

1. **Conecte seu repositório GitHub ao Vercel**
2. **Configure as variáveis de ambiente no Vercel** (se necessário)
3. **Deploy automático** - O Vercel detectará o `vercel.json` e fará o deploy

### Configurações do Vercel
- ✅ Configuração automática via `vercel.json`
- ✅ Build do frontend (React)
- ✅ API Routes para o backend (Express)
- ✅ Roteamento configurado

## Tecnologias Utilizadas

- **Frontend**: React 18, Create React App
- **Backend**: Node.js, Express
- **Deploy**: Vercel
- **Estilização**: CSS3 com gradientes e backdrop-filter

## Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Todos os direitos reservados - Henrique Rosa © 2025
