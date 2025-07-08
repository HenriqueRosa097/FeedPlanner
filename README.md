# 🍽️ FeedPlanner

Sistema de Planejamento de Alimentação desenvolvido com React e Node.js, otimizado para deploy no Vercel.

## 📋 Funcionalidades

- ✅ Interface moderna e responsiva
- ✅ API RESTful com endpoints serverless
- ✅ Gerenciamento de planos alimentares
- ✅ Deploy automático no Vercel
- ✅ Configuração otimizada para produção

## 🚀 Tecnologias

### Frontend
- React 18.2.0
- React Router DOM 6.8.1
- CSS3 com design moderno

### Backend
- Node.js com Express
- Serverless Functions (Vercel)
- API RESTful

## 📦 Estrutura do Projeto

```
FeedPlanner/
├── client/                 # Aplicação React
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── server/                 # Servidor Express (desenvolvimento)
│   ├── index.js
│   └── package.json
├── api/                    # Funções serverless para produção
│   ├── index.js
│   ├── health.js
│   ├── feed-plans.js
│   └── package.json
├── vercel.json            # Configuração do Vercel
├── package.json           # Configuração principal
└── README.md
```

## 🔧 Configuração e Execução

### Desenvolvimento Local

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
cd client && npm install
cd ../server && npm install
```

3. Execute o projeto:
```bash
npm run dev
```

### Deploy no Vercel

1. **Conecte seu repositório ao Vercel**
2. **Configure as variáveis de ambiente (se necessário)**
3. **O deploy será automático**

#### Configuração manual no Vercel:

- **Build Command**: `npm run build`
- **Output Directory**: `client/build`
- **Install Command**: `npm install`

## 🌐 Endpoints da API

### Produção (Vercel)
- `GET /api/health` - Health check da API
- `GET /api/feed-plans` - Lista de planos alimentares

### Desenvolvimento Local
- `GET http://localhost:3001/api/health` - Health check
- `GET http://localhost:3001/api/feed-plans` - Lista de planos

## 📱 Funcionalidades Implementadas

- [x] Interface de usuário moderna
- [x] Listagem de planos alimentares
- [x] API RESTful funcionando
- [x] Deploy otimizado para Vercel
- [x] Tratamento de erros
- [x] Loading states
- [x] Design responsivo

## 🔄 Próximos Passos

- [ ] Autenticação de usuários
- [ ] CRUD completo de planos
- [ ] Banco de dados
- [ ] Notificações
- [ ] PWA (Progressive Web App)

## 🐛 Solução de Problemas

### Deploy no Vercel não funciona?

1. Verifique se o `vercel.json` está correto
2. Certifique-se de que as dependências estão instaladas
3. Verifique os logs de build no painel do Vercel
4. Confirme que a estrutura de pastas está correta

### API não responde?

1. Verifique se os endpoints estão em `/api/`
2. Confirme que as funções serverless estão funcionando
3. Teste os endpoints individualmente

## 📞 Suporte

Para problemas ou dúvidas, verifique:
- [Documentação do Vercel](https://vercel.com/docs)
- [Documentação do React](https://react.dev)
- [Documentação do Express](https://expressjs.com)

---

**Desenvolvido com ❤️ para facilitar o planejamento alimentar**eedPlanner

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
