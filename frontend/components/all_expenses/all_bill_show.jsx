import React from 'react';


class BillShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { bills, allUsers, curUserBillIds, billId } = this.props
    return (
      <div className='all-bill-show-container'>
        <div>
          {bills[billId].description}
          <br/>
          {bills[billId].cost}
          <br/>
          Added by {allUsers[bills[billId].author_id].name} on {bills[billId].created_at}
        </div>
        <div>

        </div>

      </div>




    )





  }







};

export default BillShow;