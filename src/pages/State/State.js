import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import {withRouter} from 'react-router-dom'
import RestForumContext from '../../context'
import StateDis from '../../components/StateDis/StateDis'
import './State.css'
class State extends React.Component{
    static defaultProps = {
        match: {
          params: {}
        }
    }
    static contextType = RestForumContext

  

   
    render(){
       
        return(
            <div className="state_page">
                <h2 className="state_title">Restaurant Forum by State</h2>
                <NavBar />
                <div className='state-nav'>
                    <StateDis />
                </div>
            </div>

        )
    }
}
export default withRouter(State)