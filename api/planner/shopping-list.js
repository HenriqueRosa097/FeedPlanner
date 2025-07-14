module.exports = (req, res) => {
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
        // Lista de compras mockada
        const listaCompras = [
            "Arroz integral (1kg)",
            "Feijão preto (500g)",
            "Frango (1kg)",
            "Peixe (500g)",
            "Ovos (1 dúzia)",
            "Leite (1L)",
            "Iogurte natural",
            "Queijo branco",
            "Pão integral",
            "Aveia em flocos",
            "Banana (1kg)",
            "Maçã (1kg)",
            "Laranja (1kg)",
            "Mamão (1 unidade)",
            "Tomate (500g)",
            "Alface (1 pé)",
            "Cenoura (500g)",
            "Brócolis (1 maço)",
            "Cebola (500g)",
            "Alho (1 cabeça)",
            "Batata doce (1kg)",
            "Azeite extra virgem",
            "Sal marinho",
            "Temperos naturais"
        ];

        res.status(200).json(listaCompras);
    } catch (error) {
        console.error('Erro ao buscar lista de compras:', error);
        res.status(500).json({ 
            error: 'Erro interno do servidor' 
        });
    }
}
