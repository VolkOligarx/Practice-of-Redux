import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allIds: [],
  byIds: {},
  checked: false
};

let nextTodoId = 0;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      nextTodoId += 1;

      state.allIds.push(nextTodoId);

      state.byIds[nextTodoId] = {
        content: action.payload,
        completed: false,
      };
    },
    
    deleteTodo: (state, action) => {
      if (state.allIds.length > 1) {
        state.allIds.splice(state.allIds.indexOf(action.payload), 1);
      }
      else {
        state.allIds = []
      }
    },

    toggleCompleteness: (state, { payload }) => {
      const { id } = payload;

      const targetTodo = state.byIds[id];

      targetTodo.completed = !targetTodo.completed;
    },

    toggleCheck: (state, { payload }) => {
      const { id } = payload;

      const targetTodo = state.byIds[id];

      targetTodo.checked = !targetTodo.checked;
    },

    checkedCompleted: (state) => {
      console.log(state.checked)
      if (state.checked === false) {
        return state.checked === true
      }
      else if (state.checked === true) {
        return state.checked === false
      }
    },
  },
});


export const { addTodo, deleteTodo, toggleCompleteness,toggleCheck, checkedCompleted } = todoSlice.actions;

export default todoSlice.reducer;

