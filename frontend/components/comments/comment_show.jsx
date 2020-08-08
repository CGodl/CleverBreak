import React from 'react';


const CommentBox = ({commentId, commentList}) => {

  window.commentList = commentList
  window.commentId = commentId

  if (!commentId || !commentList) {
    return null;
  }
  console.log(commentList)
  
  
    return (
      <div>
        {commentList[commentId].author_id}
      





      </div>



    )
  }


export default CommentBox;