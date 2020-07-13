

export const createBill = bill => {

  return $.ajax({
    type: 'POST',
    url: '/api/bills',
    data: { bill }
  })
};

export const destroyBill = () => {

  return $.ajax({
    type: 'DELETE',
    url: '/api/bills',
  })
}

export const fetchAllBills = () => {
  debugger
  return $.ajax({
    type: 'GET',
    url: '/api/bills'

  })

}