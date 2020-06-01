import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';

const _nullUser = {
  id: null
}

const sessionReducer = (oldState = _nullUser, action) {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { id } = action.currentUser;
      return Object.assign({}, { id })
    case LOGOUT:
      return _nullUser;
    default:
      return oldState;
  }
};

export default sessionReducer;