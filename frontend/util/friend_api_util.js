export const createFriend = friend => {
  return $.ajax({
    type: 'POST',
    url: '/api/friends',
    data: { friend }  //Pulling from backend
  })
};

export const destroyFriend = (friendId) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/friends/${friendId}`,
  })
};

export const getFriend = id => {
  return $.ajax ({  
    type: 'GET',
    url: `/api/friends/${id}`
  })
};

export const getFriends = () => {

  return $.ajax ({  
    type: 'GET',
    url: '/api/friends'
  })
};