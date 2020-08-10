import React from 'react';
import { connect } from 'react-redux';
import { logout, receiveAllUsers } from '../../actions/session_actions';
import Dashboard from './dashboard_page';
import { requestFriends } from "../../actions/friend_actions";
import { requestBills } from "../../actions/bill_actions";
import { fetchComments } from '../../actions/comment_action';
import { openModal } from '../../actions/modal_actions';


const mSTP = (state) => {
  return {
    user: state.entities.users[state.session.id],
  }
}

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
    requestFriends: () => dispatch(requestFriends()),
    requestBills: () => dispatch(requestBills()),
    fetchComments: () => dispatch(fetchComments()),
    openModal: (modal, billInfo) => dispatch(openModal(modal, billInfo))
  };
};

export default connect(mSTP, mDTP)(Dashboard);