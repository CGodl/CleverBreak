import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

// const mSTP = ({ errors }) => {
//   return {
//     errors: errors.session,
//     formType: 'signup',
//     navLink: <Link to="/login">log in instead</Link>,
//   };
// };

const mDTP = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
  };
};

export default connect(null, mDTP)(SessionForm);