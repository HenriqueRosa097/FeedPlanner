document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Esconder mensagem de erro anterior
        errorMessage.classList.add('hidden');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (data.success) {
                // Redirecionar para a página do planner
                window.location.href = '/meu-planner.html';
            } else {
                // Mostrar mensagem de erro
                errorMessage.classList.remove('hidden');
            }
        } catch (error) {
            console.error('Erro no login:', error);
            errorMessage.textContent = 'Erro de conexão. Tente novamente.';
            errorMessage.classList.remove('hidden');
        }
    });

    // Preencher campos automaticamente para teste
    document.getElementById('email').value = 'teste@exemplo.com';
    document.getElementById('password').value = '123456';
});
