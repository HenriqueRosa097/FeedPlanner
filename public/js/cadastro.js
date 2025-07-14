document.addEventListener('DOMContentLoaded', function() {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const imcResult = document.getElementById('imc-result');
    const cadastroForm = document.getElementById('cadastro-form');

    function calcularIMC() {
        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);

        if (peso && altura && peso > 0 && altura > 0) {
            const imc = peso / (altura * altura);
            const imcFormatado = imc.toFixed(1);
            
            let classificacao = '';
            let classeCSS = '';

            if (imc < 18.5) {
                classificacao = 'Abaixo do peso';
                classeCSS = 'abaixo';
            } else if (imc < 25) {
                classificacao = 'Peso normal';
                classeCSS = 'normal';
            } else if (imc < 30) {
                classificacao = 'Sobrepeso';
                classeCSS = 'sobrepeso';
            } else if (imc < 35) {
                classificacao = 'Obesidade grau I';
                classeCSS = 'obesidade';
            } else if (imc < 40) {
                classificacao = 'Obesidade grau II';
                classeCSS = 'obesidade';
            } else {
                classificacao = 'Obesidade grau III';
                classeCSS = 'obesidade';
            }

            imcResult.innerHTML = `
                <div class="imc-result">
                    <div class="imc-value">${imcFormatado}</div>
                    <div class="imc-classification ${classeCSS}">
                        ${classificacao}
                    </div>
                </div>
            `;
        } else {
            imcResult.innerHTML = '<p>Preencha seu peso e altura para calcular o IMC automaticamente.</p>';
        }
    }

    // Calcular IMC em tempo real
    pesoInput.addEventListener('input', calcularIMC);
    alturaInput.addEventListener('input', calcularIMC);

    // Submissão do formulário
    cadastroForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const peso = document.getElementById('peso').value;
        const altura = document.getElementById('altura').value;
        const sexo = document.getElementById('sexo').value;

        // Simular salvamento
        alert(`Dados salvos (simulação)!\n\nNome: ${nome}\nIdade: ${idade} anos\nPeso: ${peso} kg\nAltura: ${altura} m\nSexo: ${sexo}`);
    });
});
