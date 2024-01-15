import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onFormSubmit, validateGender, selectedEmployee }) => {
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

  // Update form data when the selectedEmployee prop changes
  useEffect(() => {
    setFormData(selectedEmployee || {});
  }, [selectedEmployee]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="card" >
            <div className="p-2">
    <form onSubmit={(e) => onFormSubmit(e, formData)} className="form-group">
    
      <div className="fields">
        <div className="input_field">
          <label htmlFor="fullName">Full Name <span className="astric">*</span></label>
          <input type="text" name="fullName" id="fullName" className="form-control" onChange={handleInputChange} value={formData.fullName || ''} />
        </div>
        
        <div className="input_field">
          <label htmlFor="email">E-mail <span className="astric">*</span></label>
          <input type="email" name="email" id="email" className="form-control" onChange={handleInputChange} value={formData.email || ''}/>
        </div>

        <div className="input_field">
          <label htmlFor="dob">DOB <span className="astric">*</span></label>
          <input type="date" name="dob" id="dob" className="form-control" style={{ width: '235px' }} onChange={handleInputChange} value={formData.dob || ''}/>
        </div>

        <div className="input_field">
          <label htmlFor="age">Age <span className="astric">*</span></label>
          <input type="number" name="age" id="age" className="form-control" onChange={handleInputChange} value={formData.age || ''}/>
        </div>

        <div className="input_field">
          <label htmlFor="mobileno">Mobile No.<span className="astric">*</span></label>
          <input type="text" name="mobileno" id="mobileno" className="form-control" onChange={handleInputChange} value={formData.mobileno || ''}/>
        </div>

        <div className="gender flex space-x-1 ml-4">
            <label htmlFor="gender">Gender <span className="astric">*</span></label>
            <input type="radio" name="gender" id="female" value="female" className="form-control ml-1" onChange={handleInputChange} checked={formData.gender === 'female' || ''} />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="male" value="male" className="form-control ml-1" onChange={handleInputChange} checked={formData.gender === 'male' || ''}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="other" value="others" className="form-control ml-1" onChange={handleInputChange} checked={formData.gender === 'others'|| ''} />
            <label htmlFor="other">Others</label>
            <div id="genderError" className="error-message"></div>
            </div>


        <div className="input_field">
          <label htmlFor="empid">Employee ID <span className="astric">*</span></label>
          <input type="text" name="empid" id="empid" className="form-control" onChange={handleInputChange} value={formData.empid || ''}/>
        </div>

        <div className="input_field">
          <label htmlFor="role">Role <span className="astric">*</span></label>
          <input type="text" name="role" id="role" className="form-control" onChange={handleInputChange} value={formData.role || ''}/>
        </div>

        <div className="input_field">
          <label htmlFor="address">Address <span className="astric">*</span></label>
          <textarea name="address" id="address" cols="70" rows="3" onChange={handleInputChange} value={formData.address || '' }></textarea>
        </div>
      </div>

      <div className="form_action--button">
        <input type="submit" id="submit" value="Submit" className="btn btn-success " />
        <input type="reset" id="reset" value="Reset" className="btn btn-warning" />
      </div>
    </form>
    </div>
    </div>
  );
};

export default EmployeeForm;
