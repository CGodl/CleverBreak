import React from 'react';
import CommentBox from './comment_show';


class CommentsIndex extends React.Component {
  constructor(props) {
    super(props)

  }
  
  componentWillMount() {
    this.props.fetchComments();
  };
//STUCK HERE. CANT GET ALL VALUES OF THE COMMENT TO LOAD
  render () {
    const { billId, commentIdList, commentList } = this.props;

    if (!billId || !commentIdList || !commentList) {
      return null
    }
    // console.log(commentList)
  
    return (
      <div className='comments-index-container'>
         <ul>
            {
              commentIdList.map(commentId => ( 
                  <li key={commentId}>

                    <CommentBox 
                      commentId={commentId}
                      commentList={commentList}
                    />
        
                  </li>
          
              ))
            }
        </ul>
      </div>
    )
  }
}

export default CommentsIndex;