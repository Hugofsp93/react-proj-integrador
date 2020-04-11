import React from 'react';
import { NavLink } from 'react-router-dom'

const routes = [
  { to: '/', label: 'Lista' },
  { to: '/favorites', label: 'Favoritos' },
]

export default function Nav() {
  const links = routes.map(({ to, label }) => {
    return <NavLink exact={true} to={to} key={to}>{label}</NavLink>
  })

  return <nav>{links}</nav >;
}


