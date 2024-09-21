import React, { useState } from 'react';
import { toast } from 'react-toastify';

const EditableCell = ({ value, onDoubleClick, onBlur, onInput }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
    onDoubleClick();
  };

  const handleBlur = () => {
    setIsEditing(false);

    onBlur();
    toast.success(`✔️ Updated successfully!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleInput = (e) => {
    onInput(e.currentTarget.textContent);
  };

  return (
    <td
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      onInput={handleInput}
    >
      {value}
    </td>
  );
};

export default EditableCell;
