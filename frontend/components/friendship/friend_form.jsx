import React from 'react';

class FriendForm extends React.Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
    debugger
    this.props.receiveAllUsers()
  }


  // componentDidMount() {
  //   this.props.getFriends()
  // }

  render () {
    const { friends } = this.props;

    if (!friends) {
      return null
    }

    return (
      <span className='friend-main-container'>
        <label className='friend-title'>FRIENDS
          <button>➕add</button>

          <ul>
            {
              friends.map(friend => (
                <li>{friend.name}</li>
              ))
            }
          </ul>
          

        </label>
      </span>
    )
  }
}

export default FriendForm