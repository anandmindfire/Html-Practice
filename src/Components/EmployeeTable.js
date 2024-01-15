import React from 'react';

const EmployeeListTable = ({ employeeList, onEdit, onDelete }) => {
  return (
    <div className="card-emplist">
      <div className="bg-primary p-2">
        <table className="list" id="employeelist">
          <thead>
            <tr>
              <th></th>
              <th>Full Name</th>
              <th>DOB</th>
              <th>Age</th>
              <th>E-mail</th>
              <th>Mobile No</th>
              <th>Gender</th>
              <th>Employee ID</th>
              <th>Role</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody className="text-light">
            {employeeList.map((employee, index) => (
              <tr key={index}>
                <td>
                  <button onClick={() => onEdit(index)}>🖊️</button>
                  <button onClick={() => onDelete(index)}>❌</button>
                </td>
                <td>{employee.fullName}</td>
                <td>{employee.dob}</td>
                <td>{employee.age}</td>
                <td>{employee.email}</td>
                <td>{employee.mobileno}</td>
                <td>{employee.gender}</td>
                <td>{employee.empid}</td>
                <td>{employee.role}</td>
                <td>{employee.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeListTable;
