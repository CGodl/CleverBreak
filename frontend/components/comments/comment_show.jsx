import React from 'react';


const CommentBox = ({commentId, commentList}) => {
  console.log(commentList)
  // window.commentList = commentList

  if (!commentId || !commentList) {
    return null;
  }
  
    return (
      <div>
        <p>{commentList[commentId]}</p>
      





      </div>



    )
  }


export default CommentBox;