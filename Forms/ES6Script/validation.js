// Input event listeners for real-time validation
document.getElementById('fullName').addEventListener('input', () => validateFormField('fullName', 'Full Name is required'));
document.getElementById('dob').addEventListener('input', () => validateFormField('dob', 'Please select your Date of Birth!'));
document.getElementById('age').addEventListener('input', () => validateFormField('age', 'Please select your age'));
document.getElementById('email').addEventListener('input', () => validateEmail('email', 'Please enter a valid email!'));
document.getElementById('mobileno').addEventListener('input', () => validateMobileNumber('mobileno', "Mobile number must be 10 characters long, and the first digit can't be 0!"));
document.getElementById('empid').addEventListener('input', () => validateFormField('empid', 'Employee ID is required'));
document.getElementById('role').addEventListener('input', () => validateFormField('role', 'Role is required'));
document.getElementById('address').addEventListener('input', () => validateFormField('address', 'Please enter your address'));

// Validate form
const validateForm = (formData) => {
    let isValid = true;

    isValid = validateFormField('fullName', 'Full Name is required') && isValid;
    isValid = validateFormField('dob', 'Please select your Date of Birth!') && isValid;
    isValid = validateFormField('age', 'Please select your age') && isValid;
    isValid = validateEmail('email', 'Please enter a valid email!') && isValid;
    isValid = validateMobileNumber('mobileno', "Mobile number must be 10 characters long, and the first digit can't be 0!") && isValid;
    validateGender();
    isValid = validateFormField('empid', 'Employee ID is required') && isValid;
    isValid = validateFormField('role', 'Role is required') && isValid;
    isValid = validateFormField('address', 'Please enter your address') && isValid;

    return isValid;
};

// Validate a form field and display error message
const validateFormField = (elementId, errorMessage) => {
    const element = document.getElementById(elementId);
    const isValid = element && element.value && element.value.trim() !== '';

    displayError(element, errorMessage, isValid);

    return isValid;
};

// Validate email and display error message
const validateEmail = (elementId, errorMessage) => {
    const element = document.getElementById(elementId);
    const isValid = element.value.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || element.value.trim() === '';

    displayError(element, errorMessage, isValid);

    return isValid;
};

// Validate mobile number and display error message
const validateMobileNumber = (elementId, errorMessage) => {
    const element = document.getElementById(elementId);
    const isValid = element.value.trim().match(/^[1-9][0-9]{9}$/) || element.value.trim() === '';

    displayError(element, errorMessage, isValid);

    return isValid;
};

// Display error message in the placeholder and add 'error' class
const displayError = (element, errorMessage, isValid) => {
    element.placeholder = isValid ? '' : errorMessage;
    element.classList.toggle('error', !isValid);

    let errorMessageElement = element.nextElementSibling;
    if (!isValid) {
        if (!errorMessageElement || !errorMessageElement.classList.contains('error-message')) {
            errorMessageElement = document.createElement('div');
            errorMessageElement.classList.add('error-message');
            element.parentNode.insertBefore(errorMessageElement, element.nextSibling);
            showToast('All fields must be filled properly', 'warning', 5000);
        }
        errorMessageElement.textContent = errorMessage;
    } else if (errorMessageElement && errorMessageElement.classList.contains('error-message')) {
        errorMessageElement.remove();
    }
};

// Convert validateGender function to arrow function
const validateGender = () => {
    const genderError = document.getElementById('genderError');
    const radioButtons = document.getElementsByName('gender');
    let checked = false;

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            checked = true;
            break;
        }
    }

    if (!checked) {
        genderError.innerHTML = 'Please select your gender';
    } else {
        genderError.innerHTML = '';
    }
};
