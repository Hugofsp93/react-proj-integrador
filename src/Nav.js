import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', label: 'Início' },
  { to: '/about', label: 'Tela1' },
  { to: '/author', label: 'Tela2' }
];

const Nav = () => {
  const links = routes.map(({ to, label }) => {
    return <NavLink strict exact to={to} key={to}>{label}</NavLink>}
  )

  return <nav>{ links }</nav>;
}

export default Nav
