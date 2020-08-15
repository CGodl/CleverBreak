import React from 'react';
import { Link } from 'react-router-dom';

class Activity extends React.Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
    this.props.requestBills();
    this.props.receiveAllUsers();
  }
  
  render () {
    const { allUsers, bills, curUser, curUserBillIds } = this.props;
    // window.allUsers = allUsers;
    // window.bills = bills;
    // window.curUserbillIds = curUserBillIds;
    // window.curUser = curUser;
    debugger

    if (!curUserBillIds || !bills) {
      return null
    }


    return (
      <div className='recent-activity-main-container'>
        <ul>
            {
              (curUserBillIds.length != 0) ?
                curUserBillIds.map(billId => (
                  <li key={ billId } >
                    <Link to={'/all'}><button onClick={console.log('button Works')}>
                  {curUser.id === bills[billId].author_id ? 'You' : allUsers[bills[billId].author_id].name} added 
                  "{bills[billId].description}"
                  The difference is {bills[billId].cost}
                    </button>
                    </Link>
                  
                  </li>
                  
                  ))
                  :
                  <p>No Bills Found</p>
                }
        </ul>
      </div>
    )


  }

  



};

export default Activity;