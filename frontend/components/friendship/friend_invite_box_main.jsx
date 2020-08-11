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
    debugger
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
      <span className='friend-invite-box-container'>
        <form onSubmit={this.handleSubmit}>
          <p>Invite friends</p>
          <input 
            type='text'
            value={this.state.email}
            onChange={this.update('email')}
          />
          <button type='submit'>Send invite</button>
        </form>
      </span>



    ) 
  }

}

export default FriendInviteBox;