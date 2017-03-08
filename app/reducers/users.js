import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const users = createReducer({}, {
  [types.EMPLOYEE_LIST](state, action){
    let newState = {}
    action.users.forEach( (user) => {
      let id = user.id
      newState[id] = Object.assign({}, user, { id });
    });
    return newState;
  }
})

export const userCount = createReducer(0, {
  [types.EMPLOYEE_COUNT](state, action){
    return state + 1;
  }
})

export const currentUser = createReducer(null, {
  [types.CURRENT_USER](state, action){
    return action.currentuser;
  }
})
