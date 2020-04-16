import React, { useState } from 'react';

import Map from '../Components/MapComponent'
import BigCategories from '../Components/BigCategoriesComponent'
import categories from '../db/categories.json'
import institutions from '../db/institutions.json'

export default function Home(props) {

  const [places, setPlaces] = useState([])
  const [category, setCategory] = useState(null)

  const setCategoryMarkers = (category) => {
    const filters = institutions.filter(institution =>
      institution.categories.includes(category.value)
    )
    setCategory(category)
    setPlaces(filters)
  }

  const renderListCategories = () => {
    return (
      categories.map((category, key) => {
        return (
          <BigCategories
            name={category.name}
            color={category.color}
            key={key}
            onClick={() => setCategoryMarkers(category)} />)
      })
    )
  }

  return (
    <div className="content">
      <div className="content--inner">
        <Map places={places} openInstitution={props.openInstitution} category={category} />
        <footer className='content--categories-on-map'>
          {renderListCategories()}
        </footer>
      </div>
    </div>
  )
}

