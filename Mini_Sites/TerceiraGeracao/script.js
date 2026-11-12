function alternarTema() {
    document.body.classList.toggle('dark-mode');
}

const dicas = [
    "Beba um copo de água agora mesmo para hidratar seu corpo.",
    "Respire fundo por 4 segundos, segure por 4 e solte devagar.",
    "Desvie o olhar da tela por 20 segundos e olhe para um ponto distante.",
    "Levante-se e faça um alongamento rápido nos ombros e pescoço."
];

function mostrarDica() {
    const caixa = document.getElementById('caixaDica');
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    caixa.textContent = dicas[indiceAleatorio];
    caixa.style.display = 'block';
}

function validarLembrete() {
    const nome = document.getElementById('nomeUsuario').value.trim();
    const resultado = document.getElementById('resultadoValidacao');

    if (nome === "") {
        resultado.textContent = "Por favor, digite seu nome antes de ativar.";
        resultado.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
    } else {
        resultado.textContent = `Olá, ${nome}. Lembre-se de fazer uma pausa e cuidar de você hoje.`;
        resultado.style.backgroundColor = "rgba(34, 197, 94, 0.2)";
    }
    resultado.style.display = 'block';
}