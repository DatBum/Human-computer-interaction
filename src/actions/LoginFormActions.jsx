import * as types from '../constants/action-types';

export const setCurrentUser = (loggedIn, user) => {
  return {
    type: types.SET_CURRENT_USER,
    loggedIn,
    user
  }
}
