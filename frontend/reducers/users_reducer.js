import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/session_actions';
import { REMOVE_BILL } from '../actions/bill_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ALL_USERS:
      return action.users
    case REMOVE_BILL:
      const newState = Object.assign({}, state);
      for (const userId in newState) {
        if (newState.hasOwnProperty(userId)) {
          const user = newState[userId]
          user.billIds = user.billIds.filter((billId) => billId !== action.billId
        )
      }

    }
    return newState;
    default:
      return state;
  }
};

export default usersReducer;
