const form = document.getElementById('formLogin');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('repassword');


const userError = document.querySelector('.user-error');
const emailError = document.querySelector('.email-error');
const passError = document.querySelector('.password-error');
const repasError = document.querySelector('.repassword-error');

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

username.addEventListener('input', (e) => {
    const value = e.target.value;

    if (value.length < 6) {
        userError.classList.remove('d-none');
        userError.classList.add('d-block');
    } else {
        userError.classList.remove('d-block');
        userError.classList.add('d-none');
    }
});

email.addEventListener('input', (e) => {
    const value = e.target.value;
    let regex = emailRegex.test(value);

    if (!regex) {
        emailError.classList.remove('d-none');
        emailError.classList.add('d-block');
    } else {
        emailError.classList.remove('d-block');
        emailError.classList.add('d-none');
    }
});


password.addEventListener('input', (e) => {
    const value = e.target.value;

    if (value.length < 8) {
        passError.classList.remove('d-none');
        passError.classList.add('d-block');
    } else {
        passError.classList.remove('d-block');
        passError.classList.add('d-none');
    }
});

rePassword.addEventListener('input', (e) => {
    const value = e.target.value;
    const  passwordValue = password.value;
    if (value !== passwordValue) {
        repasError.classList.remove('d-none');
        repasError.classList.add('d-block');
    } else {
        repasError.classList.remove('d-block');
        repasError.classList.add('d-none');
    }
});


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if (username.value.length === 0) {
    username.focus();
    return;
  }
  if (email.value.length === 0) {
    email.focus();
    return;
  }
  if (password.value.length === 0) {
    password.focus();
    return;
  }
  if (repassword.value.length === 0) {
    repassword.focus();
    return;
  }
});

