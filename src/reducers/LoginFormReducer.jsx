import * as types from '../constants/action-types';

const initState = {
  loggedIn: false,
  currentUser: {}
}

const loginFormReducer = (state = initState, action) => {
  switch(action.type) {
    case types.SET_CURRENT_USER:
      return {...state,
        loggedIn: action.loggedIn,
        currentUser: action.user
      }
    default:
      return {...state}
  }
}

export default loginFormReducer;
