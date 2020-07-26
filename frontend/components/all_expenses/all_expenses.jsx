
import React from 'react';
import BillShow from './all_bill_show'


class AllExpenses extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isButtonActive: false }
    this.toggleBillDisplay = this.toggleBillDisplay.bind(this)
  }

  componentWillMount() {
    this.props.requestBills();
    this.props.receiveAllUsers();
  }

  toggleBillDisplay() {
    this.setState({isButtonActive: !this.state.isButtonActive})
  };

  
  render () {
    const { allUsers, bills, curUserBillIds } = this.props; 
    window.allUsers = allUsers;
    window.bills = bills;
    window.curUserbillIds = curUserBillIds;

    if (!curUserbillIds || !bills) {
      return null
    }

    return (
      <div className='recent-activity-main-container'>
        <ul>
            {
              curUserBillIds.map(billId => (
                <li key={ billId }>
                  <button onClick={this.toggleBillDisplay} className='all-expenses-btn'>
                    {bills[billId].description}

                    {allUsers[bills[billId].author_id].name} added 
                
                The difference is {bills[billId].cost}
                
                  </button>
                  <div className={this.state.isButtonActive ? 'bill-show-toggle-on' : 'bill-show-toggle-off'}>
                  <BillShow 
                    bills={bills}
                    allUsers={allUsers}
                    curUserBillIds={curUserBillIds}
                    billId={billId}    
                  />
                  </div>
                </li>
              ))
            }
        </ul>
      </div>
    )


  }

  



};

export default AllExpenses;