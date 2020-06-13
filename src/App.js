import React from 'react'
import Shipments from './Components/Shipments'
import AddShipment from './Components/AddShipment'
import UpdateShipment from './Components/UpdateShipment'
import TrackShipment from './Components/TrackShipment'

import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from './Components/Shared/Auth/ProtectedRoute'
import Login from './Components/Login'
import NotFound from './Components/Shared/404/404'

function App () {
  return (
    <div className='App'>
      <Switch>
        <ProtectedRoute exact path='/' component={Shipments} />
        <ProtectedRoute exact path='/add-shipment' component={AddShipment} />
        <ProtectedRoute exact path='/update-shipment/:id' component={UpdateShipment} />
        <ProtectedRoute exact path='/track-shipment/' component={TrackShipment} />
        <Route path='/login' component={Login} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>

  )
}

export default App
