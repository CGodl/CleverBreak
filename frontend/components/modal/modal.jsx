import React from 'react';
import BillPage from '../bill/bill_modal'

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let currentModalComponent;
  switch (modal) {
    case 'bill':
      currentModalComponent = <BillPage />;
      break;
    default:
      return null;
  }


  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { currentModalComponent }
      </div>
    </div>
  );
}

export default Modal;

