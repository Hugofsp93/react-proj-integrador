import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Navigation'
import Home from './Containers/HomeScreen'
import Favorites from './Containers/FavoritesScreen'
import Institution from './Containers/InstitutionScreen'
import Profile from './Containers/ProfileScreen'
import Splash from './Containers/SplashScreen'

export default function App() {
  const [institution, setInstitution] = useState({})
  const [splashActive, setSplashActive] = useState(true)

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
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    )
  }
  if (splashActive) {
    setTimeout(() => {
      setSplashActive(false)
    }, 3000)
    return <Splash />
  } else {
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
            <div className="modal-page-content" className="">
              <Institution openInstitution={openInstitution} institution={institution} />
            </div>
          </div>
        )}

      </Router>
    )
  }
}