import React from 'react'
import {NavLink} from 'react-router-dom'
import './Title.css'
//import TokenService from '../../services/token-services'

class Title extends React.Component {
    /*renderLogedOut(){
        return(
            <button className='wine-btn btn-white btn-animated'>
            <Link to='/login' style={{ textDecoration:'none', color:'black',fontFamily: 'Sriracha cursive',padding:'20px'}}>Login</Link>
        </button>
        )
    }*/
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
                {this.renderLogin()}
                <div className='site-description'>
                    <p>Join the site that offers quick information about Restaurants. Here our users will provide you with information about restaurants in cities they have been. 
                         If you're new to the site create an account or take a look inside by clicking on the LOGIN button above and use our test user.</p>
                </div>
            </div>
        )
    }
}
export default Title;