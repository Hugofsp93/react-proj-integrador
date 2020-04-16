import React, { useState } from 'react'
import { Dom } from '../Utils'

export default function BigCategoriesComponent(props) {
  const { name, value, color } = props.category

  const icon = `/images/ic_${value}.svg`

  var styles = [
    'big-categories',
    (props.active === "true" || props.active === true) && 'active'
  ];

  return (
    <div className={Dom.classNames(styles)} style={{ background: color }} {...props} >
      <img src={icon} />
      <p style={{ color: 'white' }}>{name}</p>
    </div >
  )
}