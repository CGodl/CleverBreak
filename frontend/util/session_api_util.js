export const signup = user => {
  debugger
  return $.ajax({
    type: 'POST',
    url: '/api/users',
    data: { user }
  })
};


export const login = user => {
  debugger
  return $.ajax({
    type: 'POST',
    url: '/api/session',
    data: { user }
  })
};

export const logout = () => {
  debugger
  return $.ajax({
    type: 'DELETE',
    url: '/api/session'
  })
};