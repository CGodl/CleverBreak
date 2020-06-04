import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';



const mSTP = (state, ownProps) => {

  return {
    errors: state.errors.session,
    formType: 'login'
  }

}

const mDTP = (dispatch, ownProps) => {
  return {
    login: user => dispatch(login(user)),
  };
};

export default connect(mSTP, mDTP)(LoginForm);