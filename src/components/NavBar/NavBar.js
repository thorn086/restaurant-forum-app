import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import TokenService from '../../services/token-services'

class NavBar extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        window.location.reload();
    }

    renderLogoutLink() {
        return (
            <div className='navigation__item'>
                <li className='navigation__item' onClick={this.handleLogoutClick}>
                    <button className='nav-btn'>
                        <NavLink to='/' className='link-btn'> Logout</NavLink>
                    </button>
                </li>
                <li className='navigation__item'>
                    <button className='nav-btn'>
                        <NavLink to='/' className='link-btn'>Home</NavLink>
                    </button>
                </li>
            </div>
        )
    }
    toggleLoginLink() {
        return (
            <div className='navigation__item'>
                <li className='navigation__item'>
                    <button className='nav-btn'>
                        <NavLink to='/login' className='link-btn'>Login</NavLink>
                    </button>
                </li>
                <li className='navigation__item'>
                    <button className='nav-btn'>
                        <NavLink to='/signup' className='link-btn'>Sign Up</NavLink>
                    </button>
                </li>
                <li className='navigation__item'>
                    <button className='nav-btn'>
                        <NavLink to='/' className='link-btn'>Home</NavLink>
                    </button>
                </li>
                <li className='navigation__item'>
                    <button className='nav-btn'>
                        <NavLink to='/state' className='link-btn'>State</NavLink>
                    </button>
                </li>
            </div>
        )
    }
    render() {
        return (
            <div className='navigation'>
                <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
                <label htmlFor='navi-toggle' className='navigation__button'>
                    <span className='navigation__icon'></span>
                </label>
                <div className='navigation__backgroud'>&nbsp;</div>

                <nav className='navigation__nav'>
                    <ul className='navigation__list'>
                        {TokenService.hasAuthToken()
                            ? this.renderLogoutLink()
                            : this.toggleLoginLink()}
                    </ul>
                </nav>
            </div>
        )
    }
}
export default NavBar