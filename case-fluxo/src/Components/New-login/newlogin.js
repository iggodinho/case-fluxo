import React from 'react'
import './newlogin.css';
import {BsArrowLeftShort} from 'react-icons/bs';
import { Link } from 'react-router-dom';
export default function NewLogin(){
  return (
    <div className='login-bg'>
      <div className='login'>
        <Link className='link' to='/login'><BsArrowLeftShort className='back-to-login'/></Link>
        <div className='new-login'>
          <form action=""/>
            <input id="newlogin-user" placeholder="Nome de usuário"/>
            <input id="newlogin-email" placeholder="Email"/>
            <input id="newlogin-cpf" placeholder="CPF"/>
            <input id="newlogin-password" placeholder="Senha" type="password"/>
            <input type="submit" value="Criar" className="send-button"/>
        </div>
      </div>
      
    </div>
  );
}
