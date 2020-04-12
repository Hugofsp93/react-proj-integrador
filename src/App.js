import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Navigation'
import Home from './Containers/HomeScreen'
import Favorites from './Containers/FavoritesScreen'
import Institution from './Containers/InstitutionScreen'

export default function App() {
  const [institution, setInstitution] = useState({})

  const openInstitution = (inst) => {
    setInstitution(inst)
  }

  const main = () => {
    return (
      <Switch>
        <Route exact path='/' >
          <Home openInstitution={openInstitution} />
        </Route>
        <Route exact path="/favorites">
          <Favorites openInstitution={openInstitution} />
        </Route>
      </Switch>
    )
  }

  return (
    <Router>
      <div className="app">
        <section className="app--main">
          {main()}
        </section>
        <div className="app--bottom-bar">
          <Nav />
        </div>
      </div>

      {institution.name && (
        <div>
          <div className="overlay" onClick={() => setInstitution({})}></div>
          <div className="modal-page-content">
            <Institution openInstitution={openInstitution} institution={institution} />
          </div>
        </div>
      )}

    </Router>
  )
}