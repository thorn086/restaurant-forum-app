import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import RestForumContext from '../../context'
import { getRestByCity } from '../../states-helpers'
import './RestDis.css'

class RestDis extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = RestForumContext

    render() {
        const { id } = this.props.match.params
        const { restaurants } = this.context
        const currentRest = getRestByCity(restaurants, parseInt(id))


        return (
            <div className='state_list'>
                <ul className='state-list-items'>
                    {currentRest.map(newRest =>
                        <li key={newRest.id} className='state-items'>
                            <NavLink className='state-list-link'
                                to={`/restaurant/${newRest.id}`}>
                                <h3 className='state-name'>
                                    {newRest.name}
                                </h3>
                            </NavLink>
                        </li>
                    )}
                </ul>
                <button className=' back-btn' tag='button' onClick={() => this.props.history.goBack()}>Back</button>
                <button className=' back-btn' tag='button' >Add Restaurant</button>

            </div>
        )
    }
}
export default withRouter(RestDis)