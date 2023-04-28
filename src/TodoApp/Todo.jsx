import { useState } from "react";
import React from "react";
import "../Todo App/Todo.css";
import HomeButton from "../HomeButton";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [newtodo, setNewTodo] = useState("");

  const handleonChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (newtodo.trim() != "") {
      setTodo([...todo, { text: newtodo, complete: false }]);
      setNewTodo("");
    }
  };
  const handleDeleteTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };
  const handleToggleTodo = (index) => {
    setTodo(
      todo.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="TodoApp">
      <h1>Todo Application</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Add your tasks"
          value={newtodo}
          onChange={handleonChange}
        />
        <button type="submit">Add</button>
      </form>
      <h3>Added tasks go here</h3>
      <ul>
        {todo.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: !todo.completed ? "none" : "line-through",
            }}
          >
            {todo.text}
            <div className="todo_actions">
              <button
                onClick={() => handleToggleTodo(index)}
                style={{
                  background: !todo.completed ? "red" : "green",
                }}
                className="todo-toggle"
              >
                {!todo.completed ? "Not Completed" : "Completed"}
              </button>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <HomeButton />
    </div>
  );
};

export default Todo;
