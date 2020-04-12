import React from 'react';
import ButtonBack from '../Components/ButtonBackComponent'
import institutions from '../db/institutions.json'
import { useHistory } from "react-router-dom"
import ButtonHeart from '../Components/ButtonHeartComponent'

export default function Favorites(props) {

  let history = useHistory()

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


  const renderInstitutions = () => {
    return (
      institutions.map((institution, key) => {
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
    )
  }

  return (
    <div className="view">
      <div className="content">
        <div className="content--inner">
          {renderHeader()}
          <section class="content--institutions">
            {renderInstitutions()}
          </section>
        </div>
      </div>
    </div>
  );
}


