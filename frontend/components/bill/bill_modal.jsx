import React from 'react';



class BillPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      cost: '',
      recipient_id: '',
      group_id: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const bill = Object.assign({}, this.state);
    this.props.addBill(bill).then(this.props.closeModal);
  };




  render () {
    const { closeModal } = this.props;

      return (
        <form className='bill-modal-container' onSubmit={this.handleSubmit}>
          <p>Add an expense</p>
          <label>With you and:
            <input 
              type='text'
              value={this.state.group_id}
              onChange={this.update('group_id')}
              />
          </label>
          <label>Enter a Description:
            <input 
              type='text'
              value={this.state.description}
              onChange={this.update('description')}
              />
          </label>
          <label>Enter a cost:
            <input 
              type='text'
              value={this.state.cost}
              onCHange={this.update('cost')}
              />
          </label>

          <button onClick={closeModal}>Cancel</button>
          <button>Save</button>
        </form>

    );

      }



}




export default BillPage;