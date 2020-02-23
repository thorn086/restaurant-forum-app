import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import RestForumContext from '../../context'
import './CityDis.css'
import {getCitiesByState} from '../../states-helpers'

class CityDis extends React.Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = RestForumContext
 
    render() {
        const {id} = this.props.match.params
        const { city } = this.context
       const currentCity = getCitiesByState(city, parseInt(id))
      
       
        
 return (
            <div className='state_list'>
                <ul className='state-list-items'>
                    {currentCity.map(newCity =>
                        <li key={newCity.id} className='state-items'>
                            <NavLink className='state-list-link'
                                to={`/city/${newCity.id}`}>
                                <h3 className='state-name'>
                                    {newCity.name}
                                </h3>
                            </NavLink>
                        </li>
                    )}
                </ul>
                <button className=' back-btn' tag='button' onClick={() => this.props.history.goBack()}>Back</button>
                <button className=' back-btn' tag='button'>Add City</button>

            </div>
        )
    }
}
export default withRouter(CityDis)