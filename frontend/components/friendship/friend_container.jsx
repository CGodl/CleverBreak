import { connect } from 'react-redux';
import React from 'react';
import { addFriend, removeFriend } from '../../actions/friend_actions';
import FriendForm from './friend_form';
import { receiveAllUsers } from '../../actions/session_actions';

const mSTP = state => {

  const curUser = state.entities.users[state.session.id] 
  const friends = curUser.friendIds
  const allUsers = state.entities.users
  
  return {
      friends,
      allUsers
  }
}


const mDTP = dispatch => {
  
  return {
    addFriend: friend => dispatch(addFriend(friend)),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
  }
}

export default connect(mSTP, mDTP)(FriendForm)

// get pojos of servers