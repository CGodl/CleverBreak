export const createFriend = friend => {
  return $.ajax({
    type: 'POST',
    url: 'api/friends',
    data: friend
  })
}

export const destroyFriend = () => {
  return $.ajax({
    type: 'DELETE',
    url: 'api/friends',
  })
}