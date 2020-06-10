import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friend_actions'


const friendsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_FRIENDSHIP:
      return 
    case REMOVE_FRIENDSHIP:
      return {}
    default:
      return state;
  }

}

export default friendsReducer;