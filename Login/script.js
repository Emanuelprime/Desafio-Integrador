/*Declara Constantes utilizando o ID da <div> do HTML*/
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
let currentFormId;

/*Acao Botao Ola*/
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
    currentFormId = 'form-signup';      // Definir o ID do formulário de registro
    updateFormElements();               // Atualizar o form selecionado para a validacao pegar apenas no form visualizado
})

/*Acao Botao Bem Vindo*/
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
    currentFormId = 'form-signin';      // Definir o ID do formulário de login
    updateFormElements();               // Atualizar o form selecionado para a validacao pegar apenas no form visualizado
})

const form = document.getElementById('form-signin');    // Selecionar inicialmente o formulário de login
let campos = form.querySelectorAll(".required");        // Selecionar os campos dentro do formulário atual
let spans = form.querySelectorAll(".span-required");    // Selecionar os spans dentro do formulário atual
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValidate();
    passwordValidate();
    window.location.href = '../home/index.html';
});

function updateFormElements() {
    const form = document.getElementById(currentFormId); // Dar update no form selecionado toda vez que é clicado um dos botões do login
}

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function eraseError(index) {
    campos[index].style.border = '2px solid #156eda';
    spans[index].style.display = 'none';
}

function emailValidate() {
    if (emailRegex.test(campos[0].value)){
        eraseError(0);
    } else {
        setError(0);
    }
}

function passwordValidate() {
    if(campos[1].value.length < 8) {
        setError(1);
    } else {
        eraseError(1);
    }
}
