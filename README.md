# FeedPlanner

FeedPlanner é uma solução prática para otimizar o planejamento alimentar e financeiro. Combina tecnologia, saúde e organização para reduzir o desperdício, incentivar hábitos saudáveis e otimizar o tempo.

## 🚀 Funcionalidades

- **Cálculo de IMC**: Calcule seu Índice de Massa Corporal em tempo real
- **Lista de Compras Inteligente**: Planejamento automático de compras
- **Planejamento de Refeições**: Cardápio semanal organizado
- **Controle de Orçamento**: Gerencie seu orçamento mensal para alimentação
- **Conexão com Nutricionistas**: Encontre e agende consultas com profissionais
- **Sugestões Saudáveis**: Dicas de alimentos nutritivos

## 🛠️ Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3 (com variáveis CSS e design responsivo)
- JavaScript (ES6+)

### Backend
- Node.js
- Serverless Functions (Vercel)

### Deploy
- Vercel (Frontend + Backend)

## 📁 Estrutura do Projeto

```
FeedPlanner/
├── public/                 # Frontend
│   ├── css/               # Estilos CSS
│   ├── js/                # JavaScript
│   ├── img/               # Imagens
│   ├── index.html         # Página de login
│   ├── sobre.html         # Página sobre
│   ├── cadastro.html      # Cadastro e cálculo IMC
│   ├── nutricionistas.html # Lista de nutricionistas
│   └── meu-planner.html   # Dashboard principal
├── api/                   # Backend (Serverless Functions)
│   ├── login.js          # Autenticação
│   ├── nutricionistas.js # Lista de profissionais
│   └── planner/          # APIs do planejador
│       ├── meals.js      # Refeições
│       └── shopping-list.js # Lista de compras
├── package.json
├── vercel.json
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 14+
- Conta no Vercel (para deploy)

### Desenvolvimento Local

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Execute em modo desenvolvimento:
```bash
npm run dev
```

4. Abra http://localhost:3000

### Deploy na Vercel

1. Instale a CLI do Vercel:
```bash
npm install -g vercel
```

2. Faça o deploy:
```bash
vercel
```

## 🔐 Credenciais de Teste

Para testar o sistema, use:
- **Email**: teste@exemplo.com
- **Senha**: 123456

## 📋 Páginas e Funcionalidades

### 🏠 Login (index.html)
- Formulário de autenticação
- Credenciais mockadas para demonstração
- Redirecionamento automático após login

### ℹ️ Sobre (sobre.html)
- Descrição do projeto
- Lista de funcionalidades
- Informações técnicas

### 📊 Cadastro e IMC (cadastro.html)
- Formulário de dados pessoais
- Cálculo de IMC em tempo real
- Classificação automática do resultado

### 👩‍⚕️ Nutricionistas (nutricionistas.html)
- Lista de profissionais disponíveis
- Sistema de agendamento simulado
- Informações de especialidades e horários

### 📱 Meu Planner (meu-planner.html)
- Dashboard principal do usuário
- Lista de compras automatizada
- Planejamento de refeições semanais
- Controle de orçamento mensal
- Sugestões de alimentos saudáveis

## 🎨 Design

O projeto utiliza um design clean e responsivo com:
- Paleta de cores verde (saúde) e azul (tecnologia)
- Typography legível e acessível
- Layout responsivo para mobile e desktop
- Componentes reutilizáveis

## 🔗 APIs Disponíveis

### POST /api/login
Autenticação de usuários

### GET /api/nutricionistas
Lista de nutricionistas disponíveis

### GET /api/planner/shopping-list
Lista de compras recomendada

### GET /api/planner/meals
Planejamento de refeições semanais

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🎯 Objetivos do Projeto

Este é um **MVP educacional** que demonstra:
- Desenvolvimento frontend com HTML, CSS e JavaScript puro
- Backend com Serverless Functions
- Integração frontend-backend via APIs REST
- Deploy em plataforma cloud (Vercel)
- Design responsivo e acessível

## 📝 Licença

Este projeto é para fins educacionais e de demonstração.

## 👥 Contribuição

Este é um projeto educacional. Contribuições são bem-vindas para fins de aprendizado.

---

**FeedPlanner** - Transformando o planejamento alimentar através da tecnologia! 🥗💚
