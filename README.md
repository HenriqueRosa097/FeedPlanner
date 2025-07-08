# 🍽️ FeedPlanner

Um aplicativo web completo para planejamento alimentar e financeiro, desenvolvido com React.js e Node.js.

## 📋 Sobre o Projeto

O FeedPlanner é uma aplicação web que ajuda usuários a planejar suas refeições, gerenciar orçamentos alimentares e conectar-se com nutricionistas. O projeto demonstra conceitos fundamentais de desenvolvimento full-stack moderno.

### ✨ Funcionalidades Principais

- **🔐 Sistema de Login** - Autenticação simulada para demonstração
- **📊 Calculadora TMB** - Cálculo da Taxa Metabólica Basal usando fórmula Harris-Benedict
- **📅 Planejamento de Refeições** - Dashboard completo para organizar refeições semanais
- **💰 Controle de Orçamento** - Planejamento financeiro para compras alimentares
- **👩‍⚕️ Rede de Nutricionistas** - Conexão com profissionais qualificados
- **⭐ Planos Premium** - Sistema de assinatura com benefícios exclusivos

### 🛠️ Tecnologias Utilizadas

**Frontend:**
- React.js 18
- React Router DOM
- CSS3 Responsivo
- Hooks e Context API

**Backend:**
- Node.js
- Express.js
- CORS
- API RESTful

**Desenvolvimento:**
- Concurrently (desenvolvimento simultâneo)
- Mock data para demonstração
- Responsive design mobile-first

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/FeedPlanner.git
cd FeedPlanner
```

2. **Instale as dependências do projeto:**
```bash
npm install
```

3. **Instale as dependências do cliente:**
```bash
cd client
npm install
cd ..
```

4. **Instale as dependências do servidor:**
```bash
cd server
npm install
cd ..
```

### Executando o Projeto

**Opção 1: Executar tudo simultaneamente (recomendado)**
```bash
npm run dev
```

**Opção 2: Executar separadamente**
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend  
npm run client
```

### Acessando a Aplicação

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

### Credenciais de Teste

- **Email**: teste@exemplo.com
- **Senha**: 123456

## 📁 Estrutura do Projeto

```
FeedPlanner/
├── client/                 # Frontend React
│   ├── public/
│   │   └── images/        # Imagens e assets
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── images/        # Imagens importadas
│   │   ├── App.js         # Componente principal
│   │   └── index.js       # Ponto de entrada
│   └── package.json
├── server/                 # Backend Node.js
│   ├── server.js          # Servidor Express
│   └── package.json
├── package.json           # Scripts de desenvolvimento
└── README.md
```

## 🎯 Páginas Implementadas

- **🏠 Home** (`/`) - Página inicial com apresentação
- **ℹ️ Sobre** (`/sobre`) - Informações sobre o projeto e desenvolvedor
- **🔐 Login** (`/login`) - Sistema de autenticação
- **📊 Cadastro** (`/cadastro`) - Registro e cálculo TMB
- **📋 Planner** (`/planner`) - Dashboard principal de planejamento
- **👩‍⚕️ Nutricionistas** (`/nutricionistas`) - Rede de profissionais
- **⭐ Plus** (`/plus`) - Planos de assinatura

## 🔧 API Endpoints

- `POST /api/login` - Autenticação de usuário
- `GET /api/nutricionistas` - Lista de nutricionistas
- `GET /api/planner/meals` - Planos de refeições
- `GET /api/planner/shopping-list` - Lista de compras
- `POST /api/planner/budget` - Planejamento de orçamento
- `POST /api/user/tmb` - Cálculo TMB

## 👨‍💻 Sobre o Desenvolvedor

**Henrique Silva da Rosa**
- Formado pela Uniritter
- Cursando Pós-Graduação em Desenvolvimento Full Stack na PUCRS
- Criador do FeedPlanner

## 📝 Licença

Este projeto é um MVP educacional desenvolvido para demonstrar conceitos de desenvolvimento full-stack.

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📧 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através do GitHub.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!

- ✅ Planejamento de refeições semanais
- ✅ Organização de listas de compras
- ✅ Cálculo de Taxa Metabólica Basal (TMB)
- ✅ Gerenciamento de orçamento alimentar
- ✅ Agendamento com nutricionistas (simulado)
- ✅ Sugestões personalizadas de alimentação

**⚠️ IMPORTANTE: Este é um projeto educacional com funcionalidades simuladas. Nenhum dado real é processado, armazenado ou cobrado.**

## 🚀 Tecnologias Utilizadas

### Frontend
- **React.js** - Biblioteca para interfaces de usuário
- **React Router DOM** - Roteamento client-side
- **CSS3** - Estilização responsiva e moderna

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web para APIs
- **CORS** - Middleware para requisições cross-origin

### Ferramentas de Desenvolvimento
- **Concurrently** - Execução simultânea de servidores
- **Nodemon** - Auto-reload do servidor (desenvolvimento)

## 📁 Estrutura do Projeto

```
planner-alimentar/
├── client/                 # Aplicação React (Frontend)
│   ├── public/            # Arquivos públicos
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── App.js         # Componente principal
│   │   └── index.js       # Entry point
│   └── package.json
├── server/                # API Node.js (Backend)
│   ├── index.js          # Servidor Express
│   └── package.json
├── package.json          # Scripts principais
└── README.md
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone [url-do-repositorio]
   cd planner-alimentar
   ```

