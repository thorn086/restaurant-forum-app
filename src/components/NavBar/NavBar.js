import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-services';

class NavBar extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        window.location.reload()
    }

    renderLogoutLink() {
        return (
            <div className='navigation__item'>
                <li className='navigation__item'>
                    <div className='nav-btn'>
                        <NavLink to='/' className='link-btn'>Home</NavLink>
                    </div>
                </li>
                <li className='navigation__item'>
                    <div className='nav-btn'>
                        <NavLink to='/states' className='link-btn'>States</NavLink>
                    </div>
                </li>
                <li className='navigation__item' onClick={this.handleLogoutClick}>
                    <div className='nav-btn'>
                        <NavLink to='/' className='link-btn'> Logout</NavLink>
                    </div>
                </li>
            </div>
        )
    }
    toggleLoginLink() {
        return (
            <div className='navigation__item'>
                <li className='navigation__item'>
                    <div className='nav-btn'>
                        <NavLink to='/login' className='link-btn'>Login</NavLink>
                    </div>
                </li>
                <li className='navigation__item'>
                    <div className='nav-btn'>
                        <NavLink to='/signup' className='link-btn'>Sign Up</NavLink>
                    </div>
                </li>
                <li className='navigation__item'>
                    <div className='nav-btn'>
                        <NavLink to='/' className='link-btn'>Home</NavLink>
                    </div>
                </li>
            </div>
        )
    }
    render() {
        return (
            <div className='navigation'>
                <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
                <label htmlFor='navi-toggle' aria-label='Menu' className='navigation__button '>
                   <span className=' hiddentext'>Menu</span><span  className='navigation__icon'></span>
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