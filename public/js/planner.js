document.addEventListener('DOMContentLoaded', function() {
    const rendaMercadoInput = document.getElementById('renda-mercado');
    const budgetResult = document.getElementById('budget-result');
    const loadingShopping = document.getElementById('loading-shopping');
    const shoppingList = document.getElementById('shopping-list');
    const loadingMeals = document.getElementById('loading-meals');
    const mealsContainer = document.getElementById('meals-container');

    // Cálculo do orçamento em tempo real
    rendaMercadoInput.addEventListener('input', function() {
        const renda = parseFloat(this.value);
        
        if (renda && renda > 0) {
            const planoPorSemana = (renda / 4).toFixed(2);
            budgetResult.innerHTML = `
                <div class="budget-result show">
                    Com R$ ${renda.toFixed(2)}, seu plano de compras semanal é de R$ ${planoPorSemana}
                </div>
            `;
            budgetResult.classList.remove('hidden');
        } else {
            budgetResult.classList.add('hidden');
        }
    });

    // Carregar lista de compras
    async function carregarListaCompras() {
        try {
            const response = await fetch('/api/planner/shopping-list');
            const data = await response.json();

            if (response.ok) {
                renderizarListaCompras(data);
            } else {
                throw new Error('Erro ao carregar lista de compras');
            }
        } catch (error) {
            console.error('Erro ao carregar lista de compras:', error);
            loadingShopping.innerHTML = '<p class="error">Erro ao carregar lista de compras</p>';
        }
    }

    function renderizarListaCompras(itens) {
        loadingShopping.classList.add('hidden');
        shoppingList.classList.remove('hidden');

        shoppingList.innerHTML = `
            <ul class="shopping-list">
                ${itens.map(item => `
                    <li class="shopping-item">${item}</li>
                `).join('')}
            </ul>
        `;
    }

    // Carregar refeições da semana
    async function carregarRefeicoes() {
        try {
            const response = await fetch('/api/planner/meals');
            const data = await response.json();

            if (response.ok) {
                renderizarRefeicoes(data);
            } else {
                throw new Error('Erro ao carregar refeições');
            }
        } catch (error) {
            console.error('Erro ao carregar refeições:', error);
            loadingMeals.innerHTML = '<p class="error">Erro ao carregar refeições</p>';
        }
    }

    function renderizarRefeicoes(refeicoes) {
        loadingMeals.classList.add('hidden');
        mealsContainer.classList.remove('hidden');

        const diasDaSemana = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'];
        const nomesDias = {
            'segunda': 'Segunda-feira',
            'terca': 'Terça-feira',
            'quarta': 'Quarta-feira',
            'quinta': 'Quinta-feira',
            'sexta': 'Sexta-feira',
            'sabado': 'Sábado',
            'domingo': 'Domingo'
        };

        mealsContainer.innerHTML = diasDaSemana.map(dia => {
            const refeicoesDoDia = refeicoes[dia] || [];
            return `
                <div class="meal-day">
                    <h3>${nomesDias[dia]}</h3>
                    <ul class="meal-list">
                        ${refeicoesDoDia.map(refeicao => `
                            <li class="meal-item">${refeicao}</li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }).join('');
    }

    // Carregar dados ao inicializar
    carregarListaCompras();
    carregarRefeicoes();

    // Preencher valor padrão para demonstração
    rendaMercadoInput.value = '800';
    rendaMercadoInput.dispatchEvent(new Event('input'));
});
