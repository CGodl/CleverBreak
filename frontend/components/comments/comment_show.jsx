import React from 'react';


const CommentBox = ({allUsers, curUser, commentId, commentList, deleteComment}) => {

  debugger

  if (!commentId || !commentList) {
    return null;
  }
  
  
    return (
      <div>
        {allUsers[commentList[commentId].author_id].name}
        <br/>
        {commentList[commentId].text_body}

        <button className={(curUser === commentList[commentId].author_id) ? 'is-comment-author' : 'not-comment-author'} onClick={() => deleteComment(commentId)}>Delete Comment</button>
      

      </div>



    )
  }


export default CommentBox;