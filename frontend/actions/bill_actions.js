import * as billApiUtil from '../util/bill_api_util'

export const RECEIVE_BILL = 'RECEIVE_BILL';
export const RECEIVE_ALL_BILLS = 'RECEIVE_ALL_BILLS';
export const REMOVE_BILL = 'REMOVE_BILL';

const receiveBill = bill => {

  return {
    type: RECEIVE_BILL,
    bill
  };
}

const receiveBills = bills => {

  return {
    type: RECEIVE_BILLS,
    bills
  };
}

const removeBill = () => {

  return {
    type: REMOVE_BILL,
  };
}

export const addBill = bill => dispatch => {

  return billApiUtil.createBill(bill)
    .then(bill => dispatch(receiveBill(bill)))
}

export const requestBills = () => dispatch => {

  return billApiUtil.fetchAllBills()
    .then(() => dispatch(receiveBills()))

}

export const deleteBill = bill => dispatch => {

  return billApiUtil.destroyBill(friend)
    .then(bill => dispatch(removeBill(bill)))
}
