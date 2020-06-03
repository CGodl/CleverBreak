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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  render() {
    return (
      <div className="login-form-container">
        <div className='login-header'>
          <header className='login-page-btn-container'>
          <Link to={'/signup'}><button className='log-page-login-btn' type='button'>Sign up</button></Link>
          <Link to={'/login'}><button className='log-page-signup-btn' type='button'>Log in</button></Link>
          </header>
          or
        </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2 className='login-introduce-welcome'>Welcome to Splitwise</h2>
          <div className="login-form">

            <label>Email address
              <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className='login-input-box'
              />
            </label>
            <br/>
            <label>Password
              <br/>
              <input type="password"
                className='login-input'
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input-box'
              />
            </label>
            <br/>
            <input className="login-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        <br/>
      </div>
    );
  }
}

export default LoginForm;
