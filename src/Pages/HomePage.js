import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../Components/Navbar/Navbar';
import EmployeeForm from '../Components/EmployeeForm/EmployeeForm';
import EmployeeListTable from '../Components/EmployeeTable/EmployeeTable';

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
      
      toast.info('✔️ Data updated sucessfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
      // Save data to local storage using the updated state
      saveToLocalStorage(updatedEmployeeList);
    } else {
      // Add new employee
      const newEmployeeList = [...employeeList, formData];
      setEmployeeList(newEmployeeList);
      
      toast.success('✔️ Data added sucessfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
      // Save data to local storage using the updated state
      saveToLocalStorage(newEmployeeList);
    }
  };
  
  const onEdit = (index) => {
    //console.log('onEdit clicked:', index);
    const selectedEmployee = employeeList[index];
    //console.log('Selected Employee:', selectedEmployee);
  
    // Use the functional form of setFormData to get the current state
    setFormData((prevFormData) => ({
      ...prevFormData,
      fullName: selectedEmployee.fullName || '',
      email: selectedEmployee.email || '',
      dob: selectedEmployee.dob || '',
      age: selectedEmployee.age || '',
      mobileno: selectedEmployee.mobileno || '',
      gender: selectedEmployee.gender || '',
      empid: selectedEmployee.empid || '',
      role: selectedEmployee.role || '',
      address: selectedEmployee.address || '',
    }));
    
   
    // Log the current state after updating
   // console.log('Updated Form Data State:', formData);
  
    // Set the selected index
    setSelectedEmployeeIndex(index);
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
  
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex">
      <EmployeeForm
        onFormSubmit={onFormSubmit}
        
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
