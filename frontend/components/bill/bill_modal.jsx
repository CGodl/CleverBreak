import React from 'react';



class BillPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'Enter a Description',
      author_payor: true,
      cost: '',
      recipient_id: '',
      group_id: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleBoolean = this.toggleBoolean.bind(this);
  };



  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const bill = Object.assign({}, this.state);
    console.log(bill);
    this.props.addBill(bill).then(this.props.closeModal);
  };

  toggleBoolean(e) {
    e.preventDefault();
    
    switch (this.state.author_payor) {
      case true:
        this.setState({author_payor: false})
        console.log(this.state.author_payor);
        break;
      case false:
        this.setState({author_payor: true})
        console.log(this.state.author_payor)
        break;
      default:
        break;
    }
  }




  render () {
    const { friends, closeModal } = this.props;
    console.log(friends)
    
      return (
        <form className='bill-modal-container' onSubmit={this.handleSubmit}>
          <p>Add an expense</p>
          <label>With you and:
            <input 
              type='text'
              value={this.state.recipient_id}
              onChange={this.update('recipient_id')}
              />
          </label>
          <label>
            <input 
              type='text'
              value={this.state.description}
              onChange={this.update('description')}
              />
          </label>
          <label>$
            <input 
              type='text'
              value={this.state.cost}
              onChange={this.update('cost')}
              />
          </label>
      <p>Paid by <button className='payor-btn' onClick={this.toggleBoolean}>{this.state.author_payor ? 'You' : (this.state.recipient_id ? friends[this.state.recipient_id].name : 'No Name Provided')}</button></p>
          {/* <label>Enter a group, if any:
            <input 
              type='text'
              value={this.state.group_id}
              onChange={this.update('group_id')}
              />
          </label> */}

          <button onClick={closeModal}>Cancel</button>
          <button>Save</button>
        </form>

    );

      }



}




export default BillPage;