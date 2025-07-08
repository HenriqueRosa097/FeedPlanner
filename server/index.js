const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
const mockNutricionistas = [
  {
    id: 1,
    nome: "Dra. Ana Silva",
    horario: "Segunda a Sexta: 09h - 17h",
    especialidade: "Nutrição Clínica"
  },
  {
    id: 2,
    nome: "Dr. João Pereira",
    horario: "Terças e Quintas: 10h - 18h",
    especialidade: "Nutrição Esportiva"
  },
  {
    id: 3,
    nome: "Dra. Maria Santos",
    horario: "Segunda, Quarta e Sexta: 08h - 16h",
    especialidade: "Nutrição Infantil"
  },
  {
    id: 4,
    nome: "Dr. Carlos Lima",
    horario: "Segunda a Quinta: 14h - 20h",
    especialidade: "Nutrição Funcional"
  }
];

const mockShoppingList = [
  "Arroz integral (1kg)",
  "Peito de frango (500g)",
  "Brócolis (1 unidade)",
  "Frutas variadas (1kg)",
  "Ovos (12 unidades)",
  "Salmão (300g)",
  "Legumes diversos (500g)",
  "Torradas integrais (1 pacote)",
  "Azeite de oliva (500ml)",
  "Iogurte natural (500ml)"
];

const mockMealPlan = {
  segunda: {
    cafe: "Ovos mexidos com torradas integrais",
    almoco: "Salmão grelhado com legumes",
    jantar: "Peito de frango com arroz integral"
  },
  terca: {
    cafe: "Iogurte natural com frutas",
    almoco: "Salada completa com proteína",
    jantar: "Peixe assado com brócolis"
  },
  quarta: {
    cafe: "Smoothie de frutas com aveia",
    almoco: "Frango grelhado com salada",
    jantar: "Omelete com legumes"
  },
  quinta: {
    cafe: "Torradas integrais com abacate",
    almoco: "Salmão com quinoa",
    jantar: "Peito de frango com purê de batata doce"
  },
  sexta: {
    cafe: "Iogurte com granola caseira",
    almoco: "Salada de atum com grãos",
    jantar: "Peixe grelhado com arroz integral"
  },
  sabado: {
    cafe: "Panqueca integral com frutas",
    almoco: "Frango refogado com legumes",
    jantar: "Sopa nutritiva com proteína"
  },
  domingo: {
    cafe: "Ovos beneditinos integrais",
    almoco: "Assado especial do domingo",
    jantar: "Refeição leve com saladas"
  }
};

const mockHealthySuggestions = [
  "Quinoa com legumes refogados",
  "Salada de grão-de-bico com vegetais",
  "Smoothie verde com espinafre e frutas",
  "Peito de peru com batata doce",
  "Sopa de lentilha com temperos naturais",
  "Wrap integral com frango e vegetais"
];

// API Routes

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, senha } = req.body;
  
  if (email === 'teste@exemplo.com' && senha === '123456') {
    res.json({ 
      success: true, 
      message: 'Login realizado com sucesso!',
      user: { email: email, nome: 'Usuário Teste' }
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Email ou senha incorretos.' 
    });
  }
});

// Nutricionistas endpoint
app.get('/api/nutricionistas', (req, res) => {
  res.json(mockNutricionistas);
});

// Meal plan endpoint
app.get('/api/planner/meals', (req, res) => {
  res.json(mockMealPlan);
});

// Shopping list endpoint
app.get('/api/planner/shopping-list', (req, res) => {
  res.json(mockShoppingList);
});

// Healthy suggestions endpoint
app.get('/api/planner/suggestions', (req, res) => {
  res.json(mockHealthySuggestions);
});

// TMB calculation endpoint
app.post('/api/user/tmb', (req, res) => {
  const { peso, altura, idade, sexo } = req.body;
  
  let tmb;
  if (sexo === 'homem') {
    tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
  } else {
    tmb = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
  }
  
  res.json({ 
    tmb: Math.round(tmb),
    message: 'TMB calculado com sucesso!'
  });
});

// Budget planning endpoint
app.post('/api/planner/budget', (req, res) => {
  const { renda } = req.body;
  const rendaNum = parseFloat(renda);
  
  if (isNaN(rendaNum) || rendaNum <= 0) {
    return res.status(400).json({ 
      success: false, 
      message: 'Valor de renda inválido' 
    });
  }
  
  const weeklyBudget = rendaNum / 4;
  const budget = {
    total: rendaNum,
    semanal: weeklyBudget,
    semanas: [
      { 
        semana: 1, 
        valor: weeklyBudget, 
        itens: ["Proteínas", "Carboidratos", "Vegetais"] 
      },
      { 
        semana: 2, 
        valor: weeklyBudget, 
        itens: ["Frutas", "Laticínios", "Grãos"] 
      },
      { 
        semana: 3, 
        valor: weeklyBudget, 
        itens: ["Peixes", "Verduras", "Temperos"] 
      },
      { 
        semana: 4, 
        valor: weeklyBudget, 
        itens: ["Diversos", "Snacks saudáveis", "Bebidas"] 
      }
    ]
  };
  
  res.json(budget);
});

// Schedule appointment endpoint
app.post('/api/nutricionistas/agendar', (req, res) => {
  const { nutricionistaId, data } = req.body;
  const nutricionista = mockNutricionistas.find(n => n.id === parseInt(nutricionistaId));
  
  if (nutricionista) {
    res.json({
      success: true,
      message: `Agendamento com ${nutricionista.nome} confirmado para ${data || '01/01/2026'}.`
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Nutricionista não encontrado.'
    });
  }
});

// Plus subscription endpoint
app.post('/api/plus/subscribe', (req, res) => {
  res.json({
    success: true,
    message: 'Parabéns! Você assinou o Plano Plus com sucesso.'
  });
});

// Save user data endpoint
app.post('/api/user/save', (req, res) => {
  res.json({
    success: true,
    message: 'Dados de cadastro atualizados com sucesso.'
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`API disponível em http://localhost:${PORT}/api`);
});
