const campo1 = document.getElementById("numero1");
const campo2 = document.getElementById("numero2");
const textoResultado = document.getElementById("resultado");

function somar() {
    const n1 = parseFloat(campo1.value);
    const n2 = parseFloat(campo2.value);
    
    const resultadoConta = n1 + n2;
    
    textoResultado.textContent = "Resultado: " + resultadoConta;
}

function subtrair() {
    const n1 = parseFloat(campo1.value);
    const n2 = parseFloat(campo2.value);
    
    const resultadoConta = n1 - n2;
    
    textoResultado.textContent = "Resultado: " + resultadoConta;
}

function multiplicar() {
    const n1 = parseFloat(campo1.value);
    const n2 = parseFloat(campo2.value);
    
    const resultadoConta = n1 * n2;
    
    textoResultado.textContent = "Resultado: " + resultadoConta;
}

function dividir() {
    const n1 = parseFloat(campo1.value);
    const n2 = parseFloat(campo2.value);
    
    if (n2 === 0) {
        textoResultado.textContent = "Resultado: Não é possível dividir por zero!";
    } else {
        const resultadoConta = n1 / n2;
        textoResultado.textContent = "Resultado: " + resultadoConta;
    }
}