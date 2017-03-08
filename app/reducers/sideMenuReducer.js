import createReducer from '../lib/createReducer';
import * as types from '../actions/types';


export const sideMenu = createReducer(false, {
  [types.SIDE_MENU_OPEN](state, action){
    return action.data;
  },

  [types.SIDE_MENU_CLOSE](state, action){
    return action.data;
  },
})
