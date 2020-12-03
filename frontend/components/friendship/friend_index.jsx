import React from 'react';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props)

    
  }

  componentDidMount() {
    this.props.receiveAllUsers()

  }

  render () {
    const { allUsers, friends } = this.props;

    if (!friends) {
      return null
    }

    return (
      <span className='friend-main-container'>
        <div className='friend-title'>
            FRIENDS 
            {/* <button>add</button> */}
            
        </div>
          <ul>
            {
              friends.map(friend => (
                <li className ="friend-name" key={friend}>👤 {allUsers[friend].name}
                <span className='delete-friend-btn'>X</span>
                </li>
              ))
            }
          </ul>
          

  
      </span>
    )
  }
}

export default FriendIndex;