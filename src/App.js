import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './Timelines'
import Nav from './Navigation'
import Home from './Containers/HomeScreen'
import Favorites from './Containers/FavoritesScreen'

class App extends Component {

  header() {
    return (
      <img src="images/nomeadorodoar.png" className="App-name" alt="name" />
    )
  }

  main() {
    return (
      <Route render={({ location }) => {
        const { pathname, key } = location;
        return (
          <TransitionGroup component={null}>
            <Transition
              key={key}
              appear={true}
              onEnter={(node, appears) => play(pathname, node, appears)}
              onExit={(node, appears) => exit(node, appears)}
              timeout={{ enter: 750, exit: 150 }}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/favorites" component={Favorites} />
              </Switch>
            </Transition>
          </TransitionGroup>
        )
      }} />)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          {/* {this.header()} */}
          <section className="app--main">
            {this.main()}
          </section>
          <div class="app--bottom-bar">
            <Nav />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
