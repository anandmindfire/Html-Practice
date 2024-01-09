var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (validateForm(formData)) {
        if (selectedRow === null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }
        resetForm();
    }
}

function validateForm(formData) {
    var isValid = true;

    
    if (formData.fullName.trim() === '') {
        alert('Full Name is required');
        isValid = false;
    }

    if (!formData.email.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && formData.email.trim() === "") {
        alert("Please enter a valid email!");
        email.focus();
        isValid=false;
    }
    if (!formData.mnumber.trim().match(/^[1-9][0-9]{9}$/)) {
        alert("mobile number must be 10 characters long number and first digit can't be 0!");
        mnumber.focus();
        isValid= false;
      }

      if (formData.city.trim() === '') {
        alert('Address is required');
        isValid = false;
    }
    if (formData.age.trim() === '') {
        alert('Age is required');
        isValid = false;
    }
    if (formData.dob.trim() === '') {
        alert('dob is required');
        isValid = false;
    }
    if (formData.role.trim() === '') {
        alert('Role is required');
        isValid = false;
    }
    if(!formData.gender.trim()){
        alert('Please select a gender');
        isValid = false;
    }
    var selectedFile = document.getElementById('actual-btn').files[0];
    if (!selectedFile) {
        alert('Please choose a file');
        isValid = false;
    }

    
    return isValid;
}

// Read operation using this function
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["mnumber"] = document.getElementById("mnumber").value;
    formData["city"] = document.getElementById("city").value;
    formData["age"] = document.getElementById("age").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["role"] = document.getElementById("role").value;
    formData["gender"] = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    formData["file"] = document.getElementById('actual-btn').files[0];

    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mnumber;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a href="#" onClick='onEdit(this)' class='btn-success'>🖊️</a>
                <a href="#" onClick='onDelete(this)' class='btn-danger'>✂</a>`;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.age;
    var cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.dob;
    var cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.role;
    var cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.gender;
    var cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.file ? data.file.name : '';

    
    resetFileInput();
}

// To Reset the data of fill input
function resetForm() {
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mnumber').value = '';
    document.getElementById('city').value = '';
    document.getElementById('age').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('role').value = '';

    // Reset radio buttons
    var radioButtons = document.getElementsByName('gender');
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }

    
    resetFileInput();

    selectedRow = null;
}

// For Edit operation
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('email').value = selectedRow.cells[1].innerHTML;
    document.getElementById('mnumber').value = selectedRow.cells[2].innerHTML;
    document.getElementById('city').value = selectedRow.cells[3].innerHTML;
    document.getElementById('age').value = selectedRow.cells[5].innerHTML;
    document.getElementById('dob').value = selectedRow.cells[6].innerHTML;
    document.getElementById('role').value = selectedRow.cells[7].innerHTML;

    
    var genderValue = selectedRow.cells[8].innerHTML;
    var radioButtons = document.getElementsByName('gender');
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].value === genderValue) {
            radioButtons[i].checked = true;
        }
    }

    
    document.getElementById('actual-btn').value = '';

    
    fileChosen.textContent = selectedRow.cells[9].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.mnumber;
    selectedRow.cells[3].innerHTML = formData.city;
    selectedRow.cells[5].innerHTML = formData.age;
    selectedRow.cells[6].innerHTML = formData.dob;
    selectedRow.cells[7].innerHTML = formData.role;
    selectedRow.cells[8].innerHTML = formData.gender;
    selectedRow.cells[9].innerHTML = formData.file ? formData.file.name : '';
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

const actualBtn = document.getElementById('actual-btn');
const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function () {
    fileChosen.textContent = this.files[0] ? this.files[0].name : 'Upload Profile Pic';
});


function resetFileInput() {
    actualBtn.value = ''; 
    fileChosen.textContent = 'Upload Profile Pic'; 
}
