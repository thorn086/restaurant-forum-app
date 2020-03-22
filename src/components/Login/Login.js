import React from 'react';
import './Login.css';
import restForumContext from '../../context';
import NavBar from '../../components/NavBar/NavBar';
import TokenService from '../../services/token-services';
import ApiAuthService from '../../services/api-auth-service';
class Login extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  }
  state = {error: null }
  static contextType = restForumContext

  handleLoginSuccess = (email, userId) => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/states'
    history.push(destination)
    this.context.userInfo({ email, userId })

  };
  //checks user has authorization to enter site
  handleSubmitWithAuth = e => {
    e.preventDefault()
    this.setState({ error: null });
    const { email, password } = e.target
    ApiAuthService.postLogin({
      user_email: email.value,
      password: password.value
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        TokenService.saveUserId(res.userId)
        this.handleLoginSuccess(email.value, res.userId)
        email.value = ''
        password.value = ''
      })
      .catch(res => {
        this.setState({ error: res.error });
      })
  };

  //validates information is correct and displays to DOM
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
      <div className='login-form'>
        <h2 className='state_title'>Login Form</h2>
        <NavBar />
        <div className='state_list'>
          <form
            id='log-in'
            onSubmit={this.handleSubmitWithAuth}
          >
            <div className="login-info-loc">
              <div className='username-login'>
                <div className='login_demo-creds'>
                  <strong>
                    Demo credentials: restapp@gmail.com / Food@ful1#
                  </strong>
                </div>
                <label htmlFor='username-login'>Email Address</label>
                <input type='email' name='email' id='username-login' required />
              </div>
              <div className='password-login'>
                <label htmlFor='password-login'>Password</label>
                <input type='password' name='password' id='password-login' required />
              </div>
              <div>
              </div>
              {this.handleInccorectLogin()}
            </div>
            <button className='back-btn' type='submit' value='LogIn'>
              Log In
                </button>
            <button className='back-btn' tag='button' onClick={() => this.props.history.goBack()}>Back</button>



          </form>
        </div>
      </div>

    )
  };

}
export default Login