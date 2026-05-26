// ATRIBUTOS //

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");

// REGEX //

const regexNome = /^[A-Za-zÀ-ÿ\s]{2,}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/;
const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const regexTelefone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

// FUNCTION //

function validarFormulario(){

}