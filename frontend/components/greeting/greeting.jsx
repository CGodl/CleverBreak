import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import history from '../history';
//import Image from 'react-bootstrap/Image';
//import Logo from '../../assets/splitwise_logo.png'


class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <html className='greeting-container'>
        <header className='splash-nav'>
          {/* <Image src="../../assets/splitwise_logo.png" fluid />
          <img style={{height:'auto',width:'100%'}} src={ require('../../assets/splitwise_logo.png') }/> */}
          <Link to={'/signup'}><button className='signup-btn' type='button'>Sign up</button></Link>
          <Link to={'/login'}><button className='login-btn' type='button'>Log in</button></Link>
          <Link to={'/'} className='logo-link'></Link>
          {/* <Link to={'/'}><nav className='logo-link'></nav></Link> */}
        </header>

        <body className = 'greeting-body'>
          <nav className='greeting-body-top'>
            <p>Less stress when sharing expenses</p>
            <Link to={'/signup'}><button className='signup-btn' type='button'>Sign up</button></Link>
            <p>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
          </nav>
          <nav className='greeting-body-mid-left'>
            <h2>Track balances</h2>
            <p>Keep track of shared expenses, balances, and who owes who.</p>
          </nav>
          <nav className='greeting-body-mid-right'>
            <h2>Organize expenses</h2>
            <p>Split expenses with any group: trips, housemates, friends, and family.</p>
          </nav>
          <nav className='greeting-body-low-left'>
            <h2>Add expenses easily</h2>
            <h2>Quickly add expenses on the go before you forget who paid.</h2>
          </nav>
          <nav className='greeting-body-low-right'>
            <h2>Pay friends back</h2>
            <p>Settle up with a friend and record any cash or online payment.</p>
          </nav>
          <nav className='greeting-body-bottom'>
            <h2>Get even more with PRO</h2>
            <p>Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!</p>
          </nav>
          <nav className='greeting-bottom-list-container'>
            <ul className='greeting-bottom-lists'>
            <ul>
              <li>Add groups and friends</li>
              <li>Split expenses, record debts</li>
              <li>Equal or unequal splits</li>
              <li>Split by % or shares</li>
              <li>Calculate total balances</li>
              <li>Suggested repayments</li>
              <li>Simplify debts</li>
              <li>Recurring expenses</li>
            </ul>
            <ul>
              <li>Offline mode</li>
              <li>Cloud sync</li>
              <li>Spending totals</li>
              <li>Categorize expenses</li>
              <li>Easy CSV exports</li>
              <li>7+ languages</li>
              <li>100+ currencies</li>
              <li>Payment integrations</li>
            </ul>
            <ul>
              <li>A totally ad-free experience</li>
              <li>Currency conversion</li>
              <li>Receipt scanning</li>
              <li>Itemization</li>
              <li>Charts and graphs</li>
              <li>Expense search</li>
              <li>Save default splits</li>
              <li>Early access to new features</li>
            </ul>
            </ul>
            <ul>
              <li>Core features</li>
              <li>Pro features</li>
            </ul>



          </nav>



          







        </body>
    
        <footer className='footer-background'></footer>
      </html>
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
