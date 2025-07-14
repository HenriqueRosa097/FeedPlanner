export default function handler(req, res) {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Tratar requisições OPTIONS (preflight)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Aceitar apenas GET
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        // Planejamento de refeições mockado
        const refeicoes = {
            segunda: [
                "Café da manhã: Pão integral com queijo branco e café",
                "Lanche da manhã: Banana com aveia",
                "Almoço: Arroz integral, feijão preto, frango grelhado e salada",
                "Lanche da tarde: Iogurte natural com frutas",
                "Jantar: Peixe assado com batata doce e brócolis"
            ],
            terca: [
                "Café da manhã: Aveia com frutas e leite",
                "Lanche da manhã: Maçã",
                "Almoço: Arroz, feijão, carne magra e legumes refogados",
                "Lanche da tarde: Vitamina de banana",
                "Jantar: Omelete com salada verde"
            ],
            quarta: [
                "Café da manhã: Pão integral com abacate",
                "Lanche da manhã: Laranja",
                "Almoço: Quinoa, feijão, frango e salada colorida",
                "Lanche da tarde: Castanhas",
                "Jantar: Sopa de legumes com torrada integral"
            ],
            quinta: [
                "Café da manhã: Iogurte com granola caseira",
                "Lanche da manhã: Mamão",
                "Almoço: Arroz integral, lentilha, peixe e vegetais",
                "Lanche da tarde: Chá verde com biscoito integral",
                "Jantar: Salada de frango com quinoa"
            ],
            sexta: [
                "Café da manhã: Smoothie verde com espinafre",
                "Lanche da manhã: Nozes",
                "Almoço: Macarrão integral com molho de tomate e frango",
                "Lanche da tarde: Frutas vermelhas",
                "Jantar: Peixe grelhado com purê de batata doce"
            ],
            sabado: [
                "Café da manhã: Panqueca de aveia com frutas",
                "Lanche da manhã: Água de coco",
                "Almoço: Feijoada light com arroz integral",
                "Lanche da tarde: Salada de frutas",
                "Jantar: Pizza integral caseira com vegetais"
            ],
            domingo: [
                "Café da manhã: Café da manhã reforçado com ovos mexidos",
                "Lanche da manhã: Suco natural",
                "Almoço: Churrasco de carnes magras com saladas",
                "Lanche da tarde: Pipoca caseira",
                "Jantar: Sopa de legumes com pão integral"
            ]
        };

        res.status(200).json(refeicoes);
    } catch (error) {
        console.error('Erro ao buscar refeições:', error);
        res.status(500).json({ 
            error: 'Erro interno do servidor' 
        });
    }
}
