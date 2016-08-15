import { combineReducers } from 'redux';
import { todos } from 'TodoList/reducers/TodoReducers';

const AppReducers = combineReducers({
  todos
})

export default AppReducers;
