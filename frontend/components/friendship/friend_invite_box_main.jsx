import React from 'react';





class FriendInviteBox extends React.Component {

  render () {

    return (
      <span className='friend-invite-box-container'>
        <form >
          <title>Invite friends</title>
          <input 
            type='text'
          />

          <button type='submit'>Send invite</button>
        </form>
      </span>



    )


    
  }

}

export default FriendInviteBox