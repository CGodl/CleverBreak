import React from 'react';
import { connect } from 'react-redux';
// import { logout, receiveAllUsers } from '../../actions/session_actions';
import EditBillPage from './edit_bill_modal';
import { requestFriends, requestFriend } from "../../actions/friend_actions";
// import { requestBills } from "../../actions/bill_actions";
import { closeModal } from '../../actions/modal_actions';
import { addBill } from '../../actions/bill_actions'
import { updateBill } from '../../util/bill_api_util';



const mSTP = (state, ownProps) => {
  console.log('test')
  console.log(state)
  return {
    friends: state.entities.friends,
    // currentBill: state.entities.c
  }
}

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    addBill: (bill) => dispatch(addBill(bill)),
    updateBill: (billId) => dispatch(updateBill(billId))
    // requestFriends: (friends) => dispatch(requestFriends(friends))
  };
};

export default connect(mSTP, mDTP)(EditBillPage);