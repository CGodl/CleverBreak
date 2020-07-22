import * as friendApiUtil from '../util/friend_api_util'

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP'
export const RECEIVE_FRIENDSHIPS = 'RECEIVE_FRIENDSHIPS'
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP'

const receiveFriend = friend => {
  // ////debugger
  return {
    type: RECEIVE_FRIENDSHIP,
    friend
  };
}

const receiveFriends = friends => {
  return {
    type: RECEIVE_FRIENDSHIPS,
    friends
  };
}

const removeFriend = () => {
  ////debugger
  return {
    type: REMOVE_FRIENDSHIP,
  };
}

export const addFriend = friend => dispatch => {
  ////debugger
  return friendApiUtil.createFriend(friend)
    .then(friend => (dispatch(receiveFriend(friend))))
}

export const requestFriend = id => dispatch => {
  
  return friendApiUtil.getFriend(id)
    .then((id) => dispatch(receiveFriend(id)))
}

export const requestFriends = () => dispatch => (
  friendApiUtil.getFriends()
    .then(((friends) => dispatch(receiveFriends(friends)))
    ))

export const deleteFriend = friend => dispatch => {
  ////debugger
  return friendApiUtil.destroyFriend(friend)
    .then(friend => (dispatch(removeFriend(friend))))
}