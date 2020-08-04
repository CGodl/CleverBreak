

export const createComment = comments => {

  return $.ajax({
    type: 'POST',
    url: '/api/comments',
    data: { comments } //Needs to match
  });

}

export const destroyComment = (commentId) => {

  return $.ajax({
    type: 'DELETE',
    url: `/api/comments/${billId}`
  })
};