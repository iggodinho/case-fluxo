import React from 'react';
import './nav.css';

import {Link} from 'react-router-dom';

export default function Nav(){
  return(
    <nav className='nav-bg'>
      <div className='nav'>
        <ul>
          <li><Link to='/'>Página inicial</Link></li>
          <li><Link to='/produtos'>Produtos</Link></li>
          <li><Link to='/contato'>Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
}