const loginForm = document.getElementById('form-signin');
const registerForm = document.getElementById('form-signup');

let loginCampos = loginForm.querySelectorAll(".required");
let loginSpans = loginForm.querySelectorAll(".span-required");

let registerCampos = registerForm.querySelectorAll(".required");
let registerSpans = registerForm.querySelectorAll(".span-required");

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValidate(loginCampos, loginSpans);
    passwordValidate(loginCampos, loginSpans);
    window.location.href = '../home/index.html';
});

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValidate(registerCampos, registerSpans);
    passwordValidate(registerCampos, registerSpans);
    window.location.href = './index.html';
});

function setError(campos, spans, index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function eraseError(campos, spans, index) {
    campos[index].style.border = '2px solid #156eda';
    spans[index].style.display = 'none';
}

function emailValidate(campos, spans) {
    if (emailRegex.test(campos[0].value)) {
        eraseError(campos, spans, 0);
    } else {
        setError(campos, spans, 0);
    }
}

function passwordValidate(campos, spans) {
    if (campos[1].value.length < 8) {
        setError(campos, spans, 1);
    } else {
        eraseError(campos, spans, 1);
    }
}