import React from 'react'
import { Images } from '../Utils'

export default function SmallCategoriesComponent(props) {

  return (
    <div className='small-categories' style={{ background: props.color }}>
      <img src={Images.path(`ic_${props.value}.svg`)} />
    </div>
  )
}