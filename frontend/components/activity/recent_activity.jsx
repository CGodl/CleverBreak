import React from 'react';



class RecentActivity extends React.Component {
  constructor(props) {
    super(props)
  }



  render () {
    const { curUserBills } = this.props;


    return (
      <div className='recent-activity-main-container'>

        <ul>
            {
              curUserBills.map(bill => (
                <li> {bill}</li>
              ))
            }
        </ul>


        





      </div>
    )


  }

  



};