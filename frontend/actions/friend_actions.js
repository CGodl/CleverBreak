import * as friendApiUtil from '../util/friend_api_util'


export const RECEIVE_FRIEND = 'RECEIVE_FRIEND'
export const REMOVE_FRIEND = 'REMOVE_FRIEND'


const receiveFriend = friend => {
  return {
    type: RECEIVE_FRIENDSHIP,
    friend
  };
}

const removeFriend = friend => {
  return {
    type: RECEIVE_FRIENDSHIP,
    friend
  };
}

export const addFriend = friend => dispatch => {
  return friendApiUtil.createFriend(friend)
    .then(friend => (dispatch(receiveFriend)))
}

export const deleteFriend = friend => dispatch => {
  return friendApiUtil.destroyFriend(friend)
    .then(friend => (dispatch(receiveFriend(friend))))
}