import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignedInDropdown from './signed_in_drop';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.user;
  }



  render () {
    return (
      <header>
        <nav className='nav-wrapper'>
          {/* <ul className="nav-container">
            <li><Link to={'/'}><p className='splitwise-logo'></p></Link></li>
            <li><button className='nav-btn nav-right' onClick={this.props.logout}>{this.state.name} </button></li>
          </ul> */}
          <ul className="nav-container">
            <li><Link to={'/'}><p className='splitwise-logo'></p></Link></li>
            <li><Dropdown>
               <Dropdown.Toggle variant="success" className="nav-btn">
                {this.props.name}
              </Dropdown.Toggle>
              <Dropdown.Menu className='nav-dropdown'>
                <Dropdown.Item>Your Account</Dropdown.Item>
                <Dropdown.Item>Create a Group</Dropdown.Item>
                <Dropdown.Item>Fairness Calculators</Dropdown.Item>
                <Dropdown.Item onClick={this.props.logout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar;