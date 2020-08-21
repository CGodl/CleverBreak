


import React from 'react';

class DashPage extends React.Component {
  constructor(props) {
    super(props);
  };


  render () {
    const { authorOwes, authorOwed, balance } = this.props;
      
      if (!authorOwes || !authorOwed) {
        return null;
      }

    return (
      <ul className='dashpage-container'>
        {
          (authorOwed - authorOwes > 0 ? 
            <li>
              Total Balance
              <br/>
              <div style={{color: "lightgreen"}}>${authorOwed - authorOwes.toFixed(2)}</div>
            </li>
            :
            <li>
              Total Balance
              <br/>
              <div style={{color: "red"}}>-${(authorOwed - authorOwes).toFixed(2) * -1}</div>
            </li>
          )
        }

        <li>
          you owe
          <br/>
          <div style={{color: "red"}}>${authorOwes}</div>
        </li>
        <li>
          you are owed
          <br/>
          <div style={{color: "lightgreen"}}>${authorOwed.toFixed(2)}</div>
        </li>
      </ul>
    )


  }
}

export default DashPage;