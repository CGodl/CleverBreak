import React from 'react';
import Navbar from '../nav_bar/navbar'
import FriendForm from '../friendship/friend_form'
import FriendFormContainer from '../friendship/friend_container'
// import FriendInviteBox from '../friendship/'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  componentWillMount() {
    this.props.receiveAllUsers();
    this.props.requestFriends();
    this.props.requestBills();
  }


  render () {
    const { user, logout} = this.props

    return (
      <html>
        <Navbar 
            name={this.state.name}
            logout={this.props.logout}
        />

        <body className='dashboard-main'>
          <nav className='dashboard-main-nav-left'>
            <p><FriendFormContainer /></p>
            {/* <p><FriendInviteBox /></p> */}
          </nav>
          <main className='dashboard-main-center'>
            <div className ='dashboard-main-center-top'>
              <label>Dashboard</label>
              <button className='expense-btn'>Add an expense</button>
              <button className='settle-btn'>Settle up</button>
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