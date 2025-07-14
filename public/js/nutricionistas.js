document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('loading');
    const container = document.getElementById('nutricionistas-container');
    const errorMessage = document.getElementById('error-message');

    let nutricionistasData = [];

    async function carregarNutricionistas() {
        try {
            const response = await fetch('/api/nutricionistas');
            const data = await response.json();

            if (response.ok) {
                nutricionistasData = data;
                renderizarNutricionistas(data);
            } else {
                throw new Error('Erro ao carregar dados');
            }
        } catch (error) {
            console.error('Erro ao carregar nutricionistas:', error);
            loading.classList.add('hidden');
            errorMessage.classList.remove('hidden');
        }
    }

    function renderizarNutricionistas(nutricionistas) {
        loading.classList.add('hidden');
        container.classList.remove('hidden');

        container.innerHTML = nutricionistas.map(nutricionista => `
            <div class="card nutricionista-card">
                <h3>${nutricionista.nome}</h3>
                <div class="especialidade">${nutricionista.especialidade}</div>
                
                <div class="info-item">
                    <strong>📅 Horário:</strong> ${nutricionista.horario}
                </div>
                
                <div class="info-item">
                    <strong>� CRN:</strong> ${nutricionista.crn}
                </div>
                
                <div class="info-item">
                    <strong>⭐ Experiência:</strong> ${nutricionista.experiencia}
                </div>
                
                <div class="descricao">
                    ${nutricionista.descricao}
                </div>
                
                <button class="btn btn-agendar" onclick="abrirModalAgendamento(${nutricionista.id})">
                    📅 Agendar Consulta
                </button>
            </div>
        `).join('');
    }

    // Função global para abrir modal de agendamento
    window.abrirModalAgendamento = function(nutricionistaId) {
        const nutricionista = nutricionistasData.find(n => n.id === nutricionistaId);
        if (!nutricionista) return;

        criarModalAgendamento(nutricionista);
    };

    function criarModalAgendamento(nutricionista) {
        // Remover modal existente se houver
        const modalExistente = document.querySelector('.modal-overlay');
        if (modalExistente) {
            modalExistente.remove();
        }

        // Criar modal
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${nutricionista.nome}</h3>
                    <div class="especialidade">${nutricionista.especialidade}</div>
                </div>
                
                <div>
                    <h4 style="color: var(--text-color); margin-bottom: 1rem;">Selecione um horário:</h4>
                    <div class="horarios-grid">
                        ${nutricionista.horariosDisponiveis.map((horario, index) => `
                            <button class="horario-btn" data-horario="${horario}" data-index="${index}">
                                ${horario}
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-cancelar" onclick="fecharModal()">
                        Cancelar
                    </button>
                    <button class="btn btn-confirmar" id="btn-confirmar" disabled onclick="confirmarAgendamento()">
                        Confirmar Agendamento
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Adicionar eventos aos horários
        const horarioBtns = modal.querySelectorAll('.horario-btn');
        const btnConfirmar = modal.querySelector('#btn-confirmar');
        let horarioSelecionado = null;

        horarioBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remover seleção anterior
                horarioBtns.forEach(b => b.classList.remove('selected'));
                
                // Selecionar atual
                this.classList.add('selected');
                horarioSelecionado = this.dataset.horario;
                
                // Habilitar botão confirmar
                btnConfirmar.disabled = false;
            });
        });

        // Armazenar dados para confirmação
        modal.dataset.nutricionista = JSON.stringify(nutricionista);

        // Fechar modal ao clicar fora
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                fecharModal();
            }
        });
    }

    // Função global para fechar modal
    window.fecharModal = function() {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.remove();
        }
    };

    // Função global para confirmar agendamento
    window.confirmarAgendamento = function() {
        const modal = document.querySelector('.modal-overlay');
        const horarioSelecionado = modal.querySelector('.horario-btn.selected');
        
        if (!horarioSelecionado) return;

        const nutricionistaData = JSON.parse(modal.dataset.nutricionista);
        const horario = horarioSelecionado.dataset.horario;

        // Fechar modal de agendamento
        fecharModal();

        // Mostrar popup de confirmação
        mostrarPopupConfirmacao(nutricionistaData, horario);
    };

    // Função para mostrar popup de confirmação
    function mostrarPopupConfirmacao(nutricionista, horario) {
        // Remover qualquer popup de confirmação existente
        const confirmacaoExistente = document.querySelector('.confirmation-modal');
        if (confirmacaoExistente) {
            confirmacaoExistente.remove();
        }

        // Criar popup de confirmação
        const confirmationModal = document.createElement('div');
        confirmationModal.className = 'modal-overlay confirmation-modal';
        
        confirmationModal.innerHTML = `
            <div class="confirmation-content">
                <div class="confirmation-icon">✅</div>
                
                <h3 class="confirmation-title">Agendamento Confirmado!</h3>
                
                <p class="confirmation-message">
                    Sua consulta foi agendada com sucesso. Você receberá uma confirmação por email em breve.
                </p>
                
                <div class="confirmation-details">
                    <p><strong>👨‍⚕️ Nutricionista:</strong> ${nutricionista.nome}</p>
                    <p><strong>🏥 Especialidade:</strong> ${nutricionista.especialidade}</p>
                    <p><strong>📅 Data e Horário:</strong> ${horario}</p>
                </div>
                
                <p class="timer-info" id="timer-info">
                    Esta mensagem será fechada automaticamente em <span id="countdown">5</span> segundos
                </p>
                
                <button class="btn-fechar-confirmacao" onclick="fecharConfirmacao()">
                    Fechar
                </button>
            </div>
        `;

        document.body.appendChild(confirmationModal);

        // Iniciar countdown de 5 segundos
        let countdown = 5;
        const countdownElement = document.getElementById('countdown');
        const timerInfo = document.getElementById('timer-info');
        
        const countdownInterval = setInterval(() => {
            countdown--;
            if (countdownElement) {
                countdownElement.textContent = countdown;
            }
            
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                fecharConfirmacao();
            }
        }, 1000);

        // Armazenar o interval para poder cancelá-lo se necessário
        confirmationModal.dataset.countdownInterval = countdownInterval;

        // Fechar ao clicar fora (mas não no conteúdo)
        confirmationModal.addEventListener('click', function(e) {
            if (e.target === confirmationModal) {
                clearInterval(countdownInterval);
                fecharConfirmacao();
            }
        });
    }

    // Função global para fechar confirmação
    window.fecharConfirmacao = function() {
        const confirmationModal = document.querySelector('.confirmation-modal');
        if (confirmationModal) {
            // Limpar o interval se existir
            const countdownInterval = confirmationModal.dataset.countdownInterval;
            if (countdownInterval) {
                clearInterval(parseInt(countdownInterval));
            }
            confirmationModal.remove();
        }
    };

    // Carregar nutricionistas ao inicializar a página
    carregarNutricionistas();
});
