import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
            <li><Dropdown>
              <Dropdown.Toggle variant="success" className="nav-btn">
                {this.state.name}
              </Dropdown.Toggle>
              <Dropdown.Menu className='nav-dropdown'>
                <Dropdown.Item href="#/action-1">Your Account</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Create a Group</Dropdown.Item>
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