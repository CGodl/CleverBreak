

export const createBill = bills => {

  return $.ajax({
    type: 'POST',
    url: '/api/bills',
    data: { bills } //Needs to match
  })
};

export const destroyBill = () => {

  return $.ajax({
    type: 'DELETE',
    url: '/api/bills',
  })
};

export const updateBill = (bill) => {

  return $,ajax({
    type: 'PATCH',
    url: `/api/bills/${bill.id}`,
    data: { bill }

  })

}

export const fetchAllBills = () => {

  return $.ajax({
    type: 'GET',
    url: '/api/bills'

  })

};