2. **Instale as dependências**
   ```bash
   npm run install-all
   ```
   Ou instale separadamente:
   ```bash
   # Root
   npm install
   
   # Frontend
   cd client && npm install
   
   # Backend
   cd ../server && npm install
   ```

3. **Execute a aplicação**
   ```bash
   npm run dev
   ```

## 📚 Scripts Disponíveis

- `npm run dev` - Inicia frontend e backend simultaneamente
- `npm run client` - Inicia apenas o servidor React (porta 3000)
- `npm run server` - Inicia apenas o servidor Node.js (porta 5000)
- `npm run build` - Gera build de produção do frontend
- `npm run install-all` - Instala dependências de todos os projetos

## 🌐 Páginas e Funcionalidades

### 🏠 Página Inicial (`/`)
- Apresentação do projeto e suas funcionalidades
- Links para navegação rápida
- Design responsivo e atrativo

### ℹ️ Sobre (`/sobre`)
- Descrição detalhada dos objetivos do projeto
- Tecnologias utilizadas
- Disclaimer sobre a natureza educacional

### 🔐 Login (`/login`)
- **Credenciais de teste:** 
  - Email: `teste@exemplo.com`
  - Senha: `123456`
- Validação com feedback visual
- Redirecionamento para o planner após login

### 📊 Cadastro e TMB (`/cadastro`)
- Formulário com dados pessoais
- Cálculo automático da TMB usando fórmula Harris-Benedict
- Validação em tempo real dos campos

### 📋 Meu Planner (`/planner`)
- **Dashboard** com resumo semanal
- **Lista de Compras** interativa
- **Planejamento de Refeições** por dia da semana
- **Orçamento Mensal** com divisão semanal automática

### 👩‍⚕️ Nutricionistas (`/nutricionistas`)
- Grid de profissionais fictícios
- Informações detalhadas (horários, especialidades)
- Sistema de agendamento simulado

### ⭐ Plano Plus (`/plus`)
- Comparação entre planos básico e premium
- Funcionalidades exclusivas do plano pago
- Simulação de processo de assinatura

## 🎯 API Endpoints (Backend)

### Autenticação
- `POST /api/login` - Login com credenciais mockadas

### Planner
- `GET /api/planner/shopping-list` - Lista de compras
- `GET /api/planner/meals` - Planejamento de refeições
- `GET /api/planner/suggestions` - Sugestões saudáveis
- `POST /api/planner/budget` - Cálculo de orçamento

### Nutricionistas
- `GET /api/nutricionistas` - Lista de profissionais
- `POST /api/nutricionistas/agendar` - Agendamento de consulta

### Usuário
- `POST /api/user/tmb` - Cálculo de TMB
- `POST /api/user/save` - Salvamento de dados (mock)

### Assinatura
- `POST /api/plus/subscribe` - Assinatura do plano Plus (mock)

## 🎨 Design e UX

### Paleta de Cores
- **Primária:** #5cb85c (Verde principal)
- **Secundária:** #2c5530 (Verde escuro)
- **Accent:** #a8d5ba (Verde claro)
- **Background:** #f8f9fa (Cinza claro)

### Características do Design
- Interface limpa e moderna
- Navegação intuitiva
- Feedback visual em todas as interações
- Design responsivo (mobile-first)
- Animações suaves e transições
- Iconografia consistente com emojis

## 🔒 Aspectos de Segurança (Simulados)

- Validação de formulários no frontend
- Tratamento de erros com fallbacks
- Headers CORS configurados
- Sanitização de inputs (simulada)

**Nota:** Como se trata de um MVP educacional, as práticas de segurança são demonstrativas.

## 📱 Responsividade

A aplicação foi desenvolvida com abordagem mobile-first:
- Breakpoints para tablets (768px)
- Layout flexível com CSS Grid e Flexbox
- Navegação adaptativa
- Componentes redimensionáveis

## 🧪 Dados de Teste

### Login
- Email: `teste@exemplo.com`
- Senha: `123456`

### TMB (exemplo)
- Homem, 30 anos, 80kg, 180cm = ~1.896 cal/dia
- Mulher, 25 anos, 65kg, 165cm = ~1.447 cal/dia

### Orçamento
- Entrada: R$ 800/mês
- Resultado: R$ 200/semana com distribuição por categoria

## 🚀 Próximos Passos (Roadmap)

Para transformar este MVP em uma aplicação completa:

### Backend
- [ ] Implementar autenticação JWT real
- [ ] Integração com banco de dados (MongoDB/PostgreSQL)
- [ ] APIs de pagamento (Stripe/PagSeguro)
- [ ] Sistema de upload de imagens
- [ ] Integração com APIs de nutrição

### Frontend
- [ ] Progressive Web App (PWA)
- [ ] Notificações push
- [ ] Modo offline
- [ ] Tema escuro/claro
- [ ] Internacionalização (i18n)

### Funcionalidades
- [ ] Integração com calendário
- [ ] Relatórios em PDF
- [ ] Gráficos de progresso
- [ ] Chat com nutricionistas
- [ ] Receitas com instruções passo a passo

## 🤝 Contribuindo

Este é um projeto educacional, mas contribuições são bem-vindas:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Desenvolvido por:** TCC Henrique  
**Propósito:** Projeto educacional - MVP para demonstração de conceitos full-stack

---

**⚠️ Disclaimer:** Este é um projeto educacional com funcionalidades simuladas. Nenhum dado pessoal é coletado, armazenado ou processado. Todas as transações financeiras e agendamentos são fictícios.
