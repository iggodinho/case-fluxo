import React from 'react';
import './nav.css';
export default function Nav(){
  return(
    <nav className='nav-bg'>
      <div className='nav'>
        <ul>
          <li><a href='#home'>Página inicial</a></li>
          <li><a href='#products'>Produtos</a></li>
          <li><a href='#contact'>Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}