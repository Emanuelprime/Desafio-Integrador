/*Declara Constantes utilizando o ID da <div> do HTML*/
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

/*Acao Botao Ola*/
registerBtn.addEventListener('click', () => {
    container.classList.add('active')
})

/*Acao Botao Bem Vindo*/
loginBtn.addEventListener('click', () => {
    container.classList.remove('active')
})

function validarEmail(){
    const email = document.getElementById("login-email").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)){
        alert("Email valido! Voce sera redirecionado em breve.");
        window.location.href = "../home/index.html";
    } else {
        alert("Email invalido!\nInsira um email correto para prosseguir.");
    }
}