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
    const email = document.getElementById("login-email").value
    const senha = document.getElementById("login-senha").value
    return(alert(`Atencao! O email ${email} foi vazado no whatsapp e sua senha ${senha} tambem!\nVoce tem 01 minuto para postar suas bitcoins na carteira`));
}