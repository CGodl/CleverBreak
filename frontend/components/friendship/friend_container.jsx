import { connect } from 'react-redux';
import React from 'react';
import { addFriend, deleteFriend } from '../../actions/friend_actions';
import FriendIndex from './friend_index';
import { receiveAllUsers } from '../../actions/session_actions';

const mSTP = state => {

  const curUser = state.entities.users[state.session.id] 
  const friends = curUser.friendIds
  const allUsers = state.entities.users
  
  return {
      friends,
      allUsers,
      curUser
  }
}


const mDTP = dispatch => {
  
  return {
    addFriend: friend => dispatch(addFriend(friend)),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
    removeFriend: friendId => dispatch(deleteFriend(friendId))
  };
};

export default connect(mSTP, mDTP)(FriendIndex);