let form = document.querySelector('#form');
let nome = document.querySelector('#name');
let spanNome = document.querySelector('.span-name');
let email = document.querySelector('#email');
let spanEmail = document.querySelector('.span-email');
let password = document.querySelector('#password');
let spanPassword = document.querySelector('.span-password');
let confirmPassword = document.querySelector('#confirm-password');
let spanConfirmPassword = document.querySelector('.span-confirm-password');

let emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;



form.addEventListener('submit', (e) => {
    e.preventDefault();
    send = true
    nomeValidator();  
    emailValidator();
    passwordValidator();
    confirmPasswordValidator();

    if (send == true) {
        form.submit();
    }

    alert('formulário enviado com sucesso!')
});

function nomeValidator() {
    if (nome.value.length < 3) {
        nome.style.border = '2px solid #e63636';
        spanNome.style.display = 'block';
        send=false;
    } else {
        nome.style.border = '1px solid #ccc';
        spanNome.style.display = 'none';
        send=true;
    }
}

function emailValidator() {
    if (!emailRegex.test(email.value)) {
        email.style.border = '2px solid #e63636';
        spanEmail.style.display = 'block';
        send=false;
    } else {
        email.style.border = '1px solid #ccc';
        spanEmail.style.display = 'none';
        send=true;
    }
}

function passwordValidator() {
    if (password.value.length < 8) {
        password.style.border = '2px solid #e63636';
        spanPassword.style.display = 'block';
        send=false;
    } else {
        password.style.border = '1px solid #ccc';
        spanPassword.style.display = 'none';
        send=true;
    }
}

function confirmPasswordValidator() {
    if (confirmPassword.value.length < 8 || confirmPassword.value != password.value) {
        confirmPassword.style.border = '2px solid #e63636';
        spanConfirmPassword.style.display = 'block';
        send=false;
    } else {
        confirmPassword.style.border = '1px solid #ccc';
        spanConfirmPassword.style.display = 'none';
        send=true;
    }
}