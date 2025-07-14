document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const modal = document.getElementById('modal-assinatura');
    const modalTitle = document.getElementById('modal-title');
    const planName = document.getElementById('plan-name');
    const planPrice = document.getElementById('plan-price');
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const creditCardForm = document.getElementById('credit-card-form');

    // Dados dos planos
    const planos = {
        plus: {
            nome: 'FeedPlanner Plus',
            preco: 'R$ 19,90',
            titulo: 'Assinar FeedPlanner Plus'
        },
        premium: {
            nome: 'FeedPlanner Premium',
            preco: 'R$ 39,90',
            titulo: 'Assinar FeedPlanner Premium'
        }
    };

    // Função global para abrir modal de assinatura
    window.abrirModalAssinatura = function(tipoPlano = 'plus') {
        const plano = planos[tipoPlano];
        
        modalTitle.textContent = plano.titulo;
        planName.textContent = plano.nome;
        planPrice.textContent = plano.preco;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    // Função global para fechar modal
    window.fecharModal = function() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    // Fechar modal ao clicar fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            fecharModal();
        }
    });

    // Controlar exibição do formulário de cartão
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.value === 'credit') {
                creditCardForm.style.display = 'block';
            } else {
                creditCardForm.style.display = 'none';
            }
        });
    });

    // Função global para processar assinatura
    window.processarAssinatura = function(event) {
        event.preventDefault();
        
        // Simular processamento
        const btn = event.target;
        const originalText = btn.textContent;
        
        btn.textContent = 'Processando...';
        btn.disabled = true;
        
        setTimeout(() => {
            // Simular sucesso
            mostrarSuccessAssinatura();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 2000);
    };

    // Mostrar popup de sucesso
    function mostrarSuccessAssinatura() {
        fecharModal();
        
        // Criar popup de sucesso
        const successModal = document.createElement('div');
        successModal.className = 'modal-overlay';
        successModal.innerHTML = `
            <div class="modal-content" style="text-align: center; padding: 2rem;">
                <div style="font-size: 4rem; color: var(--success-color); margin-bottom: 1rem;">✅</div>
                <h3 style="color: var(--success-color); margin-bottom: 1rem;">Assinatura Confirmada!</h3>
                <p style="margin-bottom: 1.5rem; color: var(--text-color);">
                    Parabéns! Seu período de teste gratuito já começou. 
                    Você receberá um email de confirmação em breve.
                </p>
                <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <p style="margin: 0; font-weight: bold; color: var(--primary-color);">
                        🎉 Todas as funcionalidades Plus liberadas!
                    </p>
                    <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem; color: #666;">
                        Explore análises avançadas, controle financeiro e muito mais.
                    </p>
                </div>
                <button onclick="fecharSuccessModal()" 
                        style="background: var(--success-color); color: white; border: none; 
                               padding: 1rem 2rem; border-radius: 8px; font-weight: bold; 
                               cursor: pointer; font-size: 1rem;">
                    Começar a Usar
                </button>
            </div>
        `;
        
        document.body.appendChild(successModal);
        
        // Função para fechar modal de sucesso
        window.fecharSuccessModal = function() {
            successModal.remove();
            // Redirecionar para o planner
            window.location.href = 'meu-planner.html';
        };
        
        // Auto-fechar depois de 8 segundos
        setTimeout(() => {
            if (document.body.contains(successModal)) {
                fecharSuccessModal();
            }
        }, 8000);
    }

    // Máscaras para os campos
    function aplicarMascaras() {
        // Máscara para CPF
        const cpfInput = document.querySelector('input[placeholder="000.000.000-00"]');
        if (cpfInput) {
            cpfInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                e.target.value = value;
            });
        }

        // Máscara para cartão de crédito
        const cardInput = document.querySelector('input[placeholder="0000 0000 0000 0000"]');
        if (cardInput) {
            cardInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
                e.target.value = value;
            });
        }

        // Máscara para validade
        const validadeInput = document.querySelector('input[placeholder="MM/AA"]');
        if (validadeInput) {
            validadeInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                value = value.replace(/(\d{2})(\d)/, '$1/$2');
                e.target.value = value;
            });
        }

        // Máscara para CVV
        const cvvInput = document.querySelector('input[placeholder="000"]');
        if (cvvInput) {
            cvvInput.addEventListener('input', function(e) {
                e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
            });
        }
    }

    // Aplicar máscaras quando o modal for aberto
    window.abrirModalAssinatura = function(tipoPlano = 'plus') {
        const plano = planos[tipoPlano];
        
        modalTitle.textContent = plano.titulo;
        planName.textContent = plano.nome;
        planPrice.textContent = plano.preco;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Aplicar máscaras após abrir o modal
        setTimeout(aplicarMascaras, 100);
    };

    // Animações de scroll para as seções
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.benefit-card, .faq-item, .plan-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Efeito de contador nos preços
    function animarPrecos() {
        const precos = document.querySelectorAll('.plan-price .price');
        precos.forEach(preco => {
            const valorFinal = parseFloat(preco.textContent.replace('R$ ', '').replace(',', '.'));
            let valorAtual = 0;
            const incremento = valorFinal / 50;
            
            const timer = setInterval(() => {
                valorAtual += incremento;
                if (valorAtual >= valorFinal) {
                    valorAtual = valorFinal;
                    clearInterval(timer);
                }
                preco.textContent = `R$ ${valorAtual.toFixed(2).replace('.', ',')}`;
            }, 30);
        });
    }

    // Iniciar animação dos preços quando a seção aparecer
    const planosSection = document.querySelector('.plans-section');
    if (planosSection) {
        const planosObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animarPrecos();
                    planosObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        planosObserver.observe(planosSection);
    }
});
