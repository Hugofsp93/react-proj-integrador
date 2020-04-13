import React, { useState, useEffect } from 'react'
import Line from '../Components/LineComponent'

import categoriesDb from '../db/categories.json'
import ButtonBack from '../Components/ButtonBackComponent'
import IconText from '../Components/IconTextComponent'
import SmallCategories from '../Components/SmallCategoriesComponent'
import ButtonHeart from '../Components/ButtonHeartComponent'
import { LocalStorageInstitution as Local } from '../Utils'

export default function Institution(props) {

  const [institution, setInstitution] = useState({})
  const [favoriteActive, setFavoriteActive] = useState(false)

  useEffect(() => {
    setInstitution(props.institution)
    setFavoriteActive(isFavorite())
  }, [])

  const handleBack = () => {
    props.openInstitution({})
  }

  const handlerFavorite = () => {
    const insertOrRemove = Local.insertOrRemove(institution)

    setFavoriteActive(insertOrRemove.name ? true : false)
  }

  const isFavorite = () => {
    return Local.find(props.institution.id).name ? true : false
  }

  const renderCategories = (categories) => {
    const categoriesFilters = categoriesDb.filter(category =>
      categories.find(f => f === category.value)
    )

    if (categoriesFilters.length > 0) {
      return (
        <>{
          categoriesFilters.map((category, key) =>
            <SmallCategories key={key} name={category.name} color={category.color} />
          )
        }
        </>
      )
    } else {
      return <i>Por enquanto não aceita doação </i>
    }
  }

  const renderHeader = () => {
    return (
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

        <ButtonHeart active={favoriteActive.toString()} onClick={handlerFavorite} />
      </header>
    )
  }

  return (
    <div className="view">

      {renderHeader()}

      <section className="container layout-institution">
        <div className="row">
          <IconText text={institution.address} icon="location" />
        </div>
        <Line />
        <div className="row">
          <IconText text={institution.phone && (institution.phone)} icon="phone" />
        </div>
        <Line />

        <h4 className="title-secundary">Itens em Falta</h4>
        <div className="items-categories row">
          {institution.categories && (renderCategories(institution.categories))}
        </div>
      </section>
    </div>
  )
}