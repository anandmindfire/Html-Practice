var selectedRow = null;

loadTableData();

function onFormSubmit(e) {
    e.preventDefault();
    var formData = readFormData();
    if (validateForm(formData)===true) {
    if (selectedRow === null) {
        insertNewRecord(formData);
        showToast("Data Added Sucessfully!","success",5000);
    } else {
        updateRecord(formData);
        showToast("Details Updated Successfully!","info",5000); 
    }
    
    resetForm();
    saveTableData();
}
}


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

    
    var resetButton = document.getElementById('submit');
        resetButton.value = 'Submit';

}
// delete form record
function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('employeelist').deleteRow(row.rowIndex);
        showToast("Data Deleted Successfully","danger",5000);
        resetForm();
       saveTableData();
    }
}


function loadTableData() {
    // Retrieve data from local storage
    var storedData = JSON.parse(localStorage.getItem('employeeData')) || [];

    
    storedData.forEach(function (data) {
        insertNewRecord(data);
    });
}

function saveTableData() {
    
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

    //notification


    // Save the data to local storage
    localStorage.setItem('employeeData', JSON.stringify(dataToStore));
}

function onEditit(td, columnIndex) {
    
    selectedRow = td.parentElement;

    var cell = selectedRow.cells[columnIndex];
    var oldValue = cell.innerHTML;

    var input = document.createElement('input');
    
    input.value = oldValue;

    input.addEventListener('blur', function () {
        updateCellValue(cell, input.value);
    });

    
    cell.innerHTML = '';
    cell.appendChild(input);

    input.focus();
}

function updateCellValue(cell, newValue) {
    
    cell.innerHTML = newValue;
    showToast("Details Updated Successfully","info",5000); 
}



