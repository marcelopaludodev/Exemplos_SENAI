// TELAS //

const login = document.getElementById("login");
const feedback = document.getElementById("feedback");

// MOSTRAR //

function mostrarLogin(){
    login.style.display = "flex";
    feedback.style.display = "none";
};


function mostrarFeedback(){
    login.style.display = "none";
    feedback.style.display = "block"
};

// ATRIBUTOS //

const emailRecebido = document.getElementById("email");
const senhaRecebido = document.getElementById("senha");
const logar = document.getElementById("logar");

const mensagem = document.getElementById("mensagem");
const recarregar = document.getElementById("recarregar");


// DADOS //

const email = "email@gmail.com";
const senha = "senha";

// FUNCOES // 

function validarLogin(emailRecebido, senhaRecebido){
    if(emailRecebido === email && senhaRecebido === senha){
        alert("Entrou com sucesso!");
        return true;
    } else {
        alert("Credenciais incorretas!");
        return false;
    };
};

// EVENTOS //

logar.addEventListener("click", function(event){

    event.preventDefault();

    const loginCorreto = validarLogin(emailRecebido.value, senhaRecebido.value);

    if(loginCorreto){
        mostrarFeedback();
    }

});

recarregar.addEventListener("click", function(){
    mostrarLogin();
})

mostrarLogin();