import {
  ADD_ACTIVE_TODO,
  ADD_COMPLETED_TODO,
  DELETE_ACTIVE_TODO,
  DELETE_COMPLETED_TODO,
} from "./actionTypes";

export const addActiveTodo = (todo) => {
  return { type: ADD_ACTIVE_TODO, payload: todo };
};

export const deleteActiveTodo = (data) => {
  return { type: DELETE_ACTIVE_TODO, payload: data };
};

export const addCompletedTodo = (todo) => {
  return { type: ADD_COMPLETED_TODO, payload: todo };
};

export const deleteCompletedTodo = (data) => {
  return { type: DELETE_COMPLETED_TODO, payload: data };
};

export const addNewActiveTodo = (dispatch, todo) => {
  dispatch(addActiveTodo({ ...todo, id: Date.now().toString() }));
};

export const moveTodoFromActiveToCompleted = (
  activeDispatch,
  completedDispatch,
  todo
) => {
  activeDispatch(deleteActiveTodo(todo.id));
  completedDispatch(addCompletedTodo(todo));
};

export const moveTodoFromCompletedToActive = (
  activeDispatch,
  completedDispatch,
  todo
) => {
  completedDispatch(deleteCompletedTodo(todo.id));
  activeDispatch(addActiveTodo(todo));
};
