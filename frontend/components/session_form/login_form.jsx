import React from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoAcct = this.demoAcct.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    const user = Object.assign({}, this.state);
    this.props.login(user)
    .catch(err => { console.log(err) })
  }

  demoAcct(e) {
    e.preventDefault();
    const user = { email: `anemail@yahoo.com`, password: `password123` }
    this.props.login(user);
  }


  render() {
    return (
      <div className="login-form-container">
        <header className='login-page-btn-container'>
          <Link to={'/login'}><p className='green-logo'></p></Link>
          <nav className='login-page-btns'>
            <Link to={'/login'}><button className='log-page-login-btn' type='button'>Log in</button></Link>
            &nbsp;or&nbsp;
            <Link to={'/signup'}><button className='log-page-signup-btn' type='button'>Sign up</button></Link>
          </nav>
        </header>
        <nav className='login-main-logo'></nav>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <label className='login-introduce-welcome'>Welcome to Cleverbreak</label>
          <div className="login-form">
            <p className='login-form-text'>Email address</p>
              <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className='login-input-box'
              />
            <br/>
            <p className='login-form-text'>Password</p>
              <br/>
              <input type="password"
                className='login-input'
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input-box'
              />
            <br/>
            <input className="login-submit" type="submit" value={this.props.formType} />
            <button className='demo-btn'onClick={this.demoAcct}>Demo Account</button>
          </div>
        </form>
        <br/>
        <footer className='login-footer'>
          <nav className='rights-reserved'>
          <p className='new-york-city'>Made with ☻ in NYC, NY, USA</p>
          <p className='copyright'>Copyright © 2020 Splitwise, Inc. All rights reserved.</p>
          </nav>
        </footer>
      </div>
    );
  }
}

export default LoginForm;
