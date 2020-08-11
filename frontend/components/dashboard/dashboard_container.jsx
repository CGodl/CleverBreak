import React from 'react';
import { connect } from 'react-redux';
import { logout, receiveAllUsers } from '../../actions/session_actions';
import Dashboard from './dashboard_page';
import { addFriend, requestFriends } from "../../actions/friend_actions";
import { requestBills } from "../../actions/bill_actions";
import { fetchComments } from '../../actions/comment_action';
import { openModal } from '../../actions/modal_actions';


const mSTP = (state) => {
  const curUser = state.entities.users[state.session.id]

  return {
    user: state.entities.users[state.session.id],
    curUser
  }
}

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
    requestFriends: () => dispatch(requestFriends()),
    addFriend: (friend) => dispatch(addFriend(friend)),
    requestBills: () => dispatch(requestBills()),
    fetchComments: () => dispatch(fetchComments()),
    openModal: (modal, billInfo) => dispatch(openModal(modal, billInfo))
  };
};

export default connect(mSTP, mDTP)(Dashboard);