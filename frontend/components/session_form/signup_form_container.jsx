import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';


const mSTP = (state, ownProps) => {

  return {
    errors: state.errors.session,
    formType: 'signup'
  }

}

const mDTP = (dispatch, ownProps) => {
  return {
    signup: user => dispatch(signup(user)),
  };
};

export default connect(mSTP, mDTP)(SignupForm);