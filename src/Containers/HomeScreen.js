import React, { Component } from 'react';

import Map from '../Components/MapComponent'

class Home extends Component {

  render() {
    return (
      <div className="view">
        <div className="content">
          <div className="content--inner">
            <Map />
          </div>
        </div>
      </div>
    )
  }
}

export default Home