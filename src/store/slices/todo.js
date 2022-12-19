import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  allIds: [],
  byIds: {},
  completed: false,
  uncompleted: false,
  filters: []
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

    filterCompleted: (state, {payload}) => {
      console.log('filterCompleted change state', payload);
      console.log('filters change state', state.filters);
      switch(payload) {
      case 'completed': state.completed = true;
      break;
      case 'filterUncompleted' : state.uncompleted = !state.uncompleted;
      break;
    }

    
  },

  setFilter: (state, {payload}) => {
    switch(payload) {
    case 'doneItems': 
    state.filters.push('doneItems');
    break;
    case 'inProgressItems' : 
    state.filters.push('inProgressItems');
    break;
  }},

  clearFilter: (state, {payload}) => {
    switch(payload) {
      case 'doneItems': 
      state.filters = state.filters.filter((filterItem) => filterItem !== 'doneItems');
      break;
      
      case 'inProgressItems' : 
      state.filters = state.filters.filter((filterItem) => filterItem === 'inProgressItems')
      break;
    }},

    clearAllFilters: (state) => {
      state.filters = [];
    }
}});


export const { addTodo, deleteTodo, toggleCompleteness,toggleCheck, filterCompleted, setFilter, clearFilter, clearAllFilters } = todoSlice.actions;

export default todoSlice.reducer;

