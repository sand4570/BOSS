import React from 'react';
import {useLocation, Link} from 'react-router-dom';


//import "./style.scss";

const NavLink = (login) => {
  const { search } = useLocation()

  if (login) {
    return (
      [
        {
          title: 'FORSIDE',
          url: '/',
          cName: 'nav-links'
        },
        {
          title: 'OM BOSS',
          url: '/about',
          cName: 'nav-links'
        },
        {
          title: 'KONTAKT',
          url: '/contact',
          cName: 'nav-links'
        },
        {
          title: 'LOG UD',
          url: '/logout',
          cName: 'nav-links'
        }
      ]
    )
  } else {
    return (
      [
        {
          title: 'FORSIDE',
          url: '/',
          cName: 'nav-links'
        },
        {
          title: 'OM BOSS',
          url: '/about',
          cName: 'nav-links'
        },
        {
          title: 'KONTAKT',
          url: '/contact',
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
