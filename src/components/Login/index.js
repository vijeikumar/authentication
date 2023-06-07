// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const JwtToken = Cookies.get('jwt_token')
  if (JwtToken !== undefined) {
    return <Redirect to="/" />
  }
  const goToHome = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30, path: '/'})
    history.replace('/')
  }
  const onLogIn = async () => {
    const userDetails = {username: 'Rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      goToHome(data.jwt_token)
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button className="login-button" type="button" onClick={onLogIn}>
        Log in with sample credits
      </button>
    </div>
  )
}
export default Login
