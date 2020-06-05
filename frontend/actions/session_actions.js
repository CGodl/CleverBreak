import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => {
  debugger
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
}};

export const logoutCurrentUser = () => {
  debugger
  return{
  type: LOGOUT_CURRENT_USER,
}};

export const receiveErrors = errors => {
  debugger
  return {
  type: RECEIVE_SESSION_ERRORS,
  errors
}};

export const signup = user => dispatch => {
  debugger
  return SessionAPIUtil.signup(user)
    .then(user => (dispatch(receiveCurrentUser(user))))
};

export const login = user => dispatch => {
  debugger
  return SessionAPIUtil.login(user)
  .then(user => (dispatch(receiveCurrentUser(user))
  ), err => (dispatch(receiveErrors(err.responseJSON))))
};

export const logout = () => dispatch => {
  debugger
  return SessionAPIUtil.logout()
    .then(user => (dispatch(logoutCurrentUser())))
};