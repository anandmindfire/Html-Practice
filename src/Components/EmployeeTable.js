import React from 'react';
import EditableCell from './EditableCell';
// import { toast } from 'react-toastify';

const EmployeeListTable = ({ employeeList, onEdit, onDelete }) => {
  const fieldOrder = ['fullName', 'email', 'mobileno', 'address', 'dob', 'age', 'gender', 'empid', 'role'];

  const handleEdit = (index, field, updatedValue) => {
    const updatedEmployeeList = [...employeeList];

    if (updatedEmployeeList[index]) {
      updatedEmployeeList[index][field] = updatedValue;

      localStorage.setItem('employeeData', JSON.stringify(updatedEmployeeList));
    } else {
      console.error(`Array at index ${index} is undefined.`);
    }
  };

  return (
    <div className="card-emplist">
      <div className="bg-primary relative max-w-900 w-full rounded-6 p-3">
        <table className="list" id="employeelist">
          <thead>
            <tr>
              <th></th>
              {fieldOrder.map((field) => (
                <th key={field}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-light shadow-xl">
            {employeeList.map((employee, index) => (
              <tr key={index}>
                <td>
                  <button className="shadow-xl rounded-lg" onClick={() => onEdit(index)}>🖊️</button>
                  <button className="shadow-xl rounded-lg" onClick={() => onDelete(index)}>❌</button>
                </td>
                {fieldOrder.map((field) => (
                  <EditableCell
                    key={field}
                    value={employee[field]}
                    onDoubleClick={() => handleEdit(index, field, employee[field])}
                    onBlur={() => console.log('Blurred')}
                    onInput={(newValue) => handleEdit(index, field, newValue)}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeListTable;
