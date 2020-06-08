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
            <li><button className='nav-btn nav-right' >{this.state.name}</button></li>

          </ul>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item>Fairness Calculators</Dropdown.Item>
            <Dropdown.Item onClick={this.props.logout}>Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </nav>
      </header>
    )
  }
}

export default Navbar;