
import React from 'react';

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
                 {allUsers[bills[billId].author_id].name} added 
                "{bills[billId].description}"
                The difference is {bills[billId].cost}
                
                </li>
              ))
            }
        </ul>
      </div>
    )


  }

  



};

export default AllExpenses;