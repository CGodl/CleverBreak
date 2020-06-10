import { connect } from 'react-redux';
import React from 'react';
import { addFriend, removeFriend } from '../../actions/friend_actions';
import FriendForm from './friend_form';


const mSTP = state => {
  return {
    friends: Object.values(state.friend)
  }
}

const mDTP = friend = dispatch => {
  return {
    addFriend: friend => dispatch(addFriend(friend)),
    removeFriend: () => dispatch(removeFriend(friend))
  }
}

export default connect(mSTP, mDTP)(FriendForm)

// get pojos of servers