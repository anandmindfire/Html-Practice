// const validateFormField = (fieldName, errorMessage) => {
//     const value = formData[fieldName] ? formData[fieldName].trim() : '';
//     const isValid = value !== '';
  
//     setFormErrors((prevErrors) => ({ ...prevErrors, [fieldName]: isValid ? '' : errorMessage }));
  
//     return isValid;
//   };
  
//   const validateEmail = () => {
//     const errorMessage = 'Please enter a valid email!';
//     const emailValue = formData.email?.trim(); // Check if formData.email is defined before calling trim
  
//     const isValid = emailValue && emailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  
//     setFormErrors((prevErrors) => ({ ...prevErrors, email: isValid ? '' : errorMessage }));
  
//     return isValid;
//   };
  
//   const validateMobileNumber = (fieldName, errorMessage) => {
//     const value = formData[fieldName]?.trim() || ''; // Check if formData[fieldName] is defined before calling trim
//     const isValid = value.match(/^[1-9][0-9]{9}$/) || value === '';
  
//     setFormErrors((prevErrors) => ({ ...prevErrors, [fieldName]: isValid ? '' : errorMessage }));
  
//     return isValid;
//   };
  
//   const validateGender = () => {
//     const radioButtons = document.getElementsByName('gender');
//     const checked = Array.from(radioButtons).some((radio) => radio.checked);

//     setFormErrors((prevErrors) => ({
//       ...prevErrors,
//       gender: checked ? '' : 'Please select your gender',
//     }));

//     return checked;
//   };

//   const validateForm = (formData, setFormErrors) => {
//     const errors = {};
  
//     const fullNameValid = validateFormField('fullName', 'Full Name is required');
//     const dobValid = validateFormField('dob', 'Please select your Date of Birth!');
//     const ageValid = validateFormField('age', 'Please select your age');
//     const emailValid = validateEmail();
//     const mobileNoValid = validateMobileNumber('mobileno', "Mobile number must be 10 characters long, and the first digit can't be 0!");
//     const genderValid = validateGender();
//     const empIdValid = validateFormField('empid', 'Employee ID is required');
//     const roleValid = validateFormField('role', 'Role is required');
//     const addressValid = validateFormField('address', 'Please enter your address');
  
//     if (!fullNameValid) errors.fullName = 'Full Name is required';
//     if (!dobValid) errors.dob = 'Please select your Date of Birth!';
//     if (!ageValid) errors.age = 'Please select your age';
//     if (!emailValid) errors.email = 'Please enter a valid email!';
//     if (!mobileNoValid) errors.mobileno = "Mobile number must be 10 characters long, and the first digit can't be 0!";
//     if (!genderValid) errors.gender = 'Please select your gender';
//     if (!empIdValid) errors.empid = 'Employee ID is required';
//     if (!roleValid) errors.role = 'Role is required';
//     if (!addressValid) errors.address = 'Please enter your address';
  
//     setFormErrors(errors);
  
//     return Object.keys(errors).length === 0;
//   };
  