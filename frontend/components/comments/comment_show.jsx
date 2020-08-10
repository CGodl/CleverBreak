import React from 'react';


const CommentBox = ({allUsers, commentId, commentList, deleteComment}) => {

  window.commentList = commentList
  window.commentId = commentId

  if (!commentId || !commentList) {
    return null;
  }
  
  
    return (
      <div>
        {allUsers[commentList[commentId].author_id].name}
        <br/>
        {commentList[commentId].text_body}

        <button onClick={() => deleteComment(commentId)}>Delete Comment</button>
      

      </div>



    )
  }


export default CommentBox;