import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface TodoProps {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: TodoProps[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string }>) => {
      const { text } = action.payload;
      const todo: TodoProps = {
        id: nanoid(),
        text,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: string; completed: boolean }>
    ) => {
      const { id, completed } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].completed = completed;
      }
    },
    loadTodos: (state, action: PayloadAction<{ todos: TodoProps[] }>) => {
      const { todos } = action.payload;
      state.todos = todos;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, loadTodos } = todoSlice.actions;
export default todoSlice.reducer;
