import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './Timelines'
import Nav from './Navigation'
import Home from './Containers/HomeScreen'
import About from './Containers/AboutScreen'
import Author from './Containers/AuthorScreen'

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
                <Route path="/author" component={Author} />
                <Route path="/about" component={About} />
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
          {this.header()}
          <section className="mainview">
            {this.main()}
          </section>
          <nav>
            <Nav />
          </nav>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
