const form = document.querySelector('.subscription-form');
const formEmail = document.querySelector('.input-email');
const validationErrorSign = document.querySelector('.validation-error-sign');
const validationErrMsg = document.querySelector('.validation-error-message');

const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
};

const validateEmail = (event) => {
    event.preventDefault();

    if (formEmail.value === '' || !isValidEmail(formEmail.value)) {
        validationErrorSign.style.visibility = 'visible';
        form.classList.add('invalid-input');
        validationErrMsg.style.visibility = 'visible';
    } else {
        formEmail.value = '';
        validationErrorSign.style.visibility = 'hidden';
        form.classList.remove('invalid-input');
        validationErrMsg.style.visibility = 'hidden';
    }
}

form.addEventListener('submit', validateEmail);
