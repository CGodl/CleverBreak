import React from 'react';

class FriendInviteBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inviteEmail: ''
    }
  };

  render () {

    return (
      <span className='friend-invite-box-container'>
        <form >
          <p>Invite friends</p>
          <input 
            type='text'
          />
          <button type='submit'>Send invite</button>
        </form>
      </span>



    ) 
  }

}

export default FriendInviteBox;