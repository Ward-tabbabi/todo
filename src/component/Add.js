import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../js/todoSlice/todoSlice";

const Add = () => {
  const [todo, settodo] = useState({
    id: Math.random(),
    name: "",
    description: "",
    isDone: false,
  });
  const dispatch = useDispatch();
  return (
    <div className="add">
      <input
        type="text"
        placeholder="todo name"
        onChange={(e) => settodo({ ...todo, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="todo description"
        onChange={(e) => settodo({ ...todo, description: e.target.value })}
      />
      <button onClick={() => dispatch(addtodo(todo))}>ADD</button>
    </div>
  );
};

export default Add;
