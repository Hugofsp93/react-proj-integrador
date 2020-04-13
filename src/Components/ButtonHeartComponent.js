import React from 'react'
import { FaHeart } from "react-icons/fa"
import { Dom } from '../Utils'

export default function ButtonHeart(props) {
  var classStyle = [
    'favorite-icon',
    (props.active === "true" || props.active === true) && 'active'
  ];

  return (
    <div className={Dom.classNames(classStyle)} {...props}>
      <FaHeart />
    </div>
  )
}