import React from 'react';
import Navbar from '../nav_bar/navbar'




class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }


  render () {
    const { user, logout} = this.props

    return (
      <span>
        <Navbar 
            name={this.state.name}
            logout={this.props.logout}
        />

        <body className='dashboard-main'>
          <nav className='dashboard-main-nav-left'>
            <p>LEFT</p>


          </nav>
          <main className='dashboard-main-center'>
            <p>TEST</p>



          </main>
          <nav className='dashboard-main-nav-right'>
            <p>RIGHT</p>


          </nav>

        




        </body>






      </span>
    )


  }


}

export default Dashboard