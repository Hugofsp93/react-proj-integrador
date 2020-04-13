import React from 'react'

export default function SmallCategoriesComponent(props) {

  return (
    <div className='small-categories' style={{ background: props.color }}>
      <p style={{ color: 'white' }}>{props.name}</p>
    </div>
  )
}