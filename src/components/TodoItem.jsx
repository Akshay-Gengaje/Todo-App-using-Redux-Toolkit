import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Button from "./Button";

const TodoItem = ({
  todo,
  isEditing,
  onEdit,
  onDelete,
  onSave,
  onChange,
  editedTask,
}) => {
  console.log(editedTask);
  return (
    <>
      <li className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded-lg shadow-md animate-fadeIn">
        {isEditing ? (
          <input
            type="text"
            value={editedTask}
            onChange={onChange}
            className="flex-1 px-2 py-1 text-sm border rounded-lg"
          />
        ) : (
          <span className="flex-1 text-sm">{todo.text}</span>
        )}
        {isEditing ? (
          <Button
            onClick={onSave}
            className="ml-2 text-white bg-green-500 hover:bg-green-600"
          >
            Save
          </Button>
        ) : (
          <button
            onClick={onEdit}
            className="ml-2 text-blue-500 hover:text-blue-600"
          >
            <FiEdit />
          </button>
        )}
        <button
          onClick={onDelete}
          className="ml-2 text-red-500 hover:text-red-600"
        >
          <FiTrash2 />
        </button>
      </li>
    </>
  );
};

export default TodoItem;
