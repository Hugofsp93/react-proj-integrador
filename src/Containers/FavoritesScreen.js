import React from 'react';
import ButtonBack from '../Components/ButtonBackComponent'
import institutions from '../db/institutions.json'
import { FaHeart } from "react-icons/fa";
import { useHistory } from "react-router-dom"

export default function Favorites() {

  let history = useHistory()

  const renderHeader = () => {

    return (
      <header className='header-content'>
        <div style={{ position: 'absolute' }}>
          <h1 className="title-main">Favoritos</h1>
        </div>
        <div className='favorite-icon'>
          <FaHeart />
        </div>
        <ButtonBack onClick={() => history.push('/')} />
      </header>
    )
  }


  const renderInstitutions = () => {
    return (
      institutions.map((institution, key) => {
        return (
          <section key={key} className="card-primary">

            <figure>
              <img src={institution.photos[0]} alt={institution.name} />
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


