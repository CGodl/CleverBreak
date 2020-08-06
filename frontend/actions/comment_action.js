import * as commentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const receiveComments = comments => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments
  };
};

const receiveComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};