import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/About" component={About} />
    <Route exact path="/not-found" component={NotFound} />
  </Switch>
)

export default App
