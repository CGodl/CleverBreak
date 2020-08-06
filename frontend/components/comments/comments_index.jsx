import React from 'react';



//Add billId to compare
//CHeck map

class CommentsIndex extends React.Component {
  constructor(props) {

  }

  render () {
    const { billId } = this.props;


    return (
      <div className='comments-index-container'>
         <ul>
            {
              commentsList.map(comment => ( 
                  <li key={  }>

                    {/* <button onClick={() => this.props.deleteBill(comment.id)}>X</button> */}
                  </li>
          
              ))
            }
        </ul>






      </div>


    )


  }


}