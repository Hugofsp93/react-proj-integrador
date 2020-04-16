import React from 'react';
import { NavLink } from 'react-router-dom'

const routes = [
  { to: '/', label: 'Lista', icon: 'list' },
  { to: '/favorites', label: 'Favoritos', icon: 'fav' },
]

export default function Nav() {
  const renderItem = (label, icon) => {
    return <div><img src={icon} />{label}</div>
  }
  const links = routes.map(({ to, label, icon }) => {
    const img = `/images/ic_${icon}.svg`
    return <NavLink exact={true} to={to} key={to}>{renderItem(label, img)}</NavLink>
  })

  return <nav>{links}</nav >;
}


