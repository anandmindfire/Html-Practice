import React, { useState, useEffect ,useCallback } from 'react';
import { toast } from 'react-toastify';
const EmployeeForm = ({ onFormSubmit, selectedEmployee }) => {
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

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setFormData(selectedEmployee || {});
  }, [selectedEmployee]);

  const validateFormField = (fieldName, errorMessage) => {
    const value = formData[fieldName] ? formData[fieldName].trim() : '';
    const isValid = value !== '';
  
    setFormErrors((prevErrors) => ({ ...prevErrors, [fieldName]: isValid ? '' : errorMessage }));
  
    return isValid;
  };
  
  const validateEmail = () => {
    const errorMessage = 'Please enter a valid email!';
    const emailValue = formData.email?.trim(); // Check if formData.email is defined before calling trim
  
    const isValid = emailValue && emailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  
    setFormErrors((prevErrors) => ({ ...prevErrors, email: isValid ? '' : errorMessage }));
  
    return isValid;
  };
  
  
  
  const validateMobileNumber = (fieldName, errorMessage) => {
    const value = formData[fieldName]?.trim() || ''; // Check if formData[fieldName] is defined before calling trim
    const isValid = value.match(/^[1-9][0-9]{9}$/) || value === '';
  
    setFormErrors((prevErrors) => ({ ...prevErrors, [fieldName]: isValid ? '' : errorMessage }));
  
    return isValid;
  };
  
  

  const validateGender = () => {
    const radioButtons = document.getElementsByName('gender');
    const checked = Array.from(radioButtons).some((radio) => radio.checked);

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      gender: checked ? '' : 'Please select your gender',
    }));

    return checked;
  };

  const validateForm = () => {
    const errors = {};
  
    const fullNameValid = validateFormField('fullName', 'Full Name is required');
    const dobValid = validateFormField('dob', 'Please select your Date of Birth!');
    const ageValid = validateFormField('age', 'Please select your age');
    const emailValid = validateEmail();
    const mobileNoValid = validateMobileNumber('mobileno', "Mobile number must be 10 characters long, and the first digit can't be 0!");
    const genderValid = validateGender();
    const empIdValid = validateFormField('empid', 'Employee ID is required');
    const roleValid = validateFormField('role', 'Role is required');
    const addressValid = validateFormField('address', 'Please enter your address');
  
    if (!fullNameValid) errors.fullName = 'Full Name is required';
    if (!dobValid) errors.dob = 'Please select your Date of Birth!';
    if (!ageValid) errors.age = 'Please select your age';
    if (!emailValid) errors.email = 'Please enter a valid email!';
    if (!mobileNoValid) errors.mobileno = "Mobile number must be 10 characters long, and the first digit can't be 0!";
    if (!genderValid) errors.gender = 'Please select your gender';
    if (!empIdValid) errors.empid = 'Employee ID is required';
    if (!roleValid) errors.role = 'Role is required';
    if (!addressValid) errors.address = 'Please enter your address';
  
    setFormErrors(errors);
  
    return Object.keys(errors).length === 0;
  };
  

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  }, []);

  const handleReset = () => {
    setFormErrors({});
    setFormData({});
    toast.warning(`Form reseted successfully!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onFormSubmit(e, formData);
      setFormData({});
    }
  };
  
  return (
    <div className="card" >
            <div className="p-2" id='cardarea'>
    <form onSubmit={handleSubmit} className="form-group">
    
      <div className="fields">
        <div className="input_field">
          <label htmlFor="fullName">Full Name <span className="astric">*</span></label>
          <input type="text" name="fullName" id="fullName" className="form-control" onChange={handleInputChange} value={formData.fullName || ''} />
          <div className="error-message">{formErrors.fullName}</div>
        </div>
        
        <div className="input_field">
          <label htmlFor="email">E-mail <span className="astric">*</span></label>
          <input type="text" name="email" id="email" className="form-control" onChange={handleInputChange} value={formData.email || ''}/>
          <div className="error-message">{formErrors.email}</div>
        </div>

        <div className="input_field">
          <label htmlFor="dob">DOB <span className="astric">*</span></label>
          <input type="date" name="dob" id="dob" className="form-control" onChange={handleInputChange} value={formData.dob || ''}/>
          <div className="error-message">{formErrors.dob}</div>
        </div>

        <div className="input_field">
          <label htmlFor="age">Age <span className="astric">*</span></label>
          <input type="number" name="age" id="age" className="form-control" onChange={handleInputChange} value={formData.age || ''}/>
          <div className="error-message">{formErrors.age}</div>
        </div>

        <div className="input_field">
          <label htmlFor="mobileno">Mobile No.<span className="astric">*</span></label>
          <input type="text" name="mobileno" id="mobileno" className="form-control" onChange={handleInputChange} value={formData.mobileno || ''}/>
          <div className="error-message">{formErrors.mobileno}</div>
        </div>

        <div className="gender space-x-1 ml-4">
            <label htmlFor="gender">Gender <span className="astric">*</span></label>
            <div className="flex">
            <input type="radio" name="gender" id="female" value="female" className="form-control ml-1" onChange={handleInputChange} checked={formData.gender === 'female' || ''} />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="male" value="male" className="form-control ml-1" onChange={handleInputChange} checked={formData.gender === 'male' || ''}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="other" value="others" className="form-control ml-1" onChange={handleInputChange} checked={formData.gender === 'others'|| ''} />
            <label htmlFor="other">Others</label>
            </div>
            <div className="error-message">{formErrors.gender}</div>
            </div>


        <div className="input_field">
          <label htmlFor="empid">Employee ID <span className="astric">*</span></label>
          <input type="text" name="empid" id="empid" className="form-control" onChange={handleInputChange} value={formData.empid || ''}/>
          <div className="error-message">{formErrors.empid}</div>
        </div>

        <div className="input_field">
          <label htmlFor="role">Role <span className="astric">*</span></label>
          <input type="text" name="role" id="role" className="form-control" onChange={handleInputChange} value={formData.role || ''}/>
          <div className="error-message">{formErrors.role}</div>
        </div>

        <div className="input_field">
          <label htmlFor="address" style={{width:"300px"}}>Address <span className="astric">*</span></label>
          <textarea name="address" id="address" cols="130" rows="3" onChange={handleInputChange} value={formData.address || '' }></textarea>
          <div className="error-message">{formErrors.address}</div>
        </div>
      </div>

      <div className="form_action--button">
        <input type="submit" id="submit" value="Submit" className="btn btn-success " />
        <input onClick={handleReset} type="reset" id="reset" value="Reset" className="btn btn-warning" />
      </div>
    </form>
    </div>
    </div>
  );
};

export default EmployeeForm;
