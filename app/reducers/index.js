import { combineReducers } from 'redux';
import * as usersReducer from './users';
import * as sideMenuReducer from './sideMenuReducer';

export default combineReducers(Object.assign(
  usersReducer,
  sideMenuReducer
));
