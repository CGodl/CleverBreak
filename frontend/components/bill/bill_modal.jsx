import React from 'react';

function BillPage({modal, closeModal}) {
 
  return (
      <div className='bill-modal-container'>
          <p>Add an expense</p>
          <p>With you and:</p>
          <p>Enter a Description:</p>
          <p>Enter a cost:</p>
          <button>Cancel</button>
          <button>Save</button>
      </div>

  );
}

export default BillPage;