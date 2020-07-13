import { RECEIVE_BILL, RECEIVE_ALL_BILLS, REMOVE_BILL } from '../actions/bill_actions'


const billsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_BILL:
      return Object.assign({}, newState, {[action.bill.id]: action.bill})
    case RECEIVE_ALL_BILLS:
      debugger
      return action.bills;
    case REMOVE_BILL:
      return {}
    default:
      return state;
  }

}

export default billsReducer;