import * as types from './types';
import Api from '../lib/api';

export function addUser() {
  return {
    type: types.EMPLOYEE_COUNT,
  }
}

export function userLogin(userDetails) {
  return (dispatch, getState) => {
    return Api.post("admins/api_login", userDetails).then( resp => {
      if(resp.msg == "success"){
        dispatch(setCurrentUser({currentuser: resp}))
        return true;
      } else{
        return false;
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}

export function userLogout() {
  return (dispatch, getState) => {
    dispatch(setCurrentUser({currentuser: null}));
    dispatch(setusers({users: []}));
  }
}

export function setCurrentUser({currentuser}) {
  return {
    type: types.CURRENT_USER,
    currentuser,
  }
}

export function fetchUsers(url, token, filterText) {
  return (dispatch, getState) => {
    const params = [
      `query=${filterText}`,
      `access_token=${token}`
    ].join('&')
    return Api.get(`${url}?${params}`).then(resp => {
      console.log(resp.users)
      dispatch(setusers({users: resp.users}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setusers({users}) {
  return {
    type: types.EMPLOYEE_LIST,
    users,
  }
}
