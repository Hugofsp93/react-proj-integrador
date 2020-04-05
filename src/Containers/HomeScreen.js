import React, { Component } from 'react';

import Map from '../Components/MapComponent'
import BigCategories from '../Components/BigCategoriesComponent'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          name: "Higiene PEssoal",
          value: 'higiene',
          color: '#1890FC'
        },
        {
          name: "Dinheiro",
          value: 'money',
          color: '#D847F3'
        },
        {
          name: "Higiene PEssoal",
          value: 'higiene',
          color: '#C5FD39'
        },
        {
          name: "Roupa",
          value: 'higiene',
          color: '#FEAA3A'
        },
        {
          name: "Comida",
          value: 'higiene',
          color: '#990000'
        },
        {
          name: "Higiene PEssoal",
          value: 'higiene',
          color: '#990000'
        },
        {
          name: "Higiene PEssoal",
          value: 'higiene',
          color: '#990000'
        },
        {
          name: "Higiene PEssoal",
          value: 'higiene',
          color: '#990000'
        },
        {
          name: "Higiene PEssoal",
          value: 'higiene',
          color: '#990000'
        },
      ]
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