import React, { Component } from 'react';

import Map from '../Components/MapComponent'
import BigCategories from '../Components/BigCategoriesComponent'
import categories from '../db/categories.json'
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: categories
    }
  }

  renderListCategories() {
    return (
      this.state.categories.map((category, key) => {
        return (<BigCategories name={category.name} color={category.color} key={key} />)
      })
    )
  }

  render() {
    return (
      <div className="view">
        <div className="content">
          <div className="content--inner">
            <Map />
            <footer className='content--categories-on-map'>
              {this.renderListCategories()}
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default Home