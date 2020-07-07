import { connect } from 'react-redux';
import React from 'react';
import { addFriend, removeFriend } from '../../actions/friend_actions';
import FriendForm from './friend_form';
import { receiveAllUsers } from '../../actions/session_actions';


// const mSTP = state => {
//   debugger
//   return {
//     friends: Object.values(state.friends)
//   }
// }


const mSTP = state => {
  debugger
  const curUser = state.entities.users[state.session.id] 
  debugger
  // const friends = curUser.friendIds.map(id => state.entities.users[id])
  const friends = curUser.friendIds
  const allUsers = state.entities.users
  debugger
  return {
      friends,
      allUsers
  }
}


const mDTP = dispatch => {
  debugger
  return {
    addFriend: friend => dispatch(addFriend(friend)),
    // removeFriend: () => dispatch(removeFriend(friend)),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
  }
}

export default connect(mSTP, mDTP)(FriendForm)

// get pojos of servers