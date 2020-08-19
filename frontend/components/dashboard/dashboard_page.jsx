


import React from 'react';

class DashPage extends React.Component {
  constructor(props) {
    super(props);
  };


  render () {

    return (
      <ul className='dashpage-container'>
        <li>
          Total Balance
          <br />
          +$500.00
        </li>
        <li>
          you owe
          <br/>
          -$500.00
        </li>
        <li>
          you are owed
          <br/>
          +$1000.00
        </li>
      </ul>
    )


  }
}

export default DashPage;