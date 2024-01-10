var selectedRow = null;

loadTableData();

function onFormSubmit(e) {
    e.preventDefault();
    var formData = readFormData();
    if (validateForm(formData)===true) {
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }

    resetForm();
    saveTableData();
}
}

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
        }
        errorMessageElement.textContent = errorMessage;
    } else if (errorMessageElement && errorMessageElement.classList.contains('error-message')) {
        errorMessageElement.remove();
    }
}

// read data from the form
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["age"] = document.getElementById("age").value;
    formData["email"] = document.getElementById("email").value;
    formData["mobileno"] = document.getElementById("mobileno").value;
    formData["gender"] = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    formData["empid"] = document.getElementById("empid").value;
    formData["role"] = document.getElementById("role").value;
    formData["address"] = document.getElementById("address").value;


    return formData;
}

// insert new data to the table
function insertNewRecord(data) {
    var table = document.getElementById("employeelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell6 = newRow.insertCell(0);
    cell6.innerHTML = `<a href="#" onClick='onEdit(this)' class='btn-success'>🖊️</a>
                <a href="#" onClick='onDelete(this)' class='btn-danger'>❌</a>`;

    var cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.dob;
    var cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.age;
    var cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.email;
    var cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.mobileno;
    
    var cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.gender;
    var cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.empid;
    var cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.role;
    var cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.address;

    for (let i = 0; i < newRow.cells.length; i++) {
        newRow.cells[i].ondblclick = function () {
            onEditit(this, i);
        };
    }
    
}

// reset form
function resetForm() {
    document.getElementById('fullName').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobileno').value = '';
    var radioButtons = document.getElementsByName('gender');
    for (var i = 0; i < radioButtons.length; i++) {
     radioButtons[i].checked = false;
}
document.getElementById('empid').value = '';
document.getElementById('role').value = '';
   document.getElementById('address').value = '';
   
    selectedRow = null;
}


// edit form
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('dob').value = selectedRow.cells[2].innerHTML;
    document.getElementById('age').value = selectedRow.cells[3].innerHTML;
    document.getElementById('email').value = selectedRow.cells[4].innerHTML;
    document.getElementById('mobileno').value = selectedRow.cells[5].innerHTML;
    var genderValue = selectedRow.cells[6].innerHTML;
var radioButtons = document.getElementsByName('gender');
for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].value === genderValue) {
        radioButtons[i].checked = true;
    }
}

    document.getElementById('empid').value = selectedRow.cells[7].innerHTML;
    document.getElementById('role').value = selectedRow.cells[8].innerHTML;
    document.getElementById('address').value = selectedRow.cells[9].innerHTML;

    var resetButton = document.getElementById('submit');
    resetButton.value = 'Update';

}
// update form record
function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.dob;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.email;
    selectedRow.cells[5].innerHTML = formData.mobileno;
    selectedRow.cells[6].innerHTML = formData.gender;
    selectedRow.cells[7].innerHTML = formData.empid;
    selectedRow.cells[8].innerHTML = formData.role;
    selectedRow.cells[9].innerHTML = formData.address;

    alert("Update SucessFully")
    var resetButton = document.getElementById('submit');
        resetButton.value = 'Submit';

}
// delete form record
function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('employeelist').deleteRow(row.rowIndex);
        resetForm();
        saveTableData();
    }
}

//  for adding themes colours
document.addEventListener('DOMContentLoaded', function () {
    //click event listener
    document.getElementById('dark').addEventListener('click', function () {
        document.body.style.backgroundColor = '#31304D';
        document.getElementById('submit').style.backgroundColor='#31304D';
        document.getElementById('reset').style.backgroundColor='#31304D';
        document.getElementById('dropbtn').style.backgroundColor='#31304D';
        document.getElementById('dropbtn').style.borderColor='#31304D';
        document.getElementById('dropcontent').style.backgroundColor='#31304D';
        document.getElementById('head').style.color='#31304D';
    
        
        var listTables = document.querySelectorAll('table.list thead>tr');
        listTables.forEach(function (headerRow) {
            headerRow.style.backgroundColor = '#B6BBC4';
        });
        saveTableData();
        
    });

    document.getElementById('light').addEventListener('click', function () {
        document.body.style.backgroundColor = '#86B6F6';
        document.getElementById('submit').style.backgroundColor='#86B6F6';
        document.getElementById('reset').style.backgroundColor='#86B6F6';
        document.getElementById('dropbtn').style.backgroundColor='#86B6F6';
        document.getElementById('dropbtn').style.borderColor='#86B6F6';
        document.getElementById('dropcontent').style.backgroundColor='#86B6F6';
        document.getElementById('head').style.color='#3468C0';

    
        var listTables = document.querySelectorAll('table.list thead>tr');
        listTables.forEach(function (headerRow) {
            headerRow.style.backgroundColor = '#A1EEBD';
        });

        saveTableData();
    });

    document.getElementById('sunny').addEventListener('click', function () {
        document.body.style.backgroundColor = '#FFB534';
        document.getElementById('submit').style.backgroundColor='#FFB534';
        document.getElementById('reset').style.backgroundColor='#FFB534';
        document.getElementById('dropbtn').style.backgroundColor='#FFB534';
        document.getElementById('dropbtn').style.borderColor='#FFB534';
        document.getElementById('dropcontent').style.backgroundColor='#FFB534';
        document.getElementById('head').style.color='#E36414';

    
        var listTables = document.querySelectorAll('table.list thead>tr');
        listTables.forEach(function (headerRow) {
            headerRow.style.backgroundColor = '#FFF78A';
        });
        saveTableData();
    });
});

function loadTableData() {
    // Retrieve data from local storage
    var storedData = JSON.parse(localStorage.getItem('employeeData')) || [];

    // Loop through the stored data and insert into the table
    storedData.forEach(function (data) {
        insertNewRecord(data);
    });
}

function saveTableData() {
    // Get all table rows and store the data in an array
    var tableRows = document.getElementById('employeelist').getElementsByTagName('tbody')[0].rows;
    var dataToStore = [];

    for (var i = 0; i < tableRows.length; i++) {
        var rowData = {
            fullName: tableRows[i].cells[1].innerHTML,
            dob: tableRows[i].cells[2].innerHTML,
            age: tableRows[i].cells[3].innerHTML,
            email: tableRows[i].cells[4].innerHTML,
            mobileno: tableRows[i].cells[5].innerHTML,
            gender: tableRows[i].cells[6].innerHTML,
            empid: tableRows[i].cells[7].innerHTML,
            role: tableRows[i].cells[8].innerHTML,
            address: tableRows[i].cells[9].innerHTML
        };

        dataToStore.push(rowData);
    }

    // Save the data to local storage
    localStorage.setItem('employeeData', JSON.stringify(dataToStore));
}

function onEditit(td, columnIndex) {
    
    selectedRow = td.parentElement;

    var cell = selectedRow.cells[columnIndex];
    var oldValue = cell.innerHTML;

    var input = document.createElement('input');
    // input.type = 'text';
    input.value = oldValue;

    // Add an onblur event to save the changes when the user clicks outside the input
    input.addEventListener('blur', function () {
        updateCellValue(cell, input.value);
    });

    // Replace the cell content with the input element
    cell.innerHTML = '';
    cell.appendChild(input);

    // Focus on the input element to allow immediate editing
    input.focus();
}

function updateCellValue(cell, newValue) {
    // Update the cell value
    cell.innerHTML = newValue;
}