// Write your JS code here

import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <ul className="nav-container">
      <li className="nav-container">
        <Link className="nav-link" to="/Home">
          Home
        </Link>
      </li>
      <li className="nav-container">
        <Link className="nav-link" to="/About">
          About
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
