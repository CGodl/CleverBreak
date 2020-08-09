import React from 'react';


const CommentBox = ({commentId, commentList, deleteComment}) => {

  window.commentList = commentList
  window.commentId = commentId

  if (!commentId || !commentList) {
    return null;
  }
  console.log(commentList)
  
  
    return (
      <div>
        {commentList[commentId].text_body}

        <button onClick={() => deleteComment(commentId)}>Delete Comment</button>
      

      </div>



    )
  }


export default CommentBox;