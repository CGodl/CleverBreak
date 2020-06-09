import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user)
      .then(() => this.props.history.push('/dashboard'))
      // .catch(this.errorCheck = true)

  }

  renderErrors() {
    return(
     
    <nav className='signup-errors'>
      <label>The following errors occured:
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>    • {error}</li>
          ))}
        </ul>
        </label>
     </nav>
      
    );
  }

  componentDidMount() {
    this.props.clearErrors();
  }



  render() {
    return (
      <div className="session-form-container">
        {/* <img className='sign-in-logo' src={require('../../../app/assets/stylesheets/images/login-main-logo.png')} /> */}
        {/* <figure className='sign-in-logo'></figure> */}
        <Link to={'/'} className={'sign-in-logo-location'}><p className='sign-in-logo'></p></Link>
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <p className='signup-introduce-welcome'>Introduce Yourself</p>
            {this.props.errors.length > 0 ? <label>{this.renderErrors()}</label> : null}
          <br/>
          <div className="session-form">
            <label className='signup-title'>Hi there! My name is </label>
              <br></br>
              <br/>
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="session-input"
              />
            
            <br/>
            <label>Here's my email address:
              <br/>
              <label>Here's my email address:
                <br/>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="session-input"
                />
              </label>
                <br/>
              <label>And here's my password:
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="session-input"
                />
              </label>
            </nav>
            <br/>
            <button className="session-submit" type='submit'>Sign me up!</button>
          </div>
        </form>      
      </div>
    );
  }
}

export default SignupForm;
