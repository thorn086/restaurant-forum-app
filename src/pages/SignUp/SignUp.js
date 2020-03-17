import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './SignUp.css'
import ApiAuthService from '../../services/api-auth-service'


class SignUp extends React.Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        }
    }

    state = { error: null }

    handleRegistrationSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/login'
        history.push(destination)
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const { first_name, last_name, email, password } = e.target
        ApiAuthService.postUser({
            first_name: first_name.value,
            last_name: last_name.value,
            user_email: email.value,
            password: password.value
        })
            .then(res => {
                first_name.value = ''
                last_name.value = ''
                email.value = ''
                password.value = ''
                this.handleRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    };
    handleInccorectLogin() {
        if (this.state.error === null) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className='error-message'>
                    <strong>
                        {this.state.error}
                    </strong>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='signup-title'>
                <h2 className='state_title'>Sign Up Here</h2>

                <div className='signup-form'>
                    <NavBar />

                    <form className='signup-form-box' onSubmit={this.handleSubmit} >

                        <div className='signup-password-req'>
                            <strong>
                                Important Password requirements:<br />
                                Must be between 8 and 50 characters<br />
                                Must not begin or end with a space<br />
                                Must contain an uppercase, lowercase, number and special character
                  </strong>
                        </div>
                        <div className='signup-field'>
                            <label
                                htmlFor='first_name'
                                className='signup_label'
                            >First Name</label>
                            <input
                                className='signup_input'
                                type='text'
                                name='first_name'
                                id='first_name'
                                placeholder='First Name'
                                required
                            />
                        </div>
                        <div className='signup-field'>
                            <label
                                htmlFor='last_name'
                                className='signup_label'
                                required
                            >Last Name</label>
                            <input
                                className='signup_input'
                                type='text'
                                name='last_name'
                                id='last_name'
                                placeholder='Last Name'
                                required
                            />
                        </div>
                        <div className='signup-field'>
                            <label
                                htmlFor='email'
                                className='signup_label'
                            >Email Address</label>
                            <input
                                className='signup_input'
                                type='text'
                                name='email'
                                id='email'
                                placeholder='Email'
                                required
                            />
                        </div>
                        <div className='signup-field'>
                            <label
                                htmlFor='password'
                                className='signup_label'
                            >Password</label>
                            <input
                                className='signup_input'
                                type='password'
                                name='password'
                                id='password'
                                placeholder='Password'
                                required
                            />
                        </div>
                        <div className='button-box' >
                            <button className='back-btn submit' type='submit' value='SignUp'>
                                Sign Up
                        </button>
                            <button className=' back-btn submit' tag='button' onClick={() => this.props.history.goBack()}>Back</button>
                        </div>
                        {this.handleInccorectLogin()}
                    </form>
                </div>
            </div>
        )
    };

}
export default SignUp

