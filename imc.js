function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
    
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultado.innerHTML = '<p style="color: red;">Por favor, digite valores válidos!</p>';
        return;
    }
    
    const alturaAjustada = altura > 3 ? altura / 100 : altura;
    const imc = peso / (alturaAjustada * alturaAjustada);
    let classificacao = '';
    
    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else classificacao = 'Obeso';
    
    // Use Number() para converter corretamente
    const imcFormatado = Number(imc.toFixed(2));
    
   resultado.innerHTML = `<p><strong>IMC: ${imcFormatado}</strong></p><p>${classificacao}</p>`;
}