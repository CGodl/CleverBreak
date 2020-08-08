import React from 'react';



//Add billId to compare
//CHeck map

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props)

  }
  
  // componentWillMount() {
  //   this.props.fetchComments();
  // };

  render () {
    const { billId, commentsList } = this.props;

    if (!billId || !commentsList) {
      return null
    }
    console.log('test')
    console.log(commentsList)


    return (
      <div className='comments-index-container'>
         <ul>
            {
              commentsList.filter(comment => ( 
                  <li >
                    {comment}

                    {/* <button onClick={() => this.props.deleteBill(comment.id)}>X</button> */}
                  </li>
          
              ))
            }
        </ul>






      </div>


    )


  }


}

export default CommentsIndex