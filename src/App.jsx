import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  updateTodo,
  removeTodo,
} from "./redux/features/todo/todoSlice";
import Input from "./components/Input";
import Button from "./components/Button";
import TodoItem from "./components/TodoItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (newTask.trim() === "") {
      toast.error("Task cannot be empty!", { position: "top-right" });
      return;
    }
    dispatch(addTodo(newTask));
    setNewTask("");
    toast.success("Task added successfully!", { position: "top-right" });
  };

  const handleUpdate = (id) => {
    if (editedTask.trim() === "") {
      toast.error("Updated task cannot be empty!", { position: "top-right" });
      return;
    }
    dispatch(updateTodo({ id, text: editedTask }));
    setEditingId(null);
    setEditedTask("");
    toast.success("Task updated successfully!", { position: "top-right" });
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
    toast.info("Task deleted successfully!", { position: "top-right" });
  };

  return (
    <div className="bg-gray-500 min-h-screen flex items-center justify-center">
      <div className="max-w-md p-4 mx-auto bg-white rounded-lg shadow-2xl mt-10">
        <h1 className="mb-4 text-2xl font-bold text-center text-blue-600">
          Todo App
        </h1>
        <div className="flex items-center mb-4">
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
          />
          <Button
            onClick={handleAddTodo}
            className="ml-2 text-white bg-blue-500 hover:bg-blue-600"
          >
            Add
          </Button>
        </div>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              editedTask={editedTask}
              todo={todo}
              isEditing={editingId === todo.id}
              onEdit={() => {
                setEditingId(todo.id);
                setEditedTask(todo.text);
              }}
              onDelete={() => handleDelete(todo.id)}
              onSave={() => handleUpdate(todo.id)}
              onChange={(e) => setEditedTask(e.target.value)}
            />
          ))}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
