import React from 'react'
import Header from '../Header/header'
import Nav from '../Nav/nav'
import './header-container.css'
export default function HeaderContainer(){
  return(
    <div className='header-container'>
      <Header/>
      <Nav/>
    </div>
  );
}