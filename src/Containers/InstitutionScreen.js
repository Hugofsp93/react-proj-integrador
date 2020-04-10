import React, { Component } from 'react';

import categories from '../db/categories.json'

class Instituion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: categories
    }
  }

  render() {
    return (
      <div className="view">
        <h2>Instituições</h2>
      </div>
    )
  }
}

export default Home