import React from 'react';
import BillShow from './all_bill_show'

class AllExpenses extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isButtonActive: false }
    this.toggleBillDisplay = this.toggleBillDisplay.bind(this)
    this.openTheModal = this.openTheModal.bind(this);
  }

  componentWillMount() {
    this.props.requestBills();
    this.props.receiveAllUsers();
  }

  toggleBillDisplay() {
    this.setState({isButtonActive: !this.state.isButtonActive})
  };

  openTheModal() {
    
    this.props.openModal('editBill')
  };
  
  render () {
    const { allUsers, bills, curUserBillIds, requestBill, openModal } = this.props; 


    if (!curUserBillIds || !bills) {
      return null
    }



    return (
      <div className='recent-activity-main-container'>
        <ul>
            {
              curUserBillIds.map(billId => ( 
                <li key={ billId }>
                  <BillShow 
                    bills={bills}
                    allUsers={allUsers}
                   curUserBillIds={curUserBillIds}
                    billId={billId}
                    openModal = {openModal}
          
                  />
                  <button onClick={() => this.props.deleteBill(billId)}>X</button>
                </li>
              ))
            }
        </ul>
      </div>
    )
  }
};

export default AllExpenses;