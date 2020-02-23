import React from 'react'
import {withRouter} from 'react-router-dom'
import RestForumContext from '../../context'
import {findRestaurant, findState} from '../../states-helpers'
import NavBar from '../../components/NavBar/NavBar'
import './Info.css'

class Info extends React.Component{
    static contextType=RestForumContext
    render(){
        const {id}= this.props.match.params
        const {restaurants, states}=this.context
        const myRest = findRestaurant(restaurants, parseInt(id))
        const {stateId} = myRest
        const newState = findState(states, stateId )
        return(
            <div className='rest-info'>
                <NavBar />
                <div className='info-box'>
                <div className='state-items'>
                <h2 className='rest-info-title'>
                        {myRest.name}
                </h2>
                </div>
                <div className='rest-info-loc'>
                    <p className='info-label'>Address:</p>
                       <p> {myRest.address}</p>
                       <p className='info-label'>State:</p>
                       <p>{newState.name}</p>
                       <p className='info-label'>Phone:</p>
                        <p>{myRest.phone}</p>
                        <p className='info-label'>Comments:</p>
                        <p>{myRest.comments}</p>

                </div>
                </div>
                <button className=' back-btn' tag='button' onClick={() => this.props.history.goBack()}>Back</button>
                <button className=' back-btn' tag='button' >Update</button>

            </div>
        )
    }
}
export default withRouter(Info)
