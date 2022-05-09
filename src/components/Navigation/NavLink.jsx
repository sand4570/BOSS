import React from 'react';

import "./style.scss";

const NavLink = (login) => {
  if (login) {
    return (
      [
        {
          title: 'FORSIDE',
          url: '#',
          cName: 'nav-links'
        },
        {
          title: 'OM BOSS',
          url: '#',
          cName: 'nav-links'
        },
        {
          title: 'KONTAKT',
          url: '#',
          cName: 'nav-links'
        },
        {
          title: 'LOG UD',
          url: '#',
          cName: 'nav-links'
        }
      ]
    )
  } else {
    return (
      [
        {
          title: 'FORSIDE',
          url: '#',
          cName: 'nav-links'
        },
        {
          title: 'OM BOSS',
          url: '#',
          cName: 'nav-links'
        },
        {
          title: 'KONTAKT',
          url: '#',
          cName: 'nav-links'
        },
        {
          title: 'LOG IND',
          url: '/login',
          cName: 'nav-links'
        }
      ]
    )
  }



}  

export default NavLink;
