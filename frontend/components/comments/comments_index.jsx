import React from 'react';
import CommentBox from './comment_show';


class CommentsIndex extends React.Component {
  constructor(props) {
    super(props)

  }
  
  componentWillMount() {
    this.props.fetchComments();
  };

  render () {
    const { billId, commentIdList, commentList } = this.props;

    if (!billId || !commentIdList || !commentList) {
      return null
    }

    return (
      <div className='comments-index-container'>
        <p>LETS SEE</p>
         {/* <ul>
            {
              commentIdList.map(commentId => ( 
                  <li >
                    PICKLE
                    {/* <CommentBox 
                      commentId = {commentId}
                      // currentComment = {commentList[commentId]}
                    /> */}
        
                  {/* </li>
          
              ))
            }
        </ul> */}
      </div>
    )
  }
}

export default CommentsIndex;