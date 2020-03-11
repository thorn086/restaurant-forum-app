import React from 'react'
import {NavLink} from 'react-router-dom'
import './Title.css'
import TokenService from '../../services/token-services'

class Title extends React.Component {
    renderLogedOut(){
        return(
            <div>
            <NavLink to='/login' className='link-btn'>Login</NavLink>
        </div>
        )
    }
    renderLogin=()=>{
    return(
        <div>
        <NavLink to='/states' className='link-btn'>States</NavLink>
    </div>
    )
    }
    render() {
        return (
            <div className='text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-main'>
                     Restaurant Forum</span>
                </h1>
                {TokenService.hasAuthToken() 
                    ? this.renderLogin()
                    : this.renderLogedOut()}
                <div className='site-description'>
                    <p>Join the site that offers quick information about Restaurants. Here our users will provide you with information about restaurants in cities they have been. 
                         If you're new to the site create an account or take a look inside by clicking on the LOGIN button above and use our test user.</p>
                </div>
            </div>
        )
    }
}
export default Title;