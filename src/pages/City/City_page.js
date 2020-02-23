import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import {withRouter} from 'react-router-dom'
import RestForumContext from '../../context'
import CityDis from '../../components/CityDis/CityDis'

class City extends React.Component{
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = RestForumContext

  

   
    render(){
       
        return(
            <div className="state_page">
                <h2 className="state_title">Choose your City</h2>
                <NavBar />
                <div className='city-nav'>
                    <CityDis />
                </div>
            </div>

        )
    }
}
export default withRouter(City)