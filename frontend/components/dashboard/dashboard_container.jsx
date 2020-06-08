import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard_page';


const mSTP = (state) => {
  return {
    user: state.entities.users[state.session.id],
  }
}

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mSTP, mDTP)(Dashboard);