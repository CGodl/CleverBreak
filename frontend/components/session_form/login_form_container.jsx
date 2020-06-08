import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mSTP = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login',
  };
};

const mDTP = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    receiveError: error => dispatch(receiveError(error)),
    clearErrors: () => dispatch(clearErrors())

  };
};

export default connect(mSTP, mDTP)(LoginForm);