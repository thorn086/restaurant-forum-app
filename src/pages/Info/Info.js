import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import RestForumContext from '../../context';
import TokenService from '../../services/token-services';
import { findRestaurant, findState } from '../../states-helpers';
import NavBar from '../../components/NavBar/NavBar';
import config from '../../config';
import MiscApiServices from '../../services/api-misc-services';
import './Info.css';

class Info extends React.Component {
    static contextType = RestForumContext
    // get all restaurants in the city of the state selected
    componentDidMount() {
        MiscApiServices.getAllStates()
            .then(states => {
                this.context.addStates(states);
            })
            .catch(error => {
                console.log(error);
            });
        MiscApiServices.getAllRestaurants()
            .then(restaurants => {
                this.context.addRestaurants(restaurants);
            })
            .catch(error => {
                console.log(error);
            });
    }
    //delete handler
    handleDeleteRestaurant = event => {
        event.preventDefault()
        const { id } = this.props.match.params;

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
                this.context.deletedRestaurant(id);

            })
            .catch(error => {
                console.log({ error });
            })
    }

    render() {
        //if statement to see if information loaded and that information is present
        const { id } = this.props.match.params;
        const { restaurants = [], states = [] } = this.context;
        const myRest = findRestaurant(restaurants, parseInt(id))
        if (restaurants.length === 0 || states.length === 0) {
            return (
                <div>
                    <p>Loading</p>
                </div>
            );
        } else if (myRest === undefined) {
            return (
                <div className='rest-info'>
                    <NavBar />
                    <div className='state-items info'>
                        <h2 className='rest-info-title'>
                            OOPS......
                            </h2>
                    </div>
                    <p className='rest-info-loc caps'>
                        Your Restaurant no Longer exists, Please Start Over or Go Back.
                    </p>

                    <button className=' back-btn info' tag='button' onClick={() => this.props.history.goBack()}>Back</button>
                    <div className='back-btn info'>
                        <NavLink to='/' className='home-btn'>Home</NavLink>
                    </div>
                </div>
            );
        } else {
            const { state_id } = myRest
            const [newState] = findState(states, state_id)
            return (
                <div className='rest-info'>
                    <NavBar />

                    <div className='rest-info-main'>
                        <h1 className='rest-info-title'>
                            {myRest.name}
                        </h1>
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
                        <p className='info-label'>Edited by User:</p>
                        <p>{myRest.author}</p>

                    </div>

                    <NavLink to={'/states'}><button className=' back-btn info' tag='button'>States</button></NavLink>
                    <NavLink to={`/editrestaurant/${this.props.match.params.id}`}>
                        <button className=' back-btn info' tag='button' >Update</button>
                    </NavLink>
                    <button className='back-btn info' type='button' onClick={this.handleDeleteRestaurant}>Delete</button>

                </div>
            );
        }
    }
}
export default withRouter(Info)
