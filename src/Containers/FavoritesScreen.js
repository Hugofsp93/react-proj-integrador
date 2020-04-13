import React, { useState, useEffect } from 'react';
import ButtonBack from '../Components/ButtonBackComponent'
import { useHistory } from "react-router-dom"
import ButtonHeart from '../Components/ButtonHeartComponent'
import { LocalStorageInstitution as Local } from '../Utils'

export default function Favorites(props) {

  let history = useHistory()

  const [institutions, setInstitutions] = useState({})
  useEffect(() => {
    setInstitutions(Local.getAll())
  }, [])


  const renderHeader = () => {

    return (
      <header className='header-content'>
        <div style={{ position: 'absolute' }}>
          <h1 className="title-main">Favoritos</h1>
        </div>
        <ButtonHeart active="true" />
        <ButtonBack onClick={() => history.goBack()} />
      </header>
    )
  }
  const renderListEmpty = () => {
    return (
      <section className="list-empty">
        <img src="/images/brokenHeart.svg" alt="" />
        <h3>Você ainda não tem <br />nenhuma insituição favorita</h3>
      </section >
    )
  }

  const renderInstitutions = () => {
    return (
      institutions.length > 0 && (institutions.map((institution, key) => {
        return (
          <section key={key} className="card-primary" onClick={() => props.openInstitution(institution)}>

            <figure>
              <img src={institution.profile} alt={institution.name} />
            </figure>

            <div className="card-primary-content">
              <div className="card-primary-header">
                <h3>{institution.name}</h3>
              </div>
              <hr className="card-primary-line" />
              <div className="card-primary-footer">
                <p className="card-primary-text">{institution.phone[0] || ''}</p>
                <div className="card-primary-badge">123km</div>
              </div>
            </div>

          </section>
        )
      })
      ) || renderListEmpty()
    )
  }

  return (
    <div className="view">
      {renderHeader()}
      <section className="content-institutions">
        {renderInstitutions()}
      </section>
    </div>
  );
}


