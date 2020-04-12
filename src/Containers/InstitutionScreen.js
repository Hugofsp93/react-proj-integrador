import React, { useState, useEffect } from 'react'
import Line from '../Components/LineComponent'

import categoriesDb from '../db/categories.json'
import { useHistory } from 'react-router-dom'
import ButtonBack from '../Components/ButtonBackComponent'

export default function Institution(props) {

  const [institution, setInstitution] = useState({})
  let history = useHistory()

  useEffect(() => {
    setInstitution(props.institution)
  }, [])

  const handleBack = () => {
    props.openInstitution({})
  }

  const renderCategories = (categories) => {
    const categoriesFilters = categoriesDb.filter(category =>
      categories.find(f => f === category.value)
    )

    if (categoriesFilters.length > 0) {
      return (
        <div>{
          categoriesFilters.map((category, key) => {
            return (
              <div key={key}>
                {category.value}
              </div>
            )
          })
        }
        </div>
      )
    } else {
      return <i>Nada para doar :( </i>
    }
  }
  return (
    <div className="view">
      <header>
        <section>
          <ButtonBack onClick={handleBack} />
          <h3>{institution.name}</h3>
          <Line />
          <p>{institution.description}</p>
        </section>
      </header>
      <section className="container">
        <p>{institution.address}</p>
        <Line />
        <p>{institution.phone && (institution.phone)}</p>
        <Line />
        <h4>Intens em Falta</h4>
        <div>
          {institution.categories && (renderCategories(institution.categories))}
        </div>
      </section>
    </div>
  )
}