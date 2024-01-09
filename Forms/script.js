var selectedRow = null;
function onFormSubmit(e) {
event.preventDefault();
var formData = readFormData();
if (validateForm(formData)===true) {
if (selectedRow === null) {
    insertNewRecord(formData);
} else {
    updateRecord(formData);
}

resetForm();
}
}
// validate form
function validateForm(formData) {


if (formData.fullName.trim() === '') {
alert('Full Name is required');
return false;
}

if (formData.dob.trim() === '') {
alert("Please select your Date of Birth!");
return false;
}
if (formData.age.trim() === '') {
alert("Please select your age");
return false;
}


if (!formData.email.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && formData.email.trim() === "") {
alert("Please enter a valid email!");
email.focus();
return false;
}
if (!formData.mobileno.match(/^[1-9][0-9]{9}$/) || formData.mobileno.trim()==="") {
alert("mobile number must be 10 characters long number and first digit can't be 0!");
mobileno.focus();
return false;
}

if(!formData.gender.trim()){
    alert('Please select a gender');
    return false;
}

if (formData.empid.trim() === '') {
    alert('employee id is required');
    return false;
    }
    if (formData.role.trim() === '') {
        alert('Role is required');
        return false;
        }

if (formData.address.trim() === '') {
alert("Please enter your address");
return false;
}

return true;
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
    cell6.innerHTML = `<a href="#" onClick='onEdit(this)' class='btn-success'>Edit</a>
                <a href="#" onClick='onDelete(this)' class='btn-danger'>Delete</a>`;

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

}
// delete form record
function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('studentList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//  for adding color changes
document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to each color option
    document.getElementById('dark').addEventListener('click', function () {
        document.body.style.backgroundColor = '#31304D';
        document.getElementById('submit').style.backgroundColor='#31304D';
        document.getElementById('reset').style.backgroundColor='#31304D';
        document.getElementById('dropbtn').style.backgroundColor='#31304D';
        document.getElementById('dropcontent').style.backgroundColor='#31304D';
    });

    document.getElementById('light').addEventListener('click', function () {
        document.body.style.backgroundColor = '#86B6F6';
        document.getElementById('submit').style.backgroundColor='#86B6F6';
        document.getElementById('reset').style.backgroundColor='#86B6F6';
        document.getElementById('dropbtn').style.backgroundColor='#86B6F6';
        document.getElementById('dropcontent').style.backgroundColor='#86B6F6';
    });

    document.getElementById('sunny').addEventListener('click', function () {
        document.body.style.backgroundColor = '#FFB534';
        document.getElementById('submit').style.backgroundColor='#FFB534';
        document.getElementById('reset').style.backgroundColor='#FFB534';
        document.getElementById('dropbtn').style.backgroundColor='#FFB534';
        document.getElementById('dropcontent').style.backgroundColor='#FFB534';
    });
});