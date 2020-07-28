import React from 'react';
import AllExpenses from './all_expenses';
import { connect } from 'react-redux';
import { requestBill, requestBills, deleteBill } from "../../actions/bill_actions";
import { receiveAllUsers } from '../../actions/session_actions';
import { requestFriends } from "../../actions/friend_actions";


const mSTP = state => {
  const curUser = state.entities.users[state.session.id];
  const curUserBillIds = curUser.billIds;
  const bills = state.entities.bills;
  const allUsers = state.entities.users;

  
  return {
    curUserBillIds,
    bills,
    allUsers,
    curUser
  }
}

const mDTP = dispatch => {

  return {
    requestBills: () => dispatch(requestBills()),
    updateBill: (bill) => dispatch(updateBill(bill)),
    deleteBill: (bill) => dispatch(deleteBill(bill)),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
    requestFriends: () => dispatch(requestFriends())
  }
}

export default connect(mSTP, mDTP)(AllExpenses);

