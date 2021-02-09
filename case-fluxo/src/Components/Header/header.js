import React from 'react'
import './header.css'

import { RiPlantLine } from 'react-icons/ri';
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineShoppingCart } from 'react-icons/ai';
export default function Header(){
  return(
    <header className='header-bg'>
      <div className='header'>
        <div className='header-logo'>
          <a href='#'><RiPlantLine className='logo'/></a>
        </div>
        <div className='search'>
          <input id="pesquisar" placeholder=" Pesquisar"/>
        </div>
        <div className='icons'>
          <ul>
            <li><a href="#login"><IoPersonOutline className='icon'/></a></li>
            <li><a href="#cart"><AiOutlineShoppingCart className='icon'/></a></li>
          </ul>
        </div>
      </div>
    </header>

    
  );
}

<a href='#'><RiPlantLine className='logo'/></a>