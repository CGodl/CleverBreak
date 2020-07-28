import React from 'react';
import BillShow from './all_bill_show'

class AllExpenses extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestBills();
    this.props.receiveAllUsers();
  }
  
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
                  <BillShow 
                    bills={bills}
                    allUsers={allUsers}
                    curUserBillIds={curUserBillIds}
                    billId={billId}  
                    deleteBill={this.props.deleteBill}  
                  />
                </li>
              ))
            }
        </ul>
      </div>
    )
  }
};

export default AllExpenses;