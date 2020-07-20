




const mSTP = (state) => {
  const curUserBills = state.entities.bills


  return {
    curUserBills
  }
}

const mDTP = dispatch => {

  return {
    receiveBills: (bills) => dispatch(receiveBills(bills))


  }


}