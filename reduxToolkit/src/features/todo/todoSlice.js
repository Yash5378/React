import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 4, text: "yash is papa" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // updateTodo: (state, action) => {
    //   // state.todos = state.todos.map((todo) =>
    //   //   todo.id === action.payload.id ? action.payload : todo
    //   // );
    //   const index = state.todos.findIndex(
    //     (todo) => todo.id === action.payload.id
    //   );
    //   const updateState = [...todos];
    //   return void (updateState[index].name = action.payload.name);
    // },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
