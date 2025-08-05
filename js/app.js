limpar();

function calcular() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const eficiencia = parseFloat(document.getElementById('eficiencia').value);
    const preco = parseFloat(document.getElementById('preco').value);
    const velocidade = parseFloat(document.getElementById('velocidade').value);

    if (isNaN(distancia) || isNaN(eficiencia) || isNaN(preco) || isNaN(velocidade)) {
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos corretamente.";
        return;
}

const tempoViagem = distancia / velocidade;
const litrosConsumidos = distancia / eficiencia;
const custoTotal = litrosConsumidos * preco;

document.getElementById("resultado").innerHTML = `
    🕒 Tempo estimado: ${tempoViagem.toFixed(2)} horas<br>
    ⛽ Combustível necessário: ${litrosConsumidos.toFixed(2)} litros<br>
    💰 Custo total: R$ ${custoTotal.toFixed(2)}
  `;
}

function limpar() {
  document.getElementById('distancia').value = '';
  document.getElementById('eficiencia').value = '';
  document.getElementById('preco').value = '';
  document.getElementById('velocidade').value = '';
}