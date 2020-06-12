import React from 'react';
import Navbar from '../nav_bar/navbar'
import FriendForm from '../friendship/friend_form'
import FriendFormContainer from '../friendship/friend_container'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  componentWillMount() {
    this.props.receiveAllUsers()
    this.props.requestFriends();
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
            LEFT
          </nav>
          <main className='dashboard-main-center'>
            <p>TEST</p>



          </main>
          <nav className='dashboard-main-nav-right'>


            <p>Subscribe to Splitwise Pro for no ads, currency conversion, charts, search, and more.</p>


          </nav>

        




        </body>






      </html>
    )


  }


}

export default Dashboard