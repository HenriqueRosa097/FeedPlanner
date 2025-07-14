export default function handler(req, res) {
    // Configurar CORS explicitamente
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

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
        console.log('🔍 API nutricionistas chamada - versão com datas!');
        // Lista de nutricionistas mockada com especialidades variadas
        const nutricionistas = [
            {
                id: 1,
                nome: "Dra. Ana Silva",
                especialidade: "Nutrição Clínica",
                horario: "Segunda a Sexta: 08h-17h",
                crn: "CRN-3 12345",
                experiencia: "10 anos de experiência",
                descricao: "Especialista em nutrição clínica e emagrecimento saudável",
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
                nome: "Dr. Carlos Santos",
                especialidade: "Nutrição Esportiva",
                horario: "Segunda a Sábado: 07h-19h",
                crn: "CRN-3 23456",
                experiencia: "8 anos de experiência",
                descricao: "Focado em nutrição para atletas e praticantes de atividade física",
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
                nome: "Dra. Fernanda Costa",
                especialidade: "Nutrição Comportamental",
                horario: "Terça a Sábado: 10h-18h",
                crn: "CRN-3 45678",
                experiencia: "6 anos de experiência",
                descricao: "Especialista em mudança de comportamentos alimentares e relação com a comida",
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
                nome: "Dr. Roberto Almeida",
                especialidade: "Nutrição Geriátrica",
                horario: "Segunda a Sexta: 08h-15h",
                crn: "CRN-3 56789",
                experiencia: "15 anos de experiência",
                descricao: "Focado em alimentação para a terceira idade",
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
                nome: "Dra. Juliana Ribeiro",
                especialidade: "Nutrição Funcional",
                horario: "Segunda a Sexta: 13h-20h",
                crn: "CRN-3 67890",
                experiencia: "9 anos de experiência",
                descricao: "Abordagem funcional e integrativa da nutrição",
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
        ];

        res.status(200).json(nutricionistas);
    } catch (error) {
        console.error('Erro ao buscar nutricionistas:', error);
        res.status(500).json({ 
            error: 'Erro interno do servidor' 
        });
    }
}
