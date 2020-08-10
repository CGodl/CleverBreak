import React from 'react';
import { connect } from 'react-redux';
import { addComment, fetchComments, deleteComment } from '../../actions/comment_action';
import CommentsIndex from './comments_index';


const mSTP = (state, ownProps) => {
  const commentList = state.entities.comments;
  console.log("state below")
  console.log(state)
  console.log("TEA")

  console.log(ownProps)

  return {
    commentIdList: state.entities.bills[ownProps.billId].commentIds,
    commentList
  }
}

const mDTP = dispatch => {

  return {
    addComment: (comment) => dispatch(addComment(comment)),
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: (comment) => dispatch(deleteComment(comment))
  }
}

export default connect(mSTP, mDTP)(CommentsIndex);