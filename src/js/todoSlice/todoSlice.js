import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      name: "learn",
      description: "read document about redux toolkit",
      isDone: "false",
    },
    {
      id: 2,
      name: "eat",
      description: "eat something",
      isDone: "false",
    },
  ],
};

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addtodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount, addtodo } = todoSlice.actions;

export default todoSlice.reducer;
