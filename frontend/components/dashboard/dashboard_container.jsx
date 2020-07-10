import { connect } from 'react-redux';
import React from 'react';
import { logout, receiveAllUsers } from '../../actions/session_actions';
import Dashboard from './dashboard_page';
import { requestFriends } from "../../actions/friend_actions"
import { requestBills } from "../../actions/bill_actions"


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
    requestBills: () => dispatch(requestBills())
  };
};

export default connect(mSTP, mDTP)(Dashboard);