import React from 'react';
import { Link } from 'react-router-dom';
import SignedInDropdown from './signed_in_drop';

const Navbar = () => {

  return (
    <header>
      <nav className='nav-wrapper'>
        <ul className="nav-container">
          <li><Link to={'/'} className='brand-logo'>Cleverbreak</Link></li>
          <li><button className='nav-btn nav-right'>NAME HERE</button></li>
          {/* <SignedInDropdown /> */}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;