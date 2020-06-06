import React from 'react'
import { Link } from 'react-router-dom'
import SignedInDropdown from './signed_in_drop'

const Navbar = () => {

  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <Link to={'/'} className='brand-logo'>Cleverbreak</Link>
        <button className='nav-btn nav-right'>NAME HERE</button>
        <SignedInDropdown />
      </div>
    </nav>
  )
}

export default Navbar;