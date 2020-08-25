import React from 'react';

class FriendInviteBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    const friend = Object.assign({}, this.state);
    
    this.props.addFriend(friend);
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };



  render () {
    const {curUser, addFriend} = this.props;

    return (
      // <span className='friend-invite-box-container'>
      <span>
        <p className='friend-invite-box-title'>Add friend via email</p>
        <form className='friend-invite-box-container' onSubmit={this.handleSubmit}>
          <input 
            type='text'
            value={this.state.email}
            onChange={this.update('email')}
          />
          <button className = 'friend-find-btn' type='submit'>Send invite</button>
        </form>
      </span>



    ) 
  }

}

export default FriendInviteBox;