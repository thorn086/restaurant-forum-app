import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import {withRouter} from 'react-router-dom'
import RestForumContext from '../../context'
import RestDis from '../../components/RestDis/RestDis'

class Restpage extends React.Component{
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = RestForumContext
  
  

   
    render(){
       
        return(
            <div className="state_page">
                <h2 className="state_title">Choose your Restaurant</h2>
                <NavBar />
                <div className='rest-nav'>
                    <RestDis />
                </div>
            </div>

        )
    }
}
export default withRouter(Restpage)