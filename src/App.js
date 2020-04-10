import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Navigation'
import Home from './Containers/HomeScreen'
import Favorites from './Containers/FavoritesScreen'
import Institution from './Containers/InstitutionScreen'

function main() {
  return (
    <Switch>
      <Route exact path='/' > <Home /> </Route>
      <Route exact path="/favorites"> <Favorites /> </Route>
      <Route exact path="/institution/:id"> <Institution /> </Route>
    </Switch>
  )
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <section className="app--main">
          {main()}
        </section>
        <div class="app--bottom-bar">
          <Nav />
        </div>
      </div>
    </Router>
  )
}