import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import EmployeeForm from './EmployeeForm';
import EmployeeListTable from './EmployeeTable';

const HomePage = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    age: '',
    mobileno: '',
    gender: '',
    empid: '',
    role: '',
    address: '',
  });
  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('employeeData')) || [];
    setEmployeeList(storedData);
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('employeeData', JSON.stringify(data));
  };

  const onFormSubmit = (event, formData) => {
    event.preventDefault();

    if (selectedEmployeeIndex !== null) {
      // Update existing employee
      const updatedEmployeeList = [...employeeList];
      updatedEmployeeList[selectedEmployeeIndex] = formData;
      setEmployeeList(updatedEmployeeList);
      setSelectedEmployeeIndex(null);
    } else {
      // Add new employee
      setEmployeeList([...employeeList, formData]);
    }

    // Save data to local storage
    saveToLocalStorage([...employeeList, formData]);
  };

  const onEdit = (index) => {
    console.log('onEdit clicked:', index);
    const selectedEmployee = employeeList[index];
    console.log('Selected Employee:', selectedEmployee);
  
    const updatedFormData = {
      fullName: selectedEmployee.fullName || '',
      email: selectedEmployee.email || '',
      dob: selectedEmployee.dob || '',
      age: selectedEmployee.age || '',
      mobileno: selectedEmployee.mobileno || '',
      gender: selectedEmployee.gender || '',
      empid: selectedEmployee.empid || '',
      role: selectedEmployee.role || '',
      address: selectedEmployee.address || '',
    };
    console.log('Updated Form Data:', updatedFormData);
  
    // Log the current state before updating
    console.log('Current Form Data State:', formData);
  
    // Set the form data in the EmployeeForm component
    setSelectedEmployeeIndex(index);
    setFormData(updatedFormData);
  
    // Log the state after updating
    console.log('Updated Form Data State:', formData);
  };
  
  const onDelete = (index) => {
    // Show confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to delete this employee data?");
    
    // If the user confirms, proceed with deletion
    if (isConfirmed) {
      const updatedEmployeeList = [...employeeList];
      updatedEmployeeList.splice(index, 1);
      setEmployeeList(updatedEmployeeList);

      toast.error('❌ Data deleted sucessfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
      // Save data to local storage
      saveToLocalStorage(updatedEmployeeList);
    }
  };
  

  const validateGender = (input) => {
    // Validate gender
    // ...
  };

  return (
    <div className="App">
      <Navbar />
      <div className="d-flex">
      <EmployeeForm
        onFormSubmit={onFormSubmit}
        validateGender={validateGender}
        selectedEmployee={employeeList[selectedEmployeeIndex]}
        />

        <EmployeeListTable
          employeeList={employeeList}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};

export default HomePage;
