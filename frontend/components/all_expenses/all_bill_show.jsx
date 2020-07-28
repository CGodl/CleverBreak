import React from 'react';

class BillShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isButtonActive: false }
    this.toggleBillDisplay = this.toggleBillDisplay.bind(this)
  }

  toggleBillDisplay() {
    this.setState({isButtonActive: !this.state.isButtonActive})
  };

  render () {
    const { bills, allUsers, curUserBillIds, billId } = this.props
    return (
      <div className='all-bill-show-container'>
        <button onClick={this.toggleBillDisplay} className='all-expenses-btn'>
          {bills[billId].description}
          {allUsers[bills[billId].author_id].name} added 
          The difference is {bills[billId].cost}       
        </button>
        <div className={this.state.isButtonActive ? 'bill-show-toggle-on' : 'bill-show-toggle-off'}>
          <div>
            {bills[billId].description}
            <br/>
            {bills[billId].cost}
            <br/>
            Added by {allUsers[bills[billId].author_id].name} on {bills[billId].created_at}
            <br/>
            Last updated on {bills[billId].updated_at}
            <button>Edit an Expense (Does nothing for now)</button>
          </div>
        </div>
      </div>
    )





  }







};

export default BillShow;