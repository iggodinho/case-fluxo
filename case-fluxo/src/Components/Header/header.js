import React from 'react'
import './header.css'
import {Link} from 'react-router-dom';
import { RiPlantLine } from 'react-icons/ri';
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Header(){
  return(
    <header className='header-bg'>
      <div className='header'>
        <div className='header-logo'>
          <Link to='/'><RiPlantLine className='logo'/></Link>
        </div>
        <div className='search'>
          <input id="search" placeholder="Qual produto orgânico você está procurando?"/>
        </div>
        <div className='icons'>
          <ul>
            <li><Link to='/login'><IoPersonOutline className='icon' id='header-user'/></Link></li>
            <li><Link to='/pagamento'><AiOutlineShoppingCart className='icon' id='header-cart'/></Link></li>
          </ul>
        </div>
      </div>
    </header>

    
  );
}

<a href='#'><RiPlantLine className='logo'/></a>