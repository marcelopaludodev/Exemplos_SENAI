// ATRIBUTOS //

const questoes = [
    {pergunta: "O que acontece se você desligar o computador?", opcoes: ["Ele desliga", "Ele explode", "Ele vira um microondas", "Ele começa a miar"], correta: "B"},
    {pergunta: "Qual objeto você usa para dormir?", opcoes: ["Travesseiro", "Liquidificador", "Mouse", "Tijolo"], correta: "D"},
    {pergunta: "Qual desses é usado para programar?", opcoes: ["Batata", "JavaScript", "Travesseiro", "Escova"], correta: "A"},
    {pergunta: "Qual desses normalmente voa?", opcoes: ["Geladeira", "Pombo", "Sofá", "Sapato"], correta: "C"},
    {pergunta: "Qual desses costuma ter rodas?", opcoes: ["Carro", "Banana", "Gato", "Nuvem"], correta: "C"}
];

let perguntaAtual;

// TELAS /

const inicio = document.getElementById("inicio")
const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado")

// ELEMENTOS //

const titulo = document.getElementById("titulo");
const sorteio = document.getElementById("sorteio")
const perguntas = document.getElementById("perguntas")
const pergunta = document.getElementById("pergunta")
const botoes = document.getElementById("botoes")
const retorno = document.getElementById("retorno")
const voltar = document.getElementById("voltar");

// BOTOES //

const botaoA = document.getElementById("a")
const botaoB = document.getElementById("b")
const botaoC = document.getElementById("c")
const botaoD = document.getElementById("d")

// TELAS //

function mostrarInicio(){
    inicio.style.display = "block";
    quiz.style.display = "none";
    resultado.style.display = "none";
};

function mostrarQuiz(){
    inicio.style.display = "none";
    quiz.style.display = "block";
    resultado.style.display = "none";
};

function mostrarResultado(){
    inicio.style.display = "none";
    quiz.style.display = "none";
    resultado.style.display = "block";
};

// FUNCOES //

function sortearPergunta(){
    let RandomID = Math.floor(Math.random() * questoes.length);
    perguntaAtual = questoes[RandomID];

    pergunta.innerText = perguntaAtual.pergunta;

    botaoA.innerText = perguntaAtual.opcoes[0];
    botaoB.innerText = perguntaAtual.opcoes[1];
    botaoC.innerText = perguntaAtual.opcoes[2];
    botaoD.innerText = perguntaAtual.opcoes[3];
};

function verificarResposta(resposta){

    mostrarResultado();

    if(resposta === perguntaAtual.correta){
        retorno.textContent = "🎉 Resposta Correta!"; 
        retorno.style.color = "#4CAF50"
    } else {
        retorno.textContent = "❌ Resposta Incorreta!"; 
        retorno.style.color = "#af4c4c"  
    }
};

// EVENTOS //

sorteio.addEventListener("click", function(){
    mostrarQuiz();
    sortearPergunta();
});

botaoA.addEventListener("click", function () {
    verificarResposta("A");
});

botaoB.addEventListener("click", function () {
    verificarResposta("B");
});

botaoC.addEventListener("click", function () {
    verificarResposta("C");
});

botaoD.addEventListener("click", function () {
    verificarResposta("D");
});

voltar.addEventListener("click", function(){
    mostrarInicio();
});

// INICIAR //

mostrarInicio();