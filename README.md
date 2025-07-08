# 🍽️ FeedPlanner

Sistema de Planejamento de Alimentação desenvolvido com React, otimizado para deploy no Vercel.

## � Demo

Acesse o app em produção: [Seu link do Vercel aqui]

## �📋 Funcionalidades

- ✅ Interface moderna e responsiva
- ✅ Listagem de planos alimentares
- ✅ Design clean e intuitivo
- ✅ Deploy automático no Vercel
- ✅ Totalmente otimizado para produção

## �️ Tecnologias

- **React** 18.2.0
- **CSS3** com design moderno
- **Vercel** para deploy

## 📦 Estrutura do Projeto

```
FeedPlanner/
├── client/                 # Aplicação React
│   ├── src/
│   │   ├── App.js         # Componente principal
│   │   ├── App.css        # Estilos
│   │   └── index.js       # Ponto de entrada
│   ├── public/
│   └── package.json
├── server/                 # Servidor Express (desenvolvimento local)
├── vercel.json            # Configuração do Vercel
└── package.json           # Scripts principais
```

## 🔧 Executar Localmente

```bash
# Clone o repositório
git clone [seu-repo]

# Instale as dependências
cd FeedPlanner/client
npm install

# Execute o projeto
npm start
```

## 🚀 Deploy no Vercel

### Automático
1. Conecte seu repositório ao Vercel
2. O deploy será automático a cada push

### Manual
```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 🎯 Configuração no Vercel

Se precisar configurar manualmente:

- **Build Command**: `cd client && npm run build`
- **Output Directory**: `client/build`
- **Install Command**: `cd client && npm install`

## 📱 Funcionalidades Implementadas

- [x] Interface de usuário moderna
- [x] Listagem de planos alimentares
- [x] Design responsivo
- [x] Otimização para produção
- [x] Deploy automático

## 🔄 Próximos Passos

- [ ] Adicionar mais planos
- [ ] Sistema de filtros
- [ ] Modo escuro
- [ ] PWA (Progressive Web App)
- [ ] Integração com API externa

## 📞 Suporte

Este projeto está configurado para funcionar perfeitamente no Vercel. Se você encontrar algum problema:

1. Verifique se todas as dependências estão instaladas
2. Confirme que o build local funciona (`npm run build`)
3. Verifique os logs de deployment no Vercel

---

**Desenvolvido com ❤️ - Otimizado para Vercel**eedPlanner

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
