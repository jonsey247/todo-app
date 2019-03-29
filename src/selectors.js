import { createSelector } from 'reselect';

export const todoReducer = state => state.todoReducer;
const signedIn = () => createSelector(
    todoReducer,
  state => state.get('signedIn')
);
export default signedIn