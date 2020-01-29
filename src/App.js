import React from 'react'
import './App.css'
import Home from './Components/Home'
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from './Components/Shared/Auth/ProtectedRoute'
import Login from './Components/Login'
import NotFound from './Components/Shared/404/404'

function App () {
  return (
    <div className='App'>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>

  )
}

export default App
