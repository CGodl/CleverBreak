import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignedInDropdown from './signed_in_drop';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }



  render () {
    return (
      <header>
        <nav className='nav-wrapper'>
          <ul className="nav-container">
            <li><Link to={'/'}><p className='splitwise-logo'></p></Link></li>
    <li><button className='nav-btn nav-right' onClick={this.props.logout}>{this.state.name}</button></li>

          </ul>
          <div>
          <ul className="nav-dropdown">
            <li><NavLink to={'/'} className='your-account'>Your Account</NavLink></li>
            <li><NavLink to={'/'} className='brand-logo'>Create a group</NavLink></li>
            <li><NavLink to={'/'} className='brand-logo'>Fairness Calculators</NavLink></li>
            <li><NavLink to={'/'} className='brand-logo'>Log Out</NavLink></li>
          </ul>
        </div>
        </nav>
      </header>
    )
  }
}

export default Navbar;