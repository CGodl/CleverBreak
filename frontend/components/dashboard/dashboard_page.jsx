import React from 'react';
import Navbar from '../nav_bar/navbar';
import FriendIndex from '../friendship/friend_index';
import FriendContainer from '../friendship/friend_container';
import openModal from '../../actions/modal_actions';
import FriendInviteBox from '../friendship/friend_invite_box_main'
import billModal from '../bill/bill_modal_container';
import { Link } from 'react-router-dom';
import AllExpenses from '../all_expenses/all_expenses_container'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

    this.openTheModal = this.openTheModal.bind(this);
    
  }

  componentWillMount() {
    this.props.receiveAllUsers();
    this.props.requestFriends();
    this.props.requestBills();
    this.props.fetchComments();
  }

  openTheModal() {
    this.props.openModal('bill', null)
  }

  render () {
    const { user, logout, curUser, addFriend } = this.props;
    
    return (
      <html>
        <Navbar 
            name={this.state.name}
            logout={this.props.logout}
        />

        <body className='dashboard-main'>
          <nav className='dashboard-main-nav-left'>
            <button>Dashboard</button>
            <button>Recent activity</button>
            <button>All expenses</button>




          <Link to={'/dashboard'}><button type='button'> Dashboard</button></Link>
          <Link to={'/activity'}><button type='button'>Recent activity</button></Link>
          <Link to={'/all'}><button type='button'>All expenses</button></Link>
            <p><FriendContainer /></p>
            <p><FriendInviteBox 
              curUser={curUser}
              addFriend={addFriend}
            /></p>
          </nav>
          <main className='dashboard-main-center'>
          switch (modal) {
      //   case 'bill':
      //     currentModalComponent = <BillPage />;
      //     break;
      //   case 'editBill':
      //     currentModalComponent = <EditBillPage billInfo={billInfo}/>;
      //     break;
      //   // case 'inviteFriend':

      //   default:
      //     return null;
      //    }

            <div className ='dashboard-main-center-top'>
              <label>Dashboard</label>
              <button className='expense-btn' onClick={this.openTheModal}>Add an expense</button>
              <button className='settle-btn'>Settle up</button>
            </div>
            <div>
                
            </div>
          </main>
          <nav className='dashboard-main-nav-right'>
            <label>Get Splitwise Pro!</label>
            <p className ='splitwise-purple-logo'></p>


            <p>Subscribe to Splitwise Pro for no ads, currency conversion, charts, search, and more.</p>


          </nav>

        </body>

      </html>
    )


  }


}

export default Dashboard;