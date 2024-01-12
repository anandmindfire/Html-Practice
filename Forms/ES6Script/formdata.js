let selectedRow = null;

loadTableData();

const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = readFormData();
    if (validateForm(formData)) {
        if (selectedRow === null) {
            insertNewRecord(formData);
            showToast("Data Added Successfully!", "success", 5000);
        } else {
            updateRecord(formData);
            showToast("Details Updated Successfully!", "info", 5000);
        }

        resetForm();
        saveTableData();
    }
};

const readFormData = () => {
    const formData = {
        fullName: document.getElementById("fullName").value,
        dob: document.getElementById("dob").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        mobileno: document.getElementById("mobileno").value,
        gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '',
        empid: document.getElementById("empid").value,
        role: document.getElementById("role").value,
        address: document.getElementById("address").value,
    };

    return formData;
};

const insertNewRecord = (data) => {
    const table = document.getElementById("employeelist").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.length);

    newRow.insertCell(0).innerHTML = `<a href="#" onClick='onEdit(this)' class='btn-success'>🖊️</a>
                <a href="#" onClick='onDelete(this)' class='btn-danger'>❌</a>`;

    for (let i = 1; i <= 9; i++) {
        newRow.insertCell(i).innerHTML = data[Object.keys(data)[i - 1]];
        newRow.cells[i].ondblclick = function () {
            onEditit(this, i);
        };
    }
};

const resetForm = () => {
    const formElements = ['fullName', 'dob', 'age', 'email', 'mobileno', 'empid', 'role', 'address'];

    formElements.forEach((element) => {
        document.getElementById(element).value = '';
    });

    const radioButtons = document.getElementsByName('gender');
    radioButtons.forEach((button) => {
        button.checked = false;
    });

    selectedRow = null;
};

const onEdit = (td) => {
    selectedRow = td.parentElement.parentElement;

    const formElements = ['fullName', 'dob', 'age', 'email', 'mobileno', 'empid', 'role', 'address'];

    formElements.forEach((element, index) => {
        document.getElementById(element).value = selectedRow.cells[index + 1].innerHTML;
    });

    const genderValue = selectedRow.cells[6].innerHTML;
    const radioButtons = document.getElementsByName('gender');
    radioButtons.forEach((button) => {
        if (button.value === genderValue) {
            button.checked = true;
        }
    });

    const resetButton = document.getElementById('submit');
    resetButton.value = 'Update';
};

const updateRecord = (formData) => {
    for (let i = 1; i <= 9; i++) {
        selectedRow.cells[i].innerHTML = formData[Object.keys(formData)[i - 1]];
    }

    const resetButton = document.getElementById('submit');
    resetButton.value = 'Submit';
};

const onDelete = (td) => {
    if (confirm('Are you sure you want to delete this record?')) {
        const row = td.parentElement.parentElement;
        document.getElementById('employeelist').deleteRow(row.rowIndex);
        showToast("Data Deleted Successfully", "danger", 5000);
        resetForm();
        saveTableData();
    }
};

const loadTableData = () => {
    const storedData = JSON.parse(localStorage.getItem('employeeData')) || [];

    storedData.forEach((data) => {
        insertNewRecord(data);
    });
};

const saveTableData = () => {
    const tableRows = document.getElementById('employeelist').getElementsByTagName('tbody')[0].rows;
    const dataToStore = [];

    for (let i = 0; i < tableRows.length; i++) {
        const rowData = {
            fullName: tableRows[i].cells[1].innerHTML,
            dob: tableRows[i].cells[2].innerHTML,
            age: tableRows[i].cells[3].innerHTML,
            email: tableRows[i].cells[4].innerHTML,
            mobileno: tableRows[i].cells[5].innerHTML,
            gender: tableRows[i].cells[6].innerHTML,
            empid: tableRows[i].cells[7].innerHTML,
            role: tableRows[i].cells[8].innerHTML,
            address: tableRows[i].cells[9].innerHTML,
        };

        dataToStore.push(rowData);
    }

    localStorage.setItem('employeeData', JSON.stringify(dataToStore));
};


