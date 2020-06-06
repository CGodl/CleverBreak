import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import history from '../history';



class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <html className='greeting-container'>
        <header className='splash-nav'>
          <Link to={'/signup'}><button className='signup-btn' type='button'>Sign up</button></Link>
          <Link to={'/login'}><button className='login-btn' type='button'>Log in</button></Link>
          <Link to={'/'} className='logo-link'></Link>
        </header>

        <body className = 'greeting-body'>
          <nav className='greeting-body-top'>
            <p className='top-title'>Less stress when sharing expenses</p>
            <Link to={'/signup'}><button className='signup-btn-body' type='button'>Sign up</button></Link>
            <p>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
            <p></p>
          </nav>
          <nav className='greeting-body-mid-left'>
            <h2 className='greeting-body-title'>Track balances</h2>
            <p className='greeting-body-text'>Keep track of shared expenses, balances, and who owes who.</p>
            <p className='greeting-body-img-top-left'></p>
          </nav>
          <nav className='greeting-body-mid-right'>
            <h2 className='greeting-body-title'>Organize expenses</h2>
            <p className='greeting-body-text'>Split expenses with any group: trips, housemates, friends, and family.</p>
            <p className='greeting-body-img-top-right'></p>
          </nav>
          <nav className='greeting-body-low-left'>
            <h2 className='greeting-body-title'>Add expenses easily</h2>
            <p className='greeting-body-text'>Quickly add expenses on the go before you forget who paid.</p>
            <p className='greeting-body-img-mid-left'></p>
          </nav>
          <nav className='greeting-body-low-right'>
            <h2 className='greeting-body-title'>Pay friends back</h2>
            <p className='greeting-body-text'>Settle up with a friend and record any cash or online payment.</p>
            <p className='greeting-body-img-mid-right'></p>
          </nav>
          <nav className='greeting-body-bottom'>
            <h2>Get even more with PRO</h2>
            <p className='greeting-body-text'>Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!</p>
            <p className='greeting-body-img-bottom'></p>
          </nav>
          <nav className='greeting-bottom-list-container'>
            <ul className='greeting-bottom-list-left'>
              <li>Add groups and friends</li>
              <li>Split expenses, record debts</li>
              <li>Equal or unequal splits</li>
              <li>Split by % or shares</li>
              <li>Calculate total balances</li>
              <li>Suggested repayments</li>
              <li>Simplify debts</li>
              <li>Recurring expenses</li>
            </ul>
            <ul className='greeting-bottom-list-center'>
              <li>Offline mode</li>
              <li>Cloud sync</li>
              <li>Spending totals</li>
              <li>Categorize expenses</li>
              <li>Easy CSV exports</li>
              <li>7+ languages</li>
              <li>100+ currencies</li>
              <li>Payment integrations</li>
            </ul>
            
            <ul className='greeting-bottom-list-right'>
              <li>A totally ad-free experience</li>
              <li>Currency conversion</li>
              <li>Receipt scanning</li>
              <li>Itemization</li>
              <li>Charts and graphs</li>
              <li>Expense search</li>
              <li>Save default splits</li>
              <li>Early access to new features</li>
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








export default Greeting;
