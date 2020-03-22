import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import RestForumContext from '../../context'
import './StateDis.css'

class StateDis extends React.Component {
    static contextType = RestForumContext
    render() {
        const { states } = this.context;
        return (
            <div>
                <div className='state_list'>
                    <ul className='state-list-items'>
                        {states.map(newState =>
                            <li key={newState.id} className='state-items'>
                                <NavLink className='state-list-link'
                                    to={`/states/${newState.id}`}>
                                    <h2 className='state-name'>
                                        {newState.name}
                                    </h2>
                                </NavLink>
                            </li>
                        )}
                    </ul>
                    <button className='state-btn back-btn ' tag='button' onClick={() => this.props.history.goBack()}>Back</button>

                </div>

            </div>
        )
    }
}
export default withRouter(StateDis)