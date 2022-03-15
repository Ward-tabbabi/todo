import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div className="container">
      {todos.map((el) => (
        <div>
          <h4>{el.name}</h4>
          <p>{el.description}</p>
          <span>{el.isDone ? "done" : "not done"}</span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
