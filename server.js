const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3001;

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml'
};

// Mock data para as APIs
const mockData = {
    login: { success: true, user: { email: 'teste@exemplo.com', name: 'Usuário Teste' } },
    nutricionistas: [
        {
            id: 1,
            nome: 'Dra. Ana Silva',
            especialidade: 'Nutrição Clínica',
            horario: 'Segunda a Sexta: 08h-17h',
            crn: 'CRN-3 12345',
            experiencia: '10 anos de experiência',
            descricao: 'Especialista em nutrição clínica e emagrecimento saudável',
            horariosDisponiveis: [
                "21/07 08:00",
                "21/07 09:00", 
                "22/07 10:00",
                "22/07 11:00",
                "23/07 14:00",
                "23/07 15:00",
                "24/07 16:00",
                "24/07 17:00"
            ]
        },
        {
            id: 2,
            nome: 'Dr. Carlos Santos',
            especialidade: 'Nutrição Esportiva',
            horario: 'Segunda a Sábado: 07h-19h',
            crn: 'CRN-3 23456',
            experiencia: '8 anos de experiência',
            descricao: 'Focado em nutrição para atletas e praticantes de atividade física',
            horariosDisponiveis: [
                "21/07 07:00",
                "21/07 08:00",
                "22/07 09:00",
                "22/07 10:00",
                "25/07 15:00",
                "25/07 16:00",
                "26/07 17:00",
                "26/07 18:00",
                "26/07 19:00"
            ]
        },
        {
            id: 3,
            nome: 'Dra. Fernanda Costa',
            especialidade: 'Nutrição Comportamental',
            horario: 'Terça a Sábado: 10h-18h',
            crn: 'CRN-3 45678',
            experiencia: '6 anos de experiência',
            descricao: 'Especialista em mudança de comportamentos alimentares e relação com a comida',
            horariosDisponiveis: [
                "22/07 10:00",
                "22/07 11:00",
                "23/07 12:00",
                "23/07 14:00",
                "24/07 15:00",
                "24/07 16:00",
                "25/07 17:00",
                "25/07 18:00"
            ]
        },
        {
            id: 4,
            nome: 'Dr. Roberto Almeida',
            especialidade: 'Nutrição Geriátrica',
            horario: 'Segunda a Sexta: 08h-15h',
            crn: 'CRN-3 56789',
            experiencia: '15 anos de experiência',
            descricao: 'Focado em alimentação para a terceira idade',
            horariosDisponiveis: [
                "21/07 08:00",
                "21/07 09:00",
                "22/07 10:00",
                "22/07 11:00",
                "23/07 13:00",
                "24/07 14:00",
                "24/07 15:00"
            ]
        },
        {
            id: 5,
            nome: 'Dra. Juliana Ribeiro',
            especialidade: 'Nutrição Funcional',
            horario: 'Segunda a Sexta: 13h-20h',
            crn: 'CRN-3 67890',
            experiencia: '9 anos de experiência',
            descricao: 'Abordagem funcional e integrativa da nutrição',
            horariosDisponiveis: [
                "21/07 13:00",
                "21/07 14:00",
                "22/07 15:00",
                "22/07 16:00",
                "23/07 17:00",
                "23/07 18:00",
                "24/07 19:00",
                "24/07 20:00"
            ]
        }
    ],
    shoppingList: [
        'Arroz integral (1kg)', 'Feijão preto (500g)', 'Frango (1kg)', 'Peixe (500g)',
        'Ovos (1 dúzia)', 'Leite (1L)', 'Iogurte natural', 'Banana (1kg)', 'Maçã (1kg)',
        'Tomate (500g)', 'Alface (1 pé)', 'Cenoura (500g)', 'Azeite extra virgem'
    ],
    meals: {
        segunda: ['Café: Pão integral e café', 'Almoço: Arroz, feijão, frango e salada', 'Jantar: Peixe com batata doce'],
        terca: ['Café: Aveia com frutas', 'Almoço: Quinoa, lentilha e legumes', 'Jantar: Omelete com salada'],
        quarta: ['Café: Smoothie verde', 'Almoço: Macarrão integral com frango', 'Jantar: Sopa de legumes'],
        quinta: ['Café: Iogurte com granola', 'Almoço: Arroz, feijão e peixe', 'Jantar: Salada de frango'],
        sexta: ['Café: Pão com abacate', 'Almoço: Risotto de quinoa', 'Jantar: Peixe grelhado'],
        sabado: ['Café: Panqueca de aveia', 'Almoço: Feijoada light', 'Jantar: Pizza integral'],
        domingo: ['Café: Café reforçado', 'Almoço: Churrasco magro', 'Jantar: Sopa nutritiva']
    }
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // API Routes
    if (pathname.startsWith('/api/')) {
        res.setHeader('Content-Type', 'application/json');
        
        if (pathname === '/api/login' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', () => {
                const data = JSON.parse(body);
                if (data.email === 'teste@exemplo.com' && data.password === '123456') {
                    res.writeHead(200);
                    res.end(JSON.stringify(mockData.login));
                } else {
                    res.writeHead(401);
                    res.end(JSON.stringify({ success: false }));
                }
            });
            return;
        }
        
        if (pathname === '/api/nutricionistas') {
            res.writeHead(200);
            res.end(JSON.stringify(mockData.nutricionistas));
            return;
        }
        
        if (pathname === '/api/planner/shopping-list') {
            res.writeHead(200);
            res.end(JSON.stringify(mockData.shoppingList));
            return;
        }
        
        if (pathname === '/api/planner/meals') {
            res.writeHead(200);
            res.end(JSON.stringify(mockData.meals));
            return;
        }
        
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not found' }));
        return;
    }

    // Redirect root to index.html
    if (pathname === '/') {
        pathname = '/index.html';
    }

    // Serve static files from public directory
    const filePath = path.join(__dirname, 'public', pathname);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'text/plain';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('Página não encontrada');
            } else {
                res.writeHead(500);
                res.end('Erro interno do servidor');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`🚀 FeedPlanner rodando em http://localhost:${PORT}`);
    console.log(`📱 Acesse o projeto no seu navegador!`);
    console.log(`🔐 Para testar: email 'teste@exemplo.com' e senha '123456'`);
    console.log(`👩‍⚕️ Interface de nutricionistas atualizada - Nutrição Infantil removida!`);
});
