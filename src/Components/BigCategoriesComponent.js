import React from 'react'

export default function BigCategoriesComponent(props) {

  return (
    <div className='big-categories' style={{ background: props.color }}>
      <p style={{ color: 'white' }}>{props.name}</p>
    </div>
  )
}