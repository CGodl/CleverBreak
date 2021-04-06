import React from 'react';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props)

    
  }

  componentDidMount() {
    this.props.receiveAllUsers()

  }

  render () {
    const { allUsers, friends, curUser, removeFriend } = this.props;

    if (!friends) {
      return null
    }
    
    

    return (
      <span className='friend-main-container'>
        <div className='friend-title'>
            Friends 
            {/* <button>add</button> */}
            
        </div>
          <ul>
            {
              friends.map(friendId => {
                
                return (
                  <li className ="friend-name" key={friendId}>👤 {allUsers[friendId].name}
                    <span className='delete-friend-btn' onClick={() => removeFriend(friendId)}>X</span>
                  </li>
                )
              })
            }
          </ul>
          

  
      </span>
    )
  }
}

export default FriendIndex;