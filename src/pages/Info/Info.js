import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import RestForumContext from '../../context'
import TokenService from '../../services/token-services'
import { findRestaurant, findState } from '../../states-helpers'
import NavBar from '../../components/NavBar/NavBar'
import config from '../../config'
import MiscApiServices from '../../services/api-misc-services'
import './Info.css'

class Info extends React.Component {
    static contextType = RestForumContext

    componentDidMount() {
        MiscApiServices.getAllStates()
            .then(states => {
                console.log('inside the state fetch', states)
                this.context.addStates(states)
            })
            .catch(error => {
                console.log(error)
            })
        MiscApiServices.getAllRestaurants()
            .then(restaurants => {
                console.log('inside the restaurants fetch', restaurants)
                this.context.addRestaurants(restaurants)
            })
            .catch(error => {
                console.log(error)
            })
    }
    handleDeleteRestaurant = event => {
        event.preventDefault()
        const { id } = this.props.match.params

        fetch(`${config.API_ENDPOINT}/restaurant/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(result => {
                if (!result.ok)
                    return result.json().then(event => Promise.reject(event))
            })
            .then(() => {
                this.context.deletedRestaurant(id)

            })
            .catch(error => {
                console.log({ error })
            })
    }

    render() {

        const { id } = this.props.match.params
        const { restaurants = [], states = [] } = this.context
        const myRest = findRestaurant(restaurants, parseInt(id))
        if (restaurants.length === 0 || states.length === 0) {
            return (
                <div>
                    <p>Loading</p>
                </div>
            )
        } else if (myRest === undefined) {
            return (
                <div className='rest-info'>
                    <NavBar />
                    <div className='state-items'>
                        <h2 className='rest-info-title'>
                            OOPS......
                            </h2>
                    </div>
                    <p className='rest-info-loc caps'>
                        Your Restaurant no Longer exists, Please Start Over or Go Back.
                    </p>

                    <button className=' back-btn' tag='button' onClick={() => this.props.history.goBack()}>Back</button>
                    <div className='back-btn'>
                        <NavLink to='/'className='home-btn'>Home</NavLink>
                    </div>
                </div>
            )
        } else {

            console.log('this is in state', restaurants, states)


            const { state_id } = myRest
            const [newState] = findState(states, state_id)
            console.log('this is newState', newState)
            return (
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
                    <NavLink to={`/editrestaurant/${this.props.match.params.id}`}>
                        <button className=' back-btn' tag='button' >Update</button>
                    </NavLink>
                    <button className='back-btn' type='button' onClick={this.handleDeleteRestaurant}>Delete</button>

                </div>
            )
        }
    }
}
export default withRouter(Info)
