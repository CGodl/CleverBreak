import React from 'react';
import { Link } from 'react-router-dom';

class FriendForm extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.receiveAllUsers()

  }

  render () {
    const { allUsers, friends } = this.props;
    window.allUsers = allUsers
    window.friends = friends

    if (!friends) {
      return null
    }

    return (
      <span className='friend-main-container'>
        <label className='friend-title'>
            FRIENDS <button>add</button>
        </label>
          <ul>
            {
              friends.map(friend => (
                <li>👤 {allUsers[friend].name}</li>
              ))
            }
          </ul>
          

  
      </span>
    )
  }
}

export default FriendForm