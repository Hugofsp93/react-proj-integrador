import React, { useState } from 'react';
import Line from '../Components/LineComponent';

export default function Profile() {

  return (
    <div className="view">
      <header className="collapse">
        <h3 className="title-main">Perfil</h3>
      </header>

      <section className="content-inner">
        <div className="item-line">
          <p>Termos de uso</p>
          <Line />
        </div>
        <div className="item-line">
          <p>Regras do projeto</p>
          <Line />
        </div>
        <div className="item-line">
          <p>Entenda para que serve</p>
          <Line />
        </div>
        <div className="item-line">
          <p>Como posso me cadastrar?</p>
          <Line />
        </div>
      </section>
    </div>
  )
}

