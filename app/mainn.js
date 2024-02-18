// Função para inserir valores no campo de resultado
function insert(val) {
    let resultado = document.getElementById('resultado');
    if (val === 'C') {
        // Limpa o campo de resultado
        resultado.value = '';
    } else if (val === '<') {
        // Remove o último caractere inserido
        resultado.value = resultado.value.slice(0, -1);
    } else if (val === '=') {
        // Realiza o cálculo
        calculate();
    } else {
        // Insere o valor no campo de resultado
        if (val === 'x') {
            val = '*'; // Substitui o símbolo de multiplicação para o correto em JS
        }
        resultado.value += val;
    }
}

// Função para calcular a expressão inserida
function calculate() {
    let resultado = document.getElementById('resultado');
    try {
        // Avalia a expressão matemática e atualiza o campo de resultado com o resultado
        resultado.value = eval(resultado.value);
    } catch (e) {
        // Se ocorrer um erro na avaliação, exibe uma mensagem de erro
        resultado.value = 'Erro';
    }
}
