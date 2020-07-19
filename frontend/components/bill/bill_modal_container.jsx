import React from 'react';
import { connect } from 'react-redux';
// import { logout, receiveAllUsers } from '../../actions/session_actions';
import BillPage from './bill_modal';
// import { requestFriends } from "../../actions/friend_actions";
// import { requestBills } from "../../actions/bill_actions";
// import { openModal } from '../../actions/modal_actions';
import { closeModal } from '../../actions/modal_actions';



const mSTP = (state) => {
  return {
    user: state.entities.users[state.session.id],
  }
}

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    addBill: (bill) => dispatch(addBill(bill))

  };
};

export default connect(null, mDTP)(BillPage);