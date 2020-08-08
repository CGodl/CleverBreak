import React from 'react';
import { connect } from 'react-redux';
import { addComment, fetchComments, deleteComment } from '../../actions/comment_action';
import CommentsIndex from './comments_index';


const mSTP =( state, ownProps) => {

  return {
    // commentsList: Object.values(state.entities.comments)
    

  }
}

const mDTP = dispatch => {

  return {
    addComment: (comment) => dispatch(addComment(bill)),
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: (comment) => dispatch(deleteComment(comment))
  }
}

export default connect(mSTP, mDTP)(CommentsIndex);