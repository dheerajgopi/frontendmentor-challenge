const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const pswd = document.querySelector('#pswd');

const isEmpty = (val) => {
    return !val;
}

const isValidEmail = (val) => {
    return /\S+@\S+\.\S+/.test(val);
};

const validateForm = (event) => {
    event.preventDefault();

    if

}
