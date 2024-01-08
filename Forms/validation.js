function validateForm(event) {
    // Reset error messages
    event.preventDefault();
    clearErrorMessages();

    // Validate each input field
    if (!validateFullName()) return false;
    if (!validateEmail()) return false;
    if (!validateAddress()) return false;
    if (!validateCity()) return false;
    if (!validateRole()) return false;
   // if (!validateProfilePic()) return false;
    if (!validateSkills()) return false;
    if (!validateGender()) return false;
    if (!validateDOB()) return false;
    if (!validateAge()) return false;
    console.log("function called");

    
    displaySubmittedData();

    //document.getElementById('registrationForm').submit();
    return false;
}

// Helper function to clear error messages
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.textContent = '');
}

// Function to display submitted data
function displaySubmittedData() {
    document.getElementById('submittedName').textContent = document.getElementById('name').value;
    document.getElementById('submittedEmail').textContent = document.getElementById('email').value;
    document.getElementById('submittedAddress').textContent = document.getElementById('address').value;
    document.getElementById('submittedCity').textContent = document.getElementById('city').value;
    
}


function validateFullName() {
    const fullName = document.getElementById('name').value.trim();
    console.log(fullName)
    if (fullName === '') {
        displayErrorMessage('name', 'Full Name is required');
        console.log("it is empty")
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayErrorMessage('email', 'Invalid Email Address');
        return false;
    }
    return true;
}

function validateAddress() {
    const address = document.getElementById('address').value.trim();
    if (address === '') {
        displayErrorMessage('address', 'Street Address 1 is required');
        return false;
    }
    return true;
}

function validateCity() {
    const city = document.getElementById('city').value.trim();
    if (city === '') {
        displayErrorMessage('city', 'Street Address 2 is required');
        return false;
    }
    return true;
}

function validateRole() {
    const stateElement = document.getElementById('role');
    if (!stateElement) {
        console.error('Element with id "role" not found');
        return false;
    }

    const state = stateElement.value;
    if (state === 'PickOne') {
        displayErrorMessage('role', 'Please select a Role');
        return false;
    }
    return true;
}


// function validateProfilePic() {
//     const profilePic = document.getElementById('profilePic').value;
//     if (profilePic === '') {
//         displayErrorMessage('profilePic', 'Please upload a Profile Picture');
//         return false;
//     }
//     return true;
// }

function validateSkills() {
    const htmlCheckbox = document.getElementById('html_news');
    const cssCheckbox = document.getElementById('css_news');
    const jsCheckbox = document.getElementById('js_news');

    if (!htmlCheckbox.checked && !cssCheckbox.checked && !jsCheckbox.checked) {
        displayErrorMessage('html_news', 'Select at least one Skill');
        return false;
    }
    return true;
}

function validateGender() {
    const maleRadio = document.getElementById('html');
    const femaleRadio = document.getElementById('plain_text');

    if (!maleRadio.checked && !femaleRadio.checked) {
        displayErrorMessage('html', 'Select a Gender');
        return false;
    }
    return true;
}

function validateDOB() {
    const dob = document.getElementById('dob').value;
    if (dob === '') {
        displayErrorMessage('dob', 'Date of Birth is required');
        return false;
    }
    return true;
}

function validateAge() {
    const age = document.getElementById('age').value;
    if (age === '' || isNaN(age) || age < 1 || age > 120) {
        displayErrorMessage('age', 'Enter a valid Age between 1 and 120');
        return false;
    }
    return true;
}


function displayErrorMessage(inputId, message) {
    const errorMessageElement = document.getElementById(`${inputId}Error`);
    errorMessageElement.textContent = message;
}
