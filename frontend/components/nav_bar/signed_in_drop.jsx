import React from 'react'
import { Link, NavLink } from 'react-router-dom'



class SignedInDropdown extends React.Component {
  class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.logout();
    }

  render () {
    return (
        <ul className="">
          
          <li><NavLink to={'/'} className='your-account'>Your Account</NavLink></li>
          <li><NavLink to={'/'} className='brand-logo'>Create a group</NavLink></li>
          <li><NavLink to={'/'} className='brand-logo'>Fairness Calculators</NavLink></li>
          <li><NavLink to={this.handleSubmit} className='brand-logo'>Log Out</NavLink></li>
        </ul>
    )
  }

}
  

export default SignedInDropdown;