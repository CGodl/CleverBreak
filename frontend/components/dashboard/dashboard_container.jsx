import { connect } from 'react-redux';
import React from 'react';
import { logout, receiveAllUsers } from '../../actions/session_actions';
import Dashboard from './dashboard_page';
import { requestFriends } from "../../actions/friend_actions"


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
  };
};

export default connect(mSTP, mDTP)(Dashboard);