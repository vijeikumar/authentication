// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const onLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="logout-container">
      <button type="button" className="log-out-button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
