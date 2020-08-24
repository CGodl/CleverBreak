import React from 'react';
import openModal from '../../actions/modal_actions';
import billModal from '../bill/bill_modal_container';
import fetchBill from '../../actions/bill_actions';
import Modal from '../modal/modal_container';
import CommentsIndex from '../comments/comment_container';

class BillShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isButtonActive: false }
    this.toggleBillDisplay = this.toggleBillDisplay.bind(this)
    this.openTheModal = this.openTheModal.bind(this);
  }

  toggleBillDisplay() {
    this.setState({isButtonActive: !this.state.isButtonActive})
  };

  openTheModal(theBill) {
  
    this.props.openModal('editBill', theBill);
  }

  render () {
    const { allUsers, bills, billId, curUser, openModal, deleteBill } = this.props;
    

    return (
      <div className='all-bill-show-container'>
        <button onClick={this.toggleBillDisplay} className='all-expenses-btn'>
          <span className='bill-button-title'>{bills[billId].description}</span>
          {(curUser.id === bills[billId].author_id && bills[billId].author_payor === true) ? <span>{allUsers[bills[billId].recipient_id].name} lent you <div style={{color: "#ff652f"}}>${bills[billId].cost}</div></span> : <span>You lent {allUsers[bills[billId].recipient_id].name} <div style={{color: "lightgreen"}}>${bills[billId].cost}</div></span>}

          <button className='expense-delete-button' onClick={() => this.props.deleteBill(billId)}>X</button> 
        </button>
        <div className={this.state.isButtonActive ? 'bill-show-toggle-on' : 'bill-show-toggle-off'}>
          <div>
            {bills[billId].description}
            <br/>
            ${bills[billId].cost}
            <br/>
            Added by {allUsers[bills[billId].author_id].name} on {bills[billId].created_at}
            <br/>
            Last updated on {bills[billId].updated_at}
            <br/>
            <button className='bill-edit-expense-btn' onClick={() => this.openTheModal(billId)}>Edit expense</button>
            <br/>
            <CommentsIndex 
              billId={billId}
              allUsers={allUsers}
            />
          </div> 
        </div>
      </div>
    )





  }







};

export default BillShow;