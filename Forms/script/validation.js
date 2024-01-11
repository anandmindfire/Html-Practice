// input event listeners to form elements for real-time validation
document.getElementById('fullName').addEventListener('input', function () {
    validateFormField('fullName', 'Full Name is required');
});

document.getElementById('dob').addEventListener('input', function () {
    validateFormField('dob', "Please select your Date of Birth!");
});

document.getElementById('age').addEventListener('input', function () {
    validateFormField('age', "Please select your age");
});

document.getElementById('email').addEventListener('input', function () {
    validateEmail('email', "Please enter a valid email!");
});

document.getElementById('mobileno').addEventListener('input', function () {
    validateMobileNumber('mobileno', "Mobile number must be 10 characters long, and the first digit can't be 0!");
});


document.getElementById('empid').addEventListener('input', function () {
    validateFormField('empid', 'Employee ID is required');
});

document.getElementById('role').addEventListener('input', function () {
    validateFormField('role', 'Role is required');
});

document.getElementById('address').addEventListener('input', function () {
    validateFormField('address', 'Please enter your address');
});

// validate form
function validateForm(formData) {
    var isValid = true; 

    isValid = validateFormField('fullName', 'Full Name is required') && isValid;
    isValid = validateFormField('dob', "Please select your Date of Birth!") && isValid;
    isValid = validateFormField('age', "Please select your age") && isValid;
    isValid = validateEmail('email', "Please enter a valid email!") && isValid;
    isValid = validateMobileNumber('mobileno', "Mobile number must be 10 characters long, and the first digit can't be 0!") && isValid;
    validateGender();
    isValid = validateFormField('empid', 'Employee ID is required') && isValid;
    isValid = validateFormField('role', 'Role is required') && isValid;
    isValid = validateFormField('address', 'Please enter your address') && isValid;

    return isValid;
}

// Function to validate a form field and display error message
function validateFormField(elementId, errorMessage) {
    var element = document.getElementById(elementId);
    var isValid;

     isValid = element && element.value && element.value.trim() !== '';
    

    displayError(element, errorMessage, isValid);

    return isValid;
}

// Function to validate email and display error message
function validateEmail(elementId, errorMessage) {
    var element = document.getElementById(elementId);
    var isValid = element.value.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || element.value.trim() === '';

    displayError(element, errorMessage, isValid);

    return isValid;
}


function validateGender() {
    var genderError = document.getElementById("genderError");
    var radioButtons = document.getElementsByName('gender');
    var checked = false;

    for (var i = 0; i < radioButtons.length; i++) {
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
}
// Function to validate mobile number and display error message
function validateMobileNumber(elementId, errorMessage) {
    var element = document.getElementById(elementId);
    var isValid = element.value.trim().match(/^[1-9][0-9]{9}$/) || element.value.trim() === '';

    displayError(element, errorMessage, isValid);

    return isValid;
}

// Function to display error message in the placeholder and add 'error' class
function displayError(element, errorMessage, isValid) {
    element.placeholder = isValid ? '' : errorMessage;
    element.classList.toggle('error', !isValid);

    
    var errorMessageElement = element.nextElementSibling;
    if (!isValid) {
        if (!errorMessageElement || !errorMessageElement.classList.contains('error-message')) {
            errorMessageElement = document.createElement('div');
            errorMessageElement.classList.add('error-message');
            element.parentNode.insertBefore(errorMessageElement, element.nextSibling);
            showToast("All fields must be field properly","warning",5000); 
        }
        errorMessageElement.textContent = errorMessage;
    } else if (errorMessageElement && errorMessageElement.classList.contains('error-message')) {
        errorMessageElement.remove();
    }
}
