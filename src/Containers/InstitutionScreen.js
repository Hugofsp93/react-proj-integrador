import React, { useState, useEffect } from 'react'

import categoriesDb from '../db/categories.json'
import { useHistory, useParams } from "react-router-dom"

export default function Institution() {

  let { id } = useParams();

  return (
    <div className="view">
      <h2>Instituições {id}</h2>
    </div>
  )
}