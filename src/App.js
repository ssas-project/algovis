import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'

//import Pages
import Home from './pages/Home'
import Error from './pages/Error'
// specific componnent pages
import SortI from './pages/SortInput'
import SortR from './pages/SortRandom'
import Compare from './pages/Compare'
import Lex from './pages/Lex'
import Pfa from './pages/Pfa'

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Router exact path='/'>
          <Home />
        </Router>

        <Route exact path='/sorti'>
          <SortI />
        </Route>

        <Route exact path='/sortr'>
          <SortR />
        </Route>

        <Route exact path='/compare'>
          <Compare />
        </Route>

        <Route exact path='/lex'>
          <Lex />
        </Route>

        <Route exact path='/pfa'>
          <Pfa />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
