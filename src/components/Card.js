import React from 'react'
import './Card.css';

const CardExample = ({ nome, title, id }) => (
    <>
      <div key={id} className="divGeral">
        <div className="divTitle">
          <b>{title}</b>
        </div>
        <div className="divAutor">
          de: <a>{nome}</a>
        </div>
      </div>
    </>
)

export default CardExample;