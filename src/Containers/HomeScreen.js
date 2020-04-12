import React, { useState } from 'react';

import Map from '../Components/MapComponent'
import BigCategories from '../Components/BigCategoriesComponent'
import categories from '../db/categories.json'

export default function Home() {

  const renderListCategories = () => {
    return (
      categories.map((category, key) => {
        return (<BigCategories name={category.name} color={category.color} key={key} />)
      })
    )
  }

  return (
    <div className="content">
      <div className="content--inner">
        <Map />
        <footer className='content--categories-on-map'>
          {renderListCategories()}
        </footer>
      </div>
    </div>
  )
}

