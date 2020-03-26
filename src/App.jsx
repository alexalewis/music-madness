import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import KhruangbinPage from './pages/KhruangbinPage'
import GlassAnimalsPage from './pages/GlassAnimalsPage'
import HozierPage from './pages/HozierPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/HomePage" component={HomePage}></Route>
        <Route exact path="/Khruangbin" component={KhruangbinPage}></Route>
        <Route exact path="/GlassAnimals" component={GlassAnimalsPage}></Route>
        <Route exact path="/Hozier" component={HozierPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
