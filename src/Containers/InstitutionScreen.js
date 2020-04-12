import React, { useState, useEffect } from 'react'
import Line from '../Components/LineComponent'

import categoriesDb from '../db/categories.json'
import ButtonBack from '../Components/ButtonBackComponent'
import IconText from '../Components/IconTextComponent'

export default function Institution(props) {

  const [institution, setInstitution] = useState({})

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
        <>{
          categoriesFilters.map((category, key) => {
            return (
              <div key={key}>
                {category.value}
              </div>
            )
          })
        }
        </>
      )
    } else {
      return <i>Por enquanto não aceita doação </i>
    }
  }
  return (
    <div className="view">
      <header className="header-content-primary">
        <ButtonBack onClick={handleBack} />
        <section className="card-header">

          <figure>
            <img src={institution.profile} alt={institution.name} />
          </figure>

          <div className="card-header-content">
            <div className="card-header-header">
              <h3>{institution.name}</h3>
            </div>
            <Line />
            <div className="card-header-footer">
              <p className="card-header-text">{institution.description || ''}</p>
            </div>
          </div>

        </section>
      </header>
      <section className="container">
        <div className="row">
          <IconText text={institution.address} icon="location" />
        </div>
        <Line />
        <div className="row">
          <IconText text={institution.phone && (institution.phone)} icon="phone" />
        </div>
        <Line />
        <h4>Intens em Falta</h4>
        <div>
          {institution.categories && (renderCategories(institution.categories))}
        </div>
      </section>
    </div>
  )
}