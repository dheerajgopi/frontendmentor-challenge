const form = document.querySelector('.claim-form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const pswd = document.querySelector('#pswd');
const fnameErrMsg = document.querySelector('#error-msg-fname');
const lnameErrMsg = document.querySelector('#error-msg-lname');
const emailErrMsg = document.querySelector('#error-msg-email');
const pswdErrMsg = document.querySelector('#error-msg-pswd');
const fnameErrIcon = document.querySelector('#error-icon-fname');
const lnameErrIcon = document.querySelector('#error-icon-lname');
const emailErrIcon = document.querySelector('#error-icon-email');
const pswdErrIcon = document.querySelector('#error-icon-pswd');
const formInputs = document.getElementsByClassName('form-input');
const inputFields = {
    'fname': fname,
    'lname': lname,
    'email': email,
    'pswd': pswd,
};
const errMsgs = {
    'err-msg-fname': fnameErrMsg,
    'err-msg-lname': lnameErrMsg,
    'err-msg-email': emailErrMsg,
    'err-msg-pswd': pswdErrMsg,
};
const errIcons = {
    'err-icon-fname': fnameErrIcon,
    'err-icon-lname': lnameErrIcon,
    'err-icon-email': emailErrIcon,
    'err-icon-pswd': pswdErrIcon,
};

const isEmpty = (val) => {
    return !val;
}

const isInvalidEmail = (val) => {
    return !/\S+@\S+\.\S+/.test(val);
};

const validateForm = (event) => {
    const invalidFields = [];
    const emptyCheckInputs = [fname, lname, email, pswd];
    const emailCheckInputs = [email];

    event.preventDefault();

    Array.from(emptyCheckInputs).forEach((each) => {
        if (isEmpty(each.value)) {
            errMsgs[`err-msg-${each.id}`].style.display = 'block';
            errIcons[`err-icon-${each.id}`].style.visibility = 'visible';
            each.classList.add('clr-red');
            invalidFields.push(each);
        } else {
            errMsgs[`err-msg-${each.id}`].style.display = 'none';
            errIcons[`err-icon-${each.id}`].style.visibility = 'hidden';
            each.classList.remove('clr-red');
        }
    });

    Array.from(emailCheckInputs).forEach((each) => {
        // if field is already invalid skip validation
        if (invalidFields.includes(each)) {
            return;
        }

        if (isInvalidEmail(each.value)) {
            errMsgs[`err-msg-${each.id}`].style.display = 'block';
            errIcons[`err-icon-${each.id}`].style.visibility = 'visible';
            each.classList.add('clr-red');
            invalidFields.push(each);
        } else {
            errMsgs[`err-msg-${each.id}`].style.display = 'none';
            errIcons[`err-icon-${each.id}`].style.visibility = 'hidden';
            each.classList.remove('clr-red');
        }
    });

    // skip refresh if validation errors are present
    if (!invalidFields.length) {
        fname.value = '';
        lname.value = '';
        email.value = '';
        pswd.value = '';
    }
}

const clearErrMsgOnInputChange = (event) => {
    const formInputId = event.target.id;
    errMsgs[`err-msg-${formInputId}`].style.display = 'none';
    inputFields[`${formInputId}`].classList.remove('clr-red');
    errIcons[`err-icon-${formInputId}`].style.visibility = 'hidden';
}

form.addEventListener('submit', validateForm);

Array.from(formInputs).forEach((each) => {
    each.addEventListener('change', clearErrMsgOnInputChange);
    each.addEventListener('input', clearErrMsgOnInputChange);
});
