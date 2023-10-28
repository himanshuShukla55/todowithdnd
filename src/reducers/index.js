import {
  ADD_ACTIVE_TODO,
  ADD_COMPLETED_TODO,
  DELETE_ACTIVE_TODO,
  DELETE_COMPLETED_TODO,
} from "./actionTypes";

export const activeTodoReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_ACTIVE_TODO:
      return [...state, payload];
    case DELETE_ACTIVE_TODO:
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};

export const completedTodosReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_COMPLETED_TODO:
      return [...state, payload];
    case DELETE_COMPLETED_TODO:
      console.log(payload);
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};
