import React from 'react';
import AllExpenses from './all_expenses';
import { connect } from 'react-redux';
import { fetchBill, requestBills, deleteBill } from "../../actions/bill_actions";
import { receiveAllUsers } from '../../actions/session_actions';
import { requestFriends } from "../../actions/friend_actions";
import { openModal } from '../../actions/modal_actions';


const mSTP = state => {
  // debugger
  const curUser = state.entities.users[state.session.id];
  // debugger
  const curUserBillIds = curUser.billIds;
  const friends = state.entities.friends
  
  const bills = state.entities.bills;
  const allUsers = state.entities.users;
  // const friends = state.entities.

  
  return {
    allUsers,
    bills,
    curUser,
    curUserBillIds
  }
}

const mDTP = dispatch => {

  return {
    fetchBill: (billId) => dispatch(fetchBill(billId)),
    requestBills: () => dispatch(requestBills()),
    updateBill: (bill) => dispatch(updateBill(bill)),
    deleteBill: (bill) => dispatch(deleteBill(bill)),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
    requestFriends: () => dispatch(requestFriends()),
    openModal: (modal, billInfo) => dispatch(openModal(modal, billInfo))
  }
}

export default connect(mSTP, mDTP)(AllExpenses);