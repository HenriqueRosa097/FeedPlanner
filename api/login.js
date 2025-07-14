export default function handler(req, res) {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Tratar requisições OPTIONS (preflight)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Aceitar apenas POST
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        const { email, password } = req.body;

        // Validação simples dos dados recebidos
        if (!email || !password) {
            res.status(400).json({ 
                success: false, 
                error: 'Email e senha são obrigatórios' 
            });
            return;
        }

        // Credenciais mockadas para teste
        const validEmail = 'teste@exemplo.com';
        const validPassword = '123456';

        // Verificar credenciais
        if (email === validEmail && password === validPassword) {
            res.status(200).json({ 
                success: true,
                message: 'Login realizado com sucesso',
                user: {
                    email: email,
                    name: 'Usuário Teste'
                }
            });
        } else {
            res.status(401).json({ 
                success: false,
                error: 'Credenciais inválidas'
            });
        }
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Erro interno do servidor' 
        });
    }
}
