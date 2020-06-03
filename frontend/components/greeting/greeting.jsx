import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import history from '../history'


class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <h1>    
      <Link to={'/login'}><button className='login-btn' type='button'>Log in</button></Link>
      <Link to={'/signup'}><button className='signup-btn' type='button'>Sign Up</button></Link>
      </h1>
    )
    }
  }






// const Greeting = ({ user, logout }) => {
//   console.log(user)
//   const sessionLinks = () => (
//     <nav className="login-signup">

//     </nav>
//   );
//   const personalGreeting = () => (
//     <hgroup className="header-group">
//       <h2 className="header-name">Hi, {user.email}!</h2>
//       <button className="header-button" onClick={logout}>Log Out</button>
//     </hgroup>
//   );

// };


export default Greeting;